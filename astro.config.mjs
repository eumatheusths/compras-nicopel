import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node'; // Se estiver usando adaptador node, senão remova

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      // Força a geração do CSS base
      applyBaseStyles: true,
    }),
  ],
  output: 'server', // Importante para SSR (Banco de dados)
  adapter: node({
    mode: 'standalone',
  }),
});