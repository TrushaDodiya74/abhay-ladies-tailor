import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
<<<<<<< HEAD
    base: '/abhay-ladies-tailor/',   // 🔥 IMPORTANT for GitHub Pages
=======
    base: "/abhay-ladies-tailor/", // ⚠️ Repo name same mukvo
>>>>>>> 2ec5540b3768af4d79a11ea53739d7a977fc44f2

    server: {
      port: 3000,
      host: '0.0.0.0',
    },

    plugins: [react()],

    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});

