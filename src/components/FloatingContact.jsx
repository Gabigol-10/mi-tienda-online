// src/components/FloatingContact.jsx
import React from "react";
import styles from "../styles/FloatingContact.module.css";

export default function FloatingContact({ onOpen }) {
  return (
    <button className={styles.fab} onClick={onOpen} aria-label="Contáctanos">
      ✉️
    </button>
  );
}
