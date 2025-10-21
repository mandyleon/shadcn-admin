import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // load env vars prefixed with VITE_ from .env files
  const env = loadEnv(mode, process.cwd(), 'VITE_')

  const devHost = env.VITE_DEV_HOST || '127.0.0.1'
  const devPort = Number(env.VITE_DEV_PORT || '5173')
  const publicOrigin = env.VITE_PUBLIC_ORIGIN || 'http://imessagebridgeps.com'
  const allowedHosts = (env.VITE_ALLOWED_HOSTS || 'localhost,127.0.0.1')
    .split(',')
    .map((s) => s.trim())

  return {
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
    server: {
      host: devHost,
      port: devPort,
      cors: true,
      // Keep strictPort false so Vite can pick a different port if requested one is busy
      strictPort: false,
      // Allow tunneled hosts and local dev hosts
      allowedHosts,
      // origin reported to clients (used when building HMR connection URLs)
      origin: publicOrigin,
      // default HMR config — the client port/path can be overridden via env if needed
      hmr: {
        protocol: publicOrigin.startsWith('https') ? 'wss' : 'ws',
        host: new URL(publicOrigin).hostname,
        clientPort: publicOrigin.startsWith('https') ? 443 : 80,
        path: '/watchdev/@vite/client',
      },
    },
  }
})
