// src/components/Navbar.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { CartContext } from "../App";

function Navbar({ onOpenContact }) {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((s, p) => s + p.qty, 0);

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <Link to="/" className={styles.brand}>
          <span className={styles.logo}>G</span>
          <span className={styles.title}>Galería Productos</span>
        </Link>
      </div>

      <ul className={styles.links}>
        <li><Link to="/productos">Productos</Link></li>
        <li><button className={styles.contactBtn} onClick={onOpenContact}>Contáctanos</button></li>
        <li>
          <Link to="/checkout" className={styles.checkoutBtn}>
            Checkout {totalItems > 0 && <span className={styles.count}>{totalItems}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
