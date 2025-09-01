import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Mercado Express</h3>
          <p>Tu tienda online de confianza con los mejores productos y precios del mercado.</p>
          <div className={styles.socialLinks}>
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="WhatsApp">📱</a>
          </div>
        </div>
        
        <div className={styles.footerSection}>
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/checkout">Carrito</Link></li>
            <li><button className={styles.contactLink}>Contáctanos</button></li>
          </ul>
        </div>
        
        <div className={styles.footerSection}>
          <h4>Categorías</h4>
          <ul>
            <li><Link to="/productos">Electrónica</Link></li>
            <li><Link to="/productos">Ropa</Link></li>
            <li><Link to="/productos">Deportes</Link></li>
            <li><Link to="/productos">Muebles</Link></li>
          </ul>
        </div>
        
        <div className={styles.footerSection}>
          <h4>Información de Contacto</h4>
          <div className={styles.contactInfo}>
            <p>📍 Av. Principal 123, Lima</p>
            <p>📞 +51 999 888 777</p>
            <p>✉️ info@mercadoexpress.com</p>
            <p>🕒 Lun - Vie: 9:00 - 18:00</p>
          </div>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <p>© 2025 Mercado Express. Todos los derechos reservados.</p>
        <div className={styles.legalLinks}>
          <a href="#">Términos y Condiciones</a>
          <a href="#">Política de Privacidad</a>
          <a href="#">Política de Devoluciones</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
