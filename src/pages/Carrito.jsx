// src/pages/Carrito.jsx
import { useStore } from "../store/estado";

export default function Carrito() {
  const carrito = useStore((s) => s.carrito);
  const eliminar = useStore((s) => s.eliminarProducto);

  const total = carrito.reduce((sum, p) => sum + p.precio, 0).toFixed(2);

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h1>Tu Carrito</h1>

      {carrito.length === 0 ? (
        <p>No hay productos aún.</p>
      ) : (
        <>
          {carrito.map((p, i) => (
            <div
              key={i}
              className="card"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>
                <strong>{p.nombre}</strong> — ${p.precio.toFixed(2)}
              </span>

              {/* Botón eliminar */}
              <button
                style={{ backgroundColor: "#e63946" }}
                onClick={() => eliminar(i)}
              >
                🗑Eliminar
              </button>
            </div>
          ))}

          <div style={{ marginTop: "1rem", fontWeight: "bold" }}>
            Total: ${total}
          </div>
        </>
      )}
    </div>
  );
}
