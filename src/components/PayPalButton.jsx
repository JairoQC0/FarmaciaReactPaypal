// src/components/PayPalButton.jsx
import { useEffect } from "react";
import { useStore } from "../store/estado";

export default function PayPalButton() {
  const carrito = useStore((state) => state.carrito);
  const total = carrito.reduce((sum, p) => sum + p.precio, 0).toFixed(2);
  const clientId = import.meta.env.VITE_CLIENT_PAYPAL;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD`;
    script.async = true;
    script.onload = () => {
      if (window.paypal) {
        window.paypal
          .Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: total,
                    },
                  },
                ],
              });
            },
            onApprove: (data, actions) => {
              return actions.order.capture().then((details) => {
                alert(
                  `✅ Pago completado por ${details.payer.name.given_name}`
                );
                // Aquí puedes vaciar el carrito si deseas
              });
            },
            onError: (err) => {
              console.error("❌ Error en el pago", err);
            },
          })
          .render("#paypal-button-container");
      }
    };

    document.body.appendChild(script);

    return () => {
      // Limpia el botón al desmontar
      const container = document.getElementById("paypal-button-container");
      if (container) container.innerHTML = "";
    };
  });

  return <div id="paypal-button-container"></div>;
}
