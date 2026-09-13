import { Router } from "express";
import { db, save, nextId } from "../db.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();
router.use(requireAuth);

const APPOINTMENT_STATUSES = ["new", "confirmed", "completed", "cancelled"];

router.get("/appointments", (req, res) => {
  res.json([...db().appointments].sort((a, b) => b.createdAt.localeCompare(a.createdAt)));
});
router.patch("/appointments/:id", async (req, res) => {
  const item = db().appointments.find((a) => a.id === Number(req.params.id));
  if (!item) return res.status(404).json({ message: "Tapılmadı" });
  if (!APPOINTMENT_STATUSES.includes(req.body?.status)) {
    return res.status(400).json({ message: "Status yanlışdır" });
  }
  item.status = req.body.status;
  await save();
  res.json(item);
});
router.delete("/appointments/:id", async (req, res) => {
  const list = db().appointments;
  const index = list.findIndex((a) => a.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Tapılmadı" });
  list.splice(index, 1);
  await save();
  res.status(204).end();
});

router.get("/messages", (req, res) => res.json([...db().messages].reverse()));

// Generic CRUD for content collections
const DOCTOR_FIELDS = ["name", "specialty", "departmentSlug", "experience", "photo", "bio", "education", "schedule", "price", "featured", "rating", "reviewsCount", "languages", "achievements"];
const DEPARTMENT_FIELDS = ["slug", "name", "tagline", "image", "description", "services", "prices"];
const SERVICE_FIELDS = ["slug", "title", "icon", "image", "description", "details", "features", "priceFrom", "departmentSlugs"];
const NEWS_FIELDS = ["title", "date", "category", "image", "excerpt", "content"];

function crud(collection, fields) {
  const pick = (body) => Object.fromEntries(fields.filter((f) => f in (body || {})).map((f) => [f, body[f]]));

  router.post(`/${collection}`, async (req, res) => {
    const item = { id: nextId(collection), ...pick(req.body) };
    db()[collection].push(item);
    await save();
    res.status(201).json(item);
  });
  router.put(`/${collection}/:id`, async (req, res) => {
    const item = db()[collection].find((x) => x.id === Number(req.params.id));
    if (!item) return res.status(404).json({ message: "Tapılmadı" });
    Object.assign(item, pick(req.body));
    await save();
    res.json(item);
  });
  router.delete(`/${collection}/:id`, async (req, res) => {
    const list = db()[collection];
    const index = list.findIndex((x) => x.id === Number(req.params.id));
    if (index === -1) return res.status(404).json({ message: "Tapılmadı" });
    list.splice(index, 1);
    await save();
    res.status(204).end();
  });
}

crud("doctors", DOCTOR_FIELDS);
crud("departments", DEPARTMENT_FIELDS);
crud("services", SERVICE_FIELDS);
crud("news", NEWS_FIELDS);
crud("testimonials", ["name", "role", "text", "rating", "doctorId"]);
crud("faqs", ["question", "answer", "category"]);
crud("packages", ["name", "price", "oldPrice", "features", "popular"]);
crud("partners", ["name"]);

export default router;
