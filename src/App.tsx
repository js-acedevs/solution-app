// styles
import './styles/main.scss';

// react
import { ReactElement } from 'react';

// router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// molecules
import { RequireAuthRoute, RequireNonAuthRoute } from '@molecules';

// pages
import { ErrorPage, LoginPage, RootPage, RegisterPage } from '@pages';

const App = (): ReactElement => (
    <BrowserRouter>
        <Routes>
            <Route element={<RequireAuthRoute />}>
                <Route path="/" element={<RootPage />} />
            </Route>
            <Route element={<RequireNonAuthRoute />}>
                <Route path="/auth/login" element={<LoginPage />} />
                <Route path="/auth/register" element={<RegisterPage />} />
            </Route>
            <Route path="/*" element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>
);

export default App;
