"use client";

import { useCallback, useEffect, useState } from "react";
import PageBanner from "@/components/PageBanner";
import { API_URL, sendJson } from "@/lib/api";

const STATUS_LABELS = { new: "Yeni", confirmed: "Təsdiqləndi", completed: "Tamamlandı", cancelled: "Ləğv edildi" };
const TOKEN_KEY = "medika_admin_token";

export default function AdminPage() {
  const [token, setToken] = useState("");
  const [tab, setTab] = useState("appointments");
  const [appointments, setAppointments] = useState([]);
  const [messages, setMessages] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // localStorage is only available after mount; reading it during render would break hydration
    // eslint-disable-next-line react-hooks/set-state-in-effect
    try { setToken(localStorage.getItem(TOKEN_KEY) || ""); } catch {}
  }, []);

  const logout = useCallback(() => {
    try { localStorage.removeItem(TOKEN_KEY); } catch {}
    setToken("");
  }, []);

  const load = useCallback(async () => {
    if (!token) return;
    setError("");
    try {
      const headers = { Authorization: `Bearer ${token}` };
      const [a, m, d] = await Promise.all([
        fetch(`${API_URL}/admin/appointments`, { headers }),
        fetch(`${API_URL}/admin/messages`, { headers }),
        fetch(`${API_URL}/doctors`),
      ]);
      if (a.status === 401) return logout();
      setAppointments(await a.json());
      setMessages(await m.json());
      setDoctors(await d.json());
    } catch {
      setError("Serverə qoşulmaq mümkün olmadı");
    }
  }, [token, logout]);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { load(); }, [load]);

  async function changeStatus(id, status) {
    try {
      const updated = await sendJson(`/admin/appointments/${id}`, { status }, { method: "PATCH", token });
      setAppointments((list) => list.map((a) => (a.id === id ? updated : a)));
    } catch (err) { setError(err.message); }
  }

  async function remove(id) {
    if (!confirm("Müraciət silinsin?")) return;
    try {
      await sendJson(`/admin/appointments/${id}`, null, { method: "DELETE", token });
      setAppointments((list) => list.filter((a) => a.id !== id));
    } catch (err) { setError(err.message); }
  }

  const doctorName = (id) => doctors.find((d) => d.id === id)?.name || "—";

  return (
    <>
      <PageBanner title="Admin panel" crumbs={[{ label: "Admin" }]} />
      <section className="admin">
        <div className="container">
          {!token ? (
            <Login onLogin={(t) => { try { localStorage.setItem(TOKEN_KEY, t); } catch {} setToken(t); }} />
          ) : (
            <>
              <div className="filters" style={{ justifyContent: "space-between" }}>
                <div className="filters" style={{ margin: 0 }}>
                  <button className={`chip ${tab === "appointments" ? "active" : ""}`} onClick={() => setTab("appointments")}>
                    Qəbul müraciətləri ({appointments.length})
                  </button>
                  <button className={`chip ${tab === "messages" ? "active" : ""}`} onClick={() => setTab("messages")}>
                    Mesajlar ({messages.length})
                  </button>
                </div>
                <div className="filters" style={{ margin: 0 }}>
                  <button className="btn small outline" onClick={load}>Yenilə</button>
                  <button className="btn small" onClick={logout}>Çıxış</button>
                </div>
              </div>
              {error && <div className="alert err" style={{ marginBottom: 16 }}>{error}</div>}

              {tab === "appointments" ? (
                appointments.length ? (
                  <div className="table-wrap">
                    <table>
                      <thead>
                        <tr><th>#</th><th>Pasiyent</th><th>Telefon</th><th>Həkim</th><th>Tarix</th><th>Qeyd</th><th>Status</th><th /></tr>
                      </thead>
                      <tbody>
                        {appointments.map((a) => (
                          <tr key={a.id}>
                            <td>{a.id}</td>
                            <td>{a.fullName}</td>
                            <td><a href={`tel:${a.phone}`}>{a.phone}</a></td>
                            <td>{doctorName(a.doctorId)}</td>
                            <td>{a.date} {a.time}</td>
                            <td style={{ maxWidth: 220 }}>{a.note || "—"}</td>
                            <td>
                              <span className={`status ${a.status}`}>{STATUS_LABELS[a.status]}</span>
                              <div style={{ marginTop: 6 }}>
                                <select value={a.status} onChange={(e) => changeStatus(a.id, e.target.value)}>
                                  {Object.entries(STATUS_LABELS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                                </select>
                              </div>
                            </td>
                            <td><button className="btn small outline" onClick={() => remove(a.id)}>Sil</button></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : <div className="empty">Hələ müraciət yoxdur</div>
              ) : messages.length ? (
                <div className="table-wrap">
                  <table>
                    <thead><tr><th>Ad</th><th>Telefon</th><th>E-poçt</th><th>Mesaj</th><th>Tarix</th></tr></thead>
                    <tbody>
                      {messages.map((m) => (
                        <tr key={m.id}>
                          <td>{m.fullName}</td><td>{m.phone}</td><td>{m.email || "—"}</td>
                          <td style={{ maxWidth: 320 }}>{m.message}</td>
                          <td>{new Date(m.createdAt).toLocaleString("az-AZ")}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : <div className="empty">Hələ mesaj yoxdur</div>}
            </>
          )}
        </div>
      </section>
    </>
  );
}

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function submit(e) {
    e.preventDefault();
    setError("");
    try {
      const { token } = await sendJson("/auth/login", { username, password });
      onLogin(token);
    } catch (err) {
      setError(err.message === "Failed to fetch" ? "Serverə qoşulmaq mümkün olmadı" : err.message);
    }
  }

  return (
    <div className="login-box">
      <div className="partnership" style={{ width: "100%", margin: 0, padding: 36 }}>
        <h2>Giriş</h2>
        <form className="form" onSubmit={submit}>
          <div>
            <label htmlFor="u">İstifadəçi adı</label>
            <input id="u" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="p">Şifrə</label>
            <input id="p" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button className="btn">Daxil ol</button>
          {error && <div className="alert err">{error}</div>}
        </form>
      </div>
    </div>
  );
}
