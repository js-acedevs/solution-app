// styles
import './styles/main.scss';
import 'antd/dist/antd.css';

// react
import { ReactElement } from 'react';

// router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages
import { ErrorPage, RootPage } from '@pages';

const App = (): ReactElement => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<RootPage />} />
            <Route path="/*" element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>
);

export default App;
