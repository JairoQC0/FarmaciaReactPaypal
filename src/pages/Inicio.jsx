// src/pages/Inicio.jsx
import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h1>Bienvenido a FarmaciaSalud+</h1>
      <p style={{ fontSize: "1.2rem" }}>
        En <strong>FarmaciaSalud+</strong> nos preocupamos por tu bienestar.
        Encuentra medicamentos esenciales, productos de cuidado personal y
        suplementos a un precio justo.
      </p>

      <p style={{ fontSize: "1rem" }}>
        Nuestra tienda ofrece productos confiables y aprobados, listos para ser
        enviados a tu hogar. ¡Compra seguro con <strong>PayPal</strong> y recibe
        tu pedido rápidamente!
      </p>

      <div style={{ marginTop: "2rem" }}>
        <Link to="/productos">
          <button>Ver Productos</button>
        </Link>
      </div>
    </div>
  );
}
