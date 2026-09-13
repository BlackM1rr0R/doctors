# Medika Klinika — həkim saytı

bravotravel.az dizayn üslubunda (narıncı `#f58220` + göy `#1e419b`, buludlu hero slayder, yuvarlaq kartlar, mozaika şöbələr bölməsi, göy onlayn forma bloku) hazırlanmış klinika saytı.

## Struktur

```
backend/   Node.js + Express REST API (JSON fayl bazası)
frontend/  Next.js 16 (App Router)
```

## İşə salmaq

```bash
# 1) Backend
cd backend
npm install
cp .env.example .env     # lazım olsa dəyişin
npm run dev              # http://localhost:4000

# 2) Frontend
cd frontend
npm install
npm run dev              # http://localhost:3000
```

Frontend API ünvanını `frontend/.env.local` faylındakı `NEXT_PUBLIC_API_URL` dəyişənindən oxuyur.

## Vercel-ə deploy

Kök qovluqdakı `vercel.json` hər iki servisi bir layihədə, bir domendə işlədir:
- `/api/*` → `backend` (Express), qalan bütün yollar → `frontend` (Next.js)
- Next.js server kodu backend-ə daxili binding ilə `BACKEND_URL` üzərindən, brauzer isə eyni domendəki `/api` ünvanına müraciət edir.

Vercel-də **Environment Variables** bölməsinə əlavə edin:

| Key | Qiymət |
|---|---|
| `JWT_SECRET` | uzun təsadüfi sətir |
| `ADMIN_USERNAME` | admin istifadəçi adı |
| `ADMIN_PASSWORD` | güclü şifrə |

`NEXT_PUBLIC_API_URL` və `BACKEND_URL` **əlavə etməyin** — birincisi olmayanda `/api` istifadə olunur, ikincisini Vercel özü yaradır.

> Vercel-də JSON bazası `/tmp/db.json`-da saxlanılır və müvəqqətidir: müraciətlər serverin yenidən başlamasında itə bilər. Real istifadə üçün Postgres (məs. Neon) kimi daimi baza qoşulmalıdır.

## Səhifələr

| Yol | Təsvir |
|---|---|
| `/` | Hero slayder, seçilmiş həkimlər, xəbərlər, şöbələr, onlayn qəbul |
| `/doctors` | Həkimlər (şöbə filtri, axtarış) |
| `/doctors/:id` | Həkim profili + qəbula yazılma |
| `/departments`, `/departments/:slug` | Şöbələr |
| `/services`, `/about`, `/contact`, `/appointment` | Digər səhifələr |
| `/admin` | Admin panel (müraciətlər, statuslar, mesajlar) |

## API

Açıq:
- `GET /api/settings`, `/api/slides`, `/api/services`, `/api/news`
- `GET /api/departments`, `/api/departments/:slug`
- `GET /api/doctors?department=&q=&featured=true`, `/api/doctors/:id`
- `POST /api/appointments` — `{ fullName, phone, date, email?, doctorId?, departmentSlug?, time?, note? }`
- `POST /api/contact` — `{ fullName, phone, message, email? }`

Admin (`Authorization: Bearer <token>`):
- `POST /api/auth/login` — `{ username, password }` (`.env`-dəki `ADMIN_USERNAME` / `ADMIN_PASSWORD`)
- `GET /api/admin/appointments`, `PATCH /api/admin/appointments/:id` `{ status }`, `DELETE ...`
- `GET /api/admin/messages`
- `POST | PUT | DELETE /api/admin/{doctors|departments|services|news}/:id`

Məlumatlar ilk işə salınmada `backend/src/data/seed.js`-dən `backend/src/data/db.json` faylına yazılır. Sıfırlamaq üçün `db.json`-u silin.
