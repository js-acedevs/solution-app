import {
    FC,
    useState,
    useEffect,
    createContext,
    useCallback,
    useLayoutEffect,
    useRef,
    ReactNode,
    ReactElement,
} from 'react';
import { AuthContextProps } from '@interfaces/types/AuthContext.types';
import { client } from 'graphql/client';
import { wsClient } from 'graphql/client/links/wsLink';
import { AuthUserFragment, useAuthUserLazyQuery } from 'graphql/gen/graphql';
import { Nullable } from 'interfaces/types/Nullable.types';
import { readAuthToken, removeAuthToken, validateAuthToken, writeAuthToken } from 'utils/auth';

export const AuthContext = createContext<AuthContextProps>({
    user: null,
    loading: false,
    isAuthenticated: false,
    logout: () => null,
    login: (_token: string) => null,
    setUser: (_user: AuthUserFragment) => null,
});

export const AuthProvider: FC<ReactNode> = ({ children }): ReactElement => {
    // local state
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!readAuthToken());
    const [loading, setLoading] = useState<boolean>(false);
    const [user, setUser] = useState<Nullable<AuthUserFragment>>(null);

    // hooks
    const intialTokenCheckRef = useRef(true);

    const login = useCallback((token: string) => {
        setLoading(true);
        writeAuthToken(token);
        setIsAuthenticated(true);
    }, []);

    const logout = useCallback(() => {
        removeAuthToken();
        setLoading(false);
        setIsAuthenticated(false);
        setUser(null);
        client.clearStore();
    }, []);

    // graphql lazy query
    const [getAuthUser, { loading: authLoading }] = useAuthUserLazyQuery({
        fetchPolicy: 'network-only',
        nextFetchPolicy: 'cache-first',
        onCompleted: (res) => {
            if (res?.authUser) {
                setLoading(false);
                setUser(res.authUser[0]);
            } else logout();
        },
        onError: () => logout(),
    });

    useLayoutEffect(() => {
        if (intialTokenCheckRef.current) {
            const isTokenValid = validateAuthToken(readAuthToken() || '');
            setIsAuthenticated(isTokenValid);
        }
        intialTokenCheckRef.current = false;
    }, [logout]);

    useEffect(() => {
        if (!isAuthenticated) {
            client.clearStore();
            wsClient.close();
        }
    }, [isAuthenticated]);

    useEffect(() => {
        if (isAuthenticated) getAuthUser();
    }, [isAuthenticated, getAuthUser]);

    useEffect(() => {
        const token = readAuthToken();
        if (token && !validateAuthToken(token)) {
            logout();
        }
    }, [logout]);

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated,
                loading: loading || authLoading,
                setUser,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
