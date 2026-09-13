export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";

// Server-side GET. Returns `fallback` if the API is unreachable so pages still render.
export async function getData(path, fallback = []) {
  try {
    const res = await fetch(`${API_URL}${path}`, { cache: "no-store" });
    if (!res.ok) return fallback;
    return await res.json();
  } catch {
    return fallback;
  }
}

export async function sendJson(path, body, { method = "POST", token } = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = res.status === 204 ? null : await res.json().catch(() => null);
  if (!res.ok) throw new Error(data?.message || "Xəta baş verdi");
  return data;
}

export const DEFAULT_SETTINGS = {
  clinicName: "Medika Klinika",
  phone: "(+99412) 555 55 55",
  phoneRaw: "+994125555555",
  whatsapp: "994505555555",
  email: "info@medika.az",
  addresses: ["Azadlıq pr. 100, Bakı, Azərbaycan"],
  workingHours: "Hər gün 08:00 – 22:00",
  socials: { facebook: "#", instagram: "#" },
};
