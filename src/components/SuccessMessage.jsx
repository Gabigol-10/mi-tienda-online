import React, { useEffect, useState } from "react";
import styles from "../styles/SuccessMessage.module.css";

export default function SuccessMessage({ message, onClose, duration = 3000 }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onClose();
      }, 300); 
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div className={`${styles.successMessage} ${isVisible ? styles.show : styles.hide}`}>
      <div className={styles.content}>
        <div className={styles.icon}>✅</div>
        <span className={styles.text}>{message}</span>
        <button className={styles.closeBtn} onClick={handleClose}>
          ✕
        </button>
      </div>
    </div>
  );
}
