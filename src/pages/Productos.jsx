// src/pages/Productos.jsx
import { useEffect, useState } from "react";
import { useStore } from "../store/estado";
import { mockProductos } from "../mockProductos";

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const agregarProducto = useStore((state) => state.agregarProducto);

  useEffect(() => {
    setTimeout(() => setProductos(mockProductos), 500);
  }, []);

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h1>Productos de Farmacia</h1>
      {productos.map((p) => (
        <div key={p.id} className="card">
          <h2>{p.nombre}</h2>
          <p>Precio: ${p.precio.toFixed(2)}</p>
          <button onClick={() => agregarProducto(p)}>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
}
