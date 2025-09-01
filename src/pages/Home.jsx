import React from "react";
import { Link } from "react-router-dom";
import products from "../data/products";
import styles from "../styles/Home.module.css";

function Home() {
  // Obtener categorías únicas
  const categories = Array.from(new Set(products.map(p => p.category)));
  
  // Productos destacados (primeros 4)
  const featuredProducts = products.slice(0, 4);

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Bienvenido a <span className={styles.brandName}>Mercado Express</span></h1>
          <p>Tu tienda online de confianza con los mejores productos y precios</p>
          <Link to="/productos" className={styles.ctaButton}>
            Ver Productos
          </Link>
        </div>
      </section>

      {/* Categorías */}
      <section className={styles.categories}>
        <h2>Nuestras Categorías</h2>
        <div className={styles.categoryGrid}>
          {categories.map(category => (
            <Link key={category} to="/productos" className={styles.categoryCard}>
              <div className={styles.categoryIcon}>
                {category === "Electrónica" && "📱"}
                {category === "Ropa" && "👕"}
                {category === "Deportes" && "⚽"}
                {category === "Muebles" && "🪑"}
              </div>
              <h3>{category}</h3>
              <p>{products.filter(p => p.category === category).length} productos</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Productos Destacados */}
      <section className={styles.featured}>
        <h2>Productos Destacados</h2>
        <div className={styles.productGrid}>
          {featuredProducts.map(product => (
            <article key={product.id} className={styles.productCard}>
              <Link to={`/productos/${product.id}`}>
                <img src={product.img} alt={product.title} className={styles.productImage} />
                <div className={styles.productInfo}>
                  <h3>{product.title}</h3>
                  <p className={styles.category}>{product.category}</p>
                  <p className={styles.price}>S/ {product.price}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
        <div className={styles.viewAll}>
          <Link to="/productos" className={styles.viewAllButton}>
            Ver Todos los Productos
          </Link>
        </div>
      </section>

      {/* Información de la tienda */}
      <section className={styles.info}>
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>🚚</div>
            <h3>Envío Rápido</h3>
            <p>Entrega en 24-48 horas</p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>💳</div>
            <h3>Pago Seguro</h3>
            <p>Múltiples métodos de pago</p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>🔄</div>
            <h3>Garantía</h3>
            <p>30 días de garantía</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
