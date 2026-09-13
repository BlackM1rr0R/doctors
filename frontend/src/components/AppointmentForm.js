"use client";

import { useMemo, useState } from "react";
import Icon from "./Icons";
import { WorldMap, Cloud } from "./Decor";
import { sendJson } from "@/lib/api";

const EMPTY = { fullName: "", phone: "", email: "", departmentSlug: "", doctorId: "", date: "", time: "", note: "" };

export default function AppointmentForm({ doctors = [], departments = [], initialDoctorId = "", title = "Onlayn qəbul", withLady = true }) {
  const initialDoctor = doctors.find((d) => String(d.id) === String(initialDoctorId));
  const [form, setForm] = useState({ ...EMPTY, doctorId: initialDoctor ? String(initialDoctor.id) : "", departmentSlug: initialDoctor?.departmentSlug || "" });
  const [status, setStatus] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState(false);

  const filteredDoctors = useMemo(
    () => (form.departmentSlug ? doctors.filter((d) => d.departmentSlug === form.departmentSlug) : doctors),
    [doctors, form.departmentSlug]
  );
  const today = new Date().toISOString().slice(0, 10);

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value, ...(name === "departmentSlug" ? { doctorId: "" } : {}) }));
  };

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", text: "" });
    try {
      const res = await sendJson("/appointments", form);
      setStatus({ type: "ok", text: res.message });
      setForm(EMPTY);
    } catch (err) {
      setStatus({ type: "err", text: err.message === "Failed to fetch" ? "Serverə qoşulmaq mümkün olmadı" : err.message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="order" id="appointment">
      <div className="container" style={{ position: "relative" }}>
        {withLady && (
          <div className="lady">
            <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80&auto=format&fit=crop" alt="" />
          </div>
        )}
        <div className="partnership" style={withLady ? undefined : { width: "100%", paddingLeft: 70 }}>
          <WorldMap className="world" />
          <div className="phone-icon"><Icon name="calendar" size={30} /></div>
          <h2>{title}</h2>

          <form className="form" onSubmit={submit}>
            <div>
              <label htmlFor="fullName">Ad, soyad *</label>
              <input id="fullName" name="fullName" value={form.fullName} onChange={update} required />
            </div>
            <div>
              <label htmlFor="phone">Telefon *</label>
              <input id="phone" name="phone" type="tel" placeholder="+994 __ ___ __ __" value={form.phone} onChange={update} required />
            </div>
            <div>
              <label htmlFor="departmentSlug">Şöbə</label>
              <select id="departmentSlug" name="departmentSlug" value={form.departmentSlug} onChange={update}>
                <option value="">Seçin</option>
                {departments.map((d) => <option key={d.slug} value={d.slug}>{d.name}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="doctorId">Həkim</label>
              <select id="doctorId" name="doctorId" value={form.doctorId} onChange={update}>
                <option value="">Seçin</option>
                {filteredDoctors.map((d) => <option key={d.id} value={d.id}>{d.name} — {d.specialty}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="date">Tarix *</label>
              <input id="date" name="date" type="date" min={today} value={form.date} onChange={update} required />
            </div>
            <div>
              <label htmlFor="time">Saat</label>
              <input id="time" name="time" type="time" value={form.time} onChange={update} />
            </div>
            <div className="full">
              <label htmlFor="note">Qeyd</label>
              <textarea id="note" name="note" value={form.note} onChange={update} placeholder="Şikayətiniz və ya əlavə məlumat" />
            </div>
            <div className="full flexable">
              <button className="btn" disabled={loading}>{loading ? "Göndərilir..." : "Qeydiyyatdan keç"}</button>
              {status.text && <div className={`alert ${status.type}`}>{status.text}</div>}
            </div>
          </form>
          <Cloud className="bottom-cloud" width={420} />
        </div>
      </div>
    </section>
  );
}
