// jwt decode
import decode from 'jwt-decode';

// config
import { DEFAULT_USER_ROLE } from '@config/index';

// interfaces
import { JWTHasuraClaims, JWTModel } from '@interfaces/index';

/**
 * getSingleJWTField decode token and return JWTHasuraClaims or null
 * @param {string} token
 */
export const getSingleJWTField = (token: string): JWTHasuraClaims | null => {
    try {
        const decoded = decode<JWTModel>(token);

        return decoded['https://hasura.io/jwt/claims'];
    } catch (error) {
        console.error('👾 Invalid token format', error);
        return null;
    }
};

/**
 * getHasuraUserRole return x-hasura-role or default user role
 * @param {string} token
 */
export const getHasuraUserRole = (token: string): JWTHasuraClaims['x-hasura-role'] | string =>
    getSingleJWTField(token)?.['x-hasura-role'] || DEFAULT_USER_ROLE;

/**
 * getHasuraUserId return x-hasura-user-id or 0
 * @param {string} token
 */
export const getHasuraUserId = (token: string): JWTHasuraClaims['x-hasura-user-id'] | number =>
    getSingleJWTField(token)?.['x-hasura-user-id'] || 0;
