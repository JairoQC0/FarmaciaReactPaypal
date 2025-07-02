# 🛒 FarmaciaSalud+

Aplicación web de una tienda virtual de farmacia hecha con **React + Vite**, que permite:

- Ver productos (mock)
- Agregar al carrito
- Eliminar productos
- Persistir el carrito con Zustand + localStorage
- Realizar pagos simulados con **PayPal Sandbox**
- Navegación moderna con React Router

---

## 🚀 Tecnologías usadas

- ✅ React 18 + Vite
- ✅ Zustand (estado global)
- ✅ PayPal Checkout (Sandbox)
- ✅ React Router DOM
- ✅ Axios (opcional para futuras integraciones API)

---

## 📦 Instalación

1. Clona el repositorio

```bash
git clone https://github.com/JairoQC0/FarmaciaReactPaypal.git
cd tienda
```

2. Instala dependencias
```bash
npm install
```

3. Crea un archivo .env en la raíz y pega tu Client ID de PayPal Sandbox:
```bash
VITE_CLIENT_PAYPAL=
```

4. Inicia el servidor de desarrollo
```bash
npm run dev
```
