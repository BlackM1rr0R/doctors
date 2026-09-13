"use client";

import { useState } from "react";
import { sendJson } from "@/lib/api";

const EMPTY = { fullName: "", phone: "", email: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState(false);
  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await sendJson("/contact", form);
      setStatus({ type: "ok", text: res.message });
      setForm(EMPTY);
    } catch (err) {
      setStatus({ type: "err", text: err.message === "Failed to fetch" ? "Serverə qoşulmaq mümkün olmadı" : err.message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="partnership" style={{ width: "100%", margin: 0, padding: "36px 40px 50px" }}>
      <h2>Bizə yazın</h2>
      <form className="form" onSubmit={submit}>
        <div>
          <label htmlFor="c-name">Ad, soyad *</label>
          <input id="c-name" name="fullName" value={form.fullName} onChange={update} required />
        </div>
        <div>
          <label htmlFor="c-phone">Telefon *</label>
          <input id="c-phone" name="phone" type="tel" value={form.phone} onChange={update} required />
        </div>
        <div className="full">
          <label htmlFor="c-email">E-poçt</label>
          <input id="c-email" name="email" type="email" value={form.email} onChange={update} />
        </div>
        <div className="full">
          <label htmlFor="c-msg">Mesaj *</label>
          <textarea id="c-msg" name="message" value={form.message} onChange={update} required />
        </div>
        <div className="full flexable">
          <button className="btn" disabled={loading}>{loading ? "Göndərilir..." : "Göndər"}</button>
          {status.text && <div className={`alert ${status.type}`}>{status.text}</div>}
        </div>
      </form>
    </div>
  );
}
