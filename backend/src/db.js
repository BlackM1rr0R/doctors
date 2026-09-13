import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import seed from "./data/seed.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DB_FILE = path.join(__dirname, "data", "db.json");

let data = null;
let writing = Promise.resolve();

export async function initDb() {
  try {
    data = JSON.parse(await fs.readFile(DB_FILE, "utf8"));
  } catch {
    data = structuredClone(seed);
    await save();
  }
}

export function db() {
  return data;
}

// Serialize writes so concurrent requests don't corrupt the file
export function save() {
  writing = writing.then(() => fs.writeFile(DB_FILE, JSON.stringify(data, null, 2)));
  return writing;
}

export function nextId(collection) {
  return data[collection].reduce((max, item) => Math.max(max, item.id), 0) + 1;
}
