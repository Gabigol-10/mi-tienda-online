// src/components/ContactModal.jsx
import React, { useState } from "react";
import styles from "../styles/ContactModal.module.css";
import SuccessMessage from "./SuccessMessage";

export default function ContactModal({ open, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // simulación de envío
    setShowSuccessMessage(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <button className={styles.close} onClick={onClose}>✕</button>
          <h3>Contáctanos</h3>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input required placeholder="Nombre" value={form.name} onChange={e => setForm({...form, name: e.target.value})}/>
            <input required type="email" placeholder="Correo" value={form.email} onChange={e => setForm({...form, email: e.target.value})}/>
            <textarea required placeholder="Mensaje" value={form.message} onChange={e => setForm({...form, message: e.target.value})}/>
            <div className={styles.actions}>
              <button type="button" onClick={onClose} className={styles.btnSecondary}>Cerrar</button>
              <button type="submit" className={styles.btnPrimary}>Enviar</button>
            </div>
          </form>
        </div>
      </div>

      {/* Mensaje de éxito */}
      {showSuccessMessage && (
        <SuccessMessage
          message={`Mensaje enviado con éxito. ¡Gracias ${form.name}!`}
          onClose={() => setShowSuccessMessage(false)}
          duration={3000}
        />
      )}
    </>
  );
}
