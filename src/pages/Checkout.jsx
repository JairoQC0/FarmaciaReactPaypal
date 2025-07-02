// src/pages/Checkout.jsx
import { useStore } from "../store/estado";
import PayPalButton from "../components/PayPalButton";

export default function Checkout() {
  const carrito = useStore((state) => state.carrito);
  const total = carrito.reduce((sum, p) => sum + p.precio, 0).toFixed(2);

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h1>Tu Pedido</h1>
      {carrito.map((item, index) => (
        <div key={index} className="card">
          {item.nombre} - ${item.precio.toFixed(2)}
        </div>
      ))}
      <h3 style={{ marginTop: "1rem" }}>Total a pagar: ${total}</h3>
      <div style={{ marginTop: "1rem" }}>
        <PayPalButton />
      </div>
    </div>
  );
}
