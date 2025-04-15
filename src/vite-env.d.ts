/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_VOLLEY_API_X_RAPID_API_HOST: string
  readonly VITE_VOLLEY_API_X_RAPID_API_KEY: string
  readonly VITE_VOLLEY_API_BASE_URL: string
  readonly ENABLE_MOCK: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
