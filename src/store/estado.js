// src/store/estado.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set) => ({
      carrito: [],

      // Agrega producto al carrito
      agregarProducto: (producto) =>
        set((state) => ({ carrito: [...state.carrito, producto] })),

      // Elimina producto por índice
      eliminarProducto: (index) =>
        set((state) => ({
          carrito: state.carrito.filter((_, i) => i !== index),
        })),

      // Vacía el carrito completo
      vaciarCarrito: () => set({ carrito: [] }),
    }),
    {
      name: "carrito-storage", // clave de localStorage
    }
  )
);
