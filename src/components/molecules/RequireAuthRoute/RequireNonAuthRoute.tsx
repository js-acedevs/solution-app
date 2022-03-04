// react
import { ReactElement, useContext } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

// contexts
import { AuthContext } from 'contexts/AuthContext';

export const RequireNonAuthRoute = (): ReactElement => {
    // hooks
    const location = useLocation();
    const { isAuthenticated } = useContext(AuthContext);

    return isAuthenticated ? (
        <Navigate to={{ pathname: '/' }} state={{ from: location }} />
    ) : (
        <Outlet />
    );
};
