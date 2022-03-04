import { ReactElement, useContext } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

// contexts
import { AuthContext } from 'contexts/AuthContext';

export const RequireAuthRoute = (): ReactElement => {
    // hooks
    const location = useLocation();
    const { isAuthenticated } = useContext(AuthContext);

    return isAuthenticated ? (
        <Outlet />
    ) : (
        <Navigate to={{ pathname: '/auth/login' }} state={{ from: location }} />
    );
};
