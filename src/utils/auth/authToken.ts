// jwt decode
import decode from 'jwt-decode';

// config
import { JWT_STORAGE_KEY } from '@config/env';

// interfaces
import { JWTModel } from '@interfaces/models';

// storage utils
import { readFromStorage, writeToStorage, removeFromStorage } from '../storage/index';

// read auth token from localstorage
export const readAuthToken = (): string | null => readFromStorage(JWT_STORAGE_KEY, 'localStorage');

/**
 * @param {string} token
 */

// write auth token from localstorage
export const writeAuthToken = (token: string): void =>
    writeToStorage(JWT_STORAGE_KEY, token, 'localStorage');

// remove auth token from localstorage
export const removeAuthToken = (): void => removeFromStorage(JWT_STORAGE_KEY, 'localStorage');

/**
 * @param {string} token
 */

// validate auth token if has expired
export const validateAuthToken = (token: string): boolean => {
    if (token) {
        try {
            const decoded = decode<JWTModel>(token);
            const now = Date.now() / 1000;

            if (!decoded['https://hasura.io/jwt/claims']) {
                return false;
            }
            // Check if now (in ms) is less then exp time
            return now <= decoded.exp;
        } catch (error) {
            console.error('👾 invalid token format', error);
            return false;
        }
    }
    return false;
};
