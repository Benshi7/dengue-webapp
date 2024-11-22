import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // Para pruebas que renderizan componentes
    globals: true,        // Habilita `describe` y otras funciones globales de pruebas

  },
});