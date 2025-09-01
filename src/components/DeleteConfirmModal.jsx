import React from "react";
import styles from "../styles/DeleteConfirmModal.module.css";

export default function DeleteConfirmModal({ isOpen, onClose, onConfirm, productName }) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h3>Confirmar Eliminación</h3>
          <button className={styles.closeBtn} onClick={onClose}>
            ✕
          </button>
        </div>
        
        <div className={styles.content}>
          <div className={styles.icon}>🗑️</div>
          <p>
            ¿Estás seguro de que quieres eliminar <strong>"{productName}"</strong> del carrito?
          </p>
          <p className={styles.warning}>
            Esta acción no se puede deshacer.
          </p>
        </div>
        
        <div className={styles.actions}>
          <button className={styles.cancelBtn} onClick={onClose}>
            Cancelar
          </button>
          <button className={styles.deleteBtn} onClick={onConfirm}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}
