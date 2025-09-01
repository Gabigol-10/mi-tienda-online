// src/pages/ProductDetail.jsx
import React, { useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import styles from "../styles/ProductDetail.module.css";
import { CartContext } from "../App";
import SuccessMessage from "../components/SuccessMessage";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const [qty, setQty] = useState(1);
  const { addToCart } = useContext(CartContext);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  if (!product) return <p>Producto no encontrado.</p>;

  const handleAddToCart = () => {
    addToCart(product, Number(qty));
    setShowSuccessMessage(true);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.left}>
        <img src={product.img} alt={product.title} className={styles.img}/>
      </div>
      <div className={styles.right}>
        <h2>{product.title}</h2>
        <p className={styles.cat}>{product.category}</p>
        <p className={styles.price}>S/ {product.price}</p>
        <div className={styles.qty}>
          <label>Cantidad:</label>
          <input type="number" min="1" value={qty} onChange={e => setQty(Math.max(1, Number(e.target.value)))} />
        </div>
        <div className={styles.buttonGroup}>
          <button className={styles.add} onClick={handleAddToCart}>
            Agregar al carrito
          </button>
          <Link to="/" className={styles.continueShopping}>
            Seguir Comprando
          </Link>
        </div>
      </div>

      {/* Mensaje de éxito */}
      {showSuccessMessage && (
        <SuccessMessage
          message={`${product.title} agregado al carrito`}
          onClose={() => setShowSuccessMessage(false)}
          duration={3000}
        />
      )}
    </div>
  );
}

export default ProductDetail;
