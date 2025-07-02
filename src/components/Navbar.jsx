// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useStore } from "../store/estado";

export default function Navbar() {
  const carrito = useStore((state) => state.carrito);

  return (
    <nav
      style={{
        backgroundColor: "#fff",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        marginBottom: "2rem",
      }}
    >
      <Link to="/">
        <h2 style={{ margin: 0, color: "green" }}> Farmacia</h2>
      </Link>
      <div>
        <Link to="/" style={{ marginRight: "1.5rem" }}>
          Inicio
        </Link>
        <Link to="/productos" style={{ marginRight: "1.5rem" }}>
          Productos
        </Link>
        <Link to="/carrito" style={{ marginRight: "1.5rem" }}>
          🛒 Carrito ({carrito.length})
        </Link>
        <Link to="/checkout">Pagar</Link>
      </div>
    </nav>
  );
}
