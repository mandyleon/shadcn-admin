/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_ENDPOINT: string
  // Dev server host (e.g. '127.0.0.1' or '0.0.0.0')
  readonly VITE_DEV_HOST?: string
  // Dev server port (string, will be parsed as number)
  readonly VITE_DEV_PORT?: string
  // Public origin that points to the dev server via proxy/tunnel (e.g. 'http://imessagebridgeps.com')
  readonly VITE_PUBLIC_ORIGIN?: string
  // Comma-separated list of allowed hostnames for Vite (e.g. 'example.com,localhost')
  readonly VITE_ALLOWED_HOSTS?: string
  // Agrega más variables de entorno aquí según sea necesario
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
