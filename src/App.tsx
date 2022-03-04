// styles
import './styles/main.scss';

// react
import { ReactElement } from 'react';

// router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages
import { ErrorPage, LoginPage, RootPage } from '@pages';

const App = (): ReactElement => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<RootPage />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/*" element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>
);

export default App;
