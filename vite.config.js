import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  console.log("VITE MODE:", mode); // will print 'development' or 'production'
  return {
    plugins: [react()],
  };
});
