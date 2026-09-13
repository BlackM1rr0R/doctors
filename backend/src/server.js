import "dotenv/config";
import express from "express";
import cors from "cors";
import { initDb } from "./db.js";
import publicRoutes from "./routes/public.js";
import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/admin.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ origin: process.env.CLIENT_URL?.split(",") || "*" }));
app.use(express.json({ limit: "1mb" }));

await initDb();

app.get("/api/health", (req, res) => res.json({ ok: true }));
app.use("/api", publicRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

app.use((req, res) => res.status(404).json({ message: "Tapılmadı" }));
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Server xətası" });
});

app.listen(PORT, () => console.log(`API işləyir: http://localhost:${PORT}`));
