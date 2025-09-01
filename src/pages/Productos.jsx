// src/pages/Productos.jsx
import React, { useState } from "react";
import products from "../data/products";
import { Link } from "react-router-dom";
import styles from "../styles/Productos.module.css";

function Productos() {
  const categories = ["Todos", ...Array.from(new Set(products.map(p => p.category)))];
  const [cat, setCat] = useState("Todos");
  const filtered = cat === "Todos" ? products : products.filter(p => p.category === cat);

  return (
    <div className={styles.container}>
      <h2>Nuestros Productos</h2>

      <div className={styles.filters}>
        {categories.map(c => (
          <button key={c} onClick={() => setCat(c)} className={`${styles.chip} ${c === cat ? styles.active : ""}`}>
            {c}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map(p => (
          <article className={styles.card} key={p.id}>
            <Link to={`/productos/${p.id}`}>
              <img src={p.img} alt={p.title} className={styles.image} />
            </Link>
            <div className={styles.body}>
              <h3>{p.title}</h3>
              <p className={styles.cat}>{p.category}</p>
              <p className={styles.price}>S/ {p.price}</p>
              <Link to={`/productos/${p.id}`} className={styles.btn}>Ver</Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Productos;
