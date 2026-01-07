/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_OPENPANEL_CLIENT_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
