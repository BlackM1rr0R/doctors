import { Router } from "express";
import { db, save, nextId } from "../db.js";

const router = Router();

router.get("/settings", (req, res) => res.json(db().settings));
router.get("/slides", (req, res) => res.json(db().slides));
router.get("/services", (req, res) => res.json(db().services));

router.get("/departments", (req, res) => res.json(db().departments));
router.get("/departments/:slug", (req, res) => {
  const department = db().departments.find((d) => d.slug === req.params.slug);
  if (!department) return res.status(404).json({ message: "Şöbə tapılmadı" });
  const doctors = db().doctors.filter((d) => d.departmentSlug === department.slug);
  res.json({ ...department, doctors });
});

router.get("/doctors", (req, res) => {
  const { department, q, featured } = req.query;
  let list = db().doctors;
  if (department) list = list.filter((d) => d.departmentSlug === department);
  if (featured === "true") list = list.filter((d) => d.featured);
  if (q) {
    const term = String(q).toLocaleLowerCase("az");
    list = list.filter((d) =>
      `${d.name} ${d.specialty}`.toLocaleLowerCase("az").includes(term)
    );
  }
  res.json(list);
});
router.get("/doctors/:id", (req, res) => {
  const doctor = db().doctors.find((d) => d.id === Number(req.params.id));
  if (!doctor) return res.status(404).json({ message: "Həkim tapılmadı" });
  res.json(doctor);
});

router.get("/news", (req, res) => res.json(db().news));

function required(body, fields) {
  return fields.filter((f) => !String(body?.[f] ?? "").trim());
}

router.post("/appointments", async (req, res) => {
  const missing = required(req.body, ["fullName", "phone", "date"]);
  if (missing.length) {
    return res.status(400).json({ message: "Zəhmət olmasa bütün məcburi xanaları doldurun", missing });
  }
  const { fullName, phone, email = "", doctorId = null, departmentSlug = "", date, time = "", note = "" } = req.body;
  if (!/^[+\d\s()-]{7,20}$/.test(phone)) {
    return res.status(400).json({ message: "Telefon nömrəsi düzgün deyil" });
  }
  const appointment = {
    id: nextId("appointments"),
    fullName: String(fullName).trim(),
    phone: String(phone).trim(),
    email: String(email).trim(),
    doctorId: doctorId ? Number(doctorId) : null,
    departmentSlug,
    date,
    time,
    note: String(note).slice(0, 1000),
    status: "new",
    createdAt: new Date().toISOString(),
  };
  db().appointments.push(appointment);
  await save();
  res.status(201).json({ message: "Müraciətiniz qəbul edildi. Tezliklə sizinlə əlaqə saxlanılacaq.", id: appointment.id });
});

router.post("/contact", async (req, res) => {
  const missing = required(req.body, ["fullName", "phone", "message"]);
  if (missing.length) {
    return res.status(400).json({ message: "Zəhmət olmasa bütün məcburi xanaları doldurun", missing });
  }
  const { fullName, phone, email = "", message } = req.body;
  db().messages.push({
    id: nextId("messages"),
    fullName, phone, email,
    message: String(message).slice(0, 2000),
    createdAt: new Date().toISOString(),
  });
  await save();
  res.status(201).json({ message: "Mesajınız göndərildi" });
});

export default router;
