// gql
import { AuthUserFragment } from 'graphql/gen/graphql';

// types
import { Nullable } from './Nullable.types';

export interface AuthContextProps {
    loading: boolean;
    isAuthenticated: boolean;
    user: Nullable<AuthUserFragment>;
    logout: () => void;
    login: (token: string) => void;
    setUser: (user: AuthUserFragment) => void;
}
