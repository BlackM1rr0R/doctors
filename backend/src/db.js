import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import seed from "./data/seed.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DB_FILE = path.join(__dirname, "data", "db.json");

// Records submitted by visitors survive a seed upgrade; everything else is content from seed.js
const USER_COLLECTIONS = ["appointments", "messages"];

let data = null;
let writing = Promise.resolve();

export async function initDb() {
  let stored = null;
  try {
    stored = JSON.parse(await fs.readFile(DB_FILE, "utf8"));
  } catch {}

  if (stored?.version === seed.version) {
    data = stored;
    return;
  }
  // Seed version changed (or first run): refresh content, keep user-submitted records
  data = structuredClone(seed);
  for (const key of USER_COLLECTIONS) data[key] = stored?.[key] ?? [];
  await save();
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
