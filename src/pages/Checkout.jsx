// src/pages/Checkout.jsx
import React, { useContext, useState } from "react";
import { CartContext } from "../App";
import styles from "../styles/Checkout.module.css";
import SuccessMessage from "../components/SuccessMessage";
import DeleteConfirmModal from "../components/DeleteConfirmModal";

function Checkout() {
  const { cart, updateQty, removeFromCart, clearCart } = useContext(CartContext);
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [step, setStep] = useState(1); // 1: Resumen, 2: Información de pago, 3: Confirmación

  const total = cart.reduce((s, p) => s + p.price * p.qty, 0);
  const subtotal = total;
  const shipping = cart.length > 0 ? 15 : 0;
  const tax = subtotal * 0.18; // 18% IGV
  const grandTotal = subtotal + shipping + tax;

  const handleDeleteClick = (product) => {
    setProductToDelete(product);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    if (productToDelete) {
      removeFromCart(productToDelete.id);
      setShowDeleteModal(false);
      setProductToDelete(null);
      setSuccessMessage("Producto eliminado del carrito");
      setShowSuccessMessage(true);
    }
  };

  const simulatePayment = async () => {
    if (cart.length === 0) { 
      setSuccessMessage("Tu carrito está vacío");
      setShowSuccessMessage(true);
      return; 
    }
    setProcessing(true);
    await new Promise(r => setTimeout(r, 1400));
    setProcessing(false);
    setSuccess(true);
    clearCart();
    setSuccessMessage("¡Pago simulado con éxito! Gracias por tu compra");
    setShowSuccessMessage(true);
    setStep(3);
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  if (cart.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <div className={styles.emptyIcon}>🛒</div>
        <h2>Tu carrito está vacío</h2>
        <p>No tienes productos en tu carrito de compras</p>
        <a href="/" className={styles.continueShopping}>Continuar Comprando</a>
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
      {/* Header del checkout */}
      <div className={styles.header}>
        <h1>Finalizar Compra</h1>
        <div className={styles.steps}>
          <div className={`${styles.step} ${step >= 1 ? styles.active : ''}`}>
            <span className={styles.stepNumber}>1</span>
            <span className={styles.stepText}>Resumen</span>
          </div>
          <div className={`${styles.step} ${step >= 2 ? styles.active : ''}`}>
            <span className={styles.stepNumber}>2</span>
            <span className={styles.stepText}>Pago</span>
          </div>
          <div className={`${styles.step} ${step >= 3 ? styles.active : ''}`}>
            <span className={styles.stepNumber}>3</span>
            <span className={styles.stepText}>Confirmación</span>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        {/* Panel izquierdo - Resumen del pedido */}
        <div className={styles.orderSummary}>
          <h3>Resumen del Pedido</h3>
          <div className={styles.productsList}>
            {cart.map(item => (
              <div className={styles.productCard} key={item.id}>
                <div className={styles.productImage}>
                  <img src={item.img} alt={item.title}/>
                  <span className={styles.quantity}>{item.qty}</span>
                </div>
                <div className={styles.productInfo}>
                  <h4>{item.title}</h4>
                  <p className={styles.productPrice}>S/ {item.price} c/u</p>
                  <div className={styles.productActions}>
                    <input 
                      type="number" 
                      value={item.qty} 
                      onChange={e => updateQty(item.id, Math.max(1, Number(e.target.value)))} 
                      min="1"
                      className={styles.qtyInput}
                    />
                    <button 
                      onClick={() => handleDeleteClick(item)} 
                      className={styles.removeBtn}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
                <div className={styles.productTotal}>
                  S/ {(item.price * item.qty).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Panel derecho - Resumen de costos y botones */}
        <div className={styles.checkoutPanel}>
          <div className={styles.costSummary}>
            <h3>Resumen de Costos</h3>
            <div className={styles.costRow}>
              <span>Subtotal:</span>
              <span>S/ {subtotal.toFixed(2)}</span>
            </div>
            <div className={styles.costRow}>
              <span>Envío:</span>
              <span>S/ {shipping.toFixed(2)}</span>
            </div>
            <div className={styles.costRow}>
              <span>IGV (18%):</span>
              <span>S/ {tax.toFixed(2)}</span>
            </div>
            <div className={styles.costRow}>
              <span className={styles.totalLabel}>Total:</span>
              <span className={styles.totalAmount}>S/ {grandTotal.toFixed(2)}</span>
            </div>
          </div>

          <div className={styles.actionButtons}>
            {step === 1 && (
              <button onClick={nextStep} className={styles.nextBtn}>
                Continuar al Pago →
              </button>
            )}
            {step === 2 && (
              <>
                <button onClick={prevStep} className={styles.backBtn}>
                  ← Volver
                </button>
                <button 
                  disabled={processing} 
                  onClick={simulatePayment} 
                  className={styles.payBtn}
                >
                  {processing ? "Procesando..." : "Confirmar Pago"}
                </button>
              </>
            )}
            {step === 3 && (
              <div className={styles.successStep}>
                <div className={styles.successIcon}>✅</div>
                <h3>¡Pago Exitoso!</h3>
                <p>Tu pedido ha sido procesado correctamente</p>
                <a href="/" className={styles.continueShopping}>
                  Continuar Comprando
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal de confirmación de eliminación */}
      <DeleteConfirmModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDeleteConfirm}
        productName={productToDelete?.title || ""}
      />

      {/* Mensaje de éxito */}
      {showSuccessMessage && (
        <SuccessMessage
          message={successMessage}
          onClose={() => setShowSuccessMessage(false)}
          duration={3000}
        />
      )}
    </div>
  );
}

export default Checkout;
