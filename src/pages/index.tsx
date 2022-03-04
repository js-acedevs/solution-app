// loadable
import loadable from '@loadable/component';

// promise timeout
import { timeout } from 'promise-timeout';

// config
import { PAGE_LOAD_TIMEOUT } from '@config/global';

// import your loader component
const PageLoader = () => <div className="mx-auto">Loading...</div>;

//* Export all pages

// root pages
export const RootPage = loadable(() => timeout(import('./RootPage/RootPage'), PAGE_LOAD_TIMEOUT), {
    fallback: <PageLoader />,
});

export const LoginPage = loadable(
    () => timeout(import('./AuthPage/LoginPage'), PAGE_LOAD_TIMEOUT),
    {
        fallback: <PageLoader />,
    }
);

export const RegisterPage = loadable(
    () => timeout(import('./AuthPage/RegisterPage'), PAGE_LOAD_TIMEOUT),
    {
        fallback: <PageLoader />,
    }
);

// error pages
export const ErrorPage = loadable(
    () => timeout(import('./ErrorPage/ErrorPage'), PAGE_LOAD_TIMEOUT),
    {
        fallback: <PageLoader />,
    }
);
