/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly REACT_APP_NAME: string;
    readonly REACT_APP_PUBLIC_URL: string;
    readonly REACT_APP_GQL_API_URI: string;
    readonly REACT_APP_GQL_WS_API_URI: string;
    readonly REACT_APP_GQL_ACTIONS_URL: string;
    readonly REACT_APP_CRYPTO_SECRET_KEY: string;
    readonly REACT_APP_JWT_STORAGE_KEY: string;
    readonly REACT_APP_DEFAULT_USER_ROLE: string;
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
