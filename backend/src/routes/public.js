import { Router } from "express";
import { db, save, nextId } from "../db.js";

const router = Router();

// Read-only content collections exposed as-is
const COLLECTIONS = ["settings", "slides", "services", "departments", "news", "about", "packages", "testimonials", "faqs", "partners"];
for (const name of COLLECTIONS) {
  router.get(`/${name}`, (req, res) => res.json(db()[name]));
}

router.get("/departments/:slug", (req, res) => {
  const department = db().departments.find((d) => d.slug === req.params.slug);
  if (!department) return res.status(404).json({ message: "Şöbə tapılmadı" });
  const doctors = db().doctors.filter((d) => d.departmentSlug === department.slug);
  res.json({ ...department, doctors });
});

router.get("/services/:slug", (req, res) => {
  const service = db().services.find((s) => s.slug === req.params.slug);
  if (!service) return res.status(404).json({ message: "Xidmət tapılmadı" });
  const slugs = service.departmentSlugs || [];
  const doctors = db().doctors.filter((d) => slugs.includes(d.departmentSlug));
  res.json({ ...service, doctors });
});

router.get("/news/:id", (req, res) => {
  const item = db().news.find((n) => n.id === Number(req.params.id));
  if (!item) return res.status(404).json({ message: "Xəbər tapılmadı" });
  res.json(item);
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
