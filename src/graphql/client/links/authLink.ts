// apollo
import { setContext } from '@apollo/client/link/context';
import { readAuthToken, validateAuthToken } from 'utils/auth';

// utils

export const authLink = setContext((_, { headers }) => {
    // fetch token from storage here
    const token = readAuthToken();

    // validate token here
    if (token && validateAuthToken(token)) {
        return {
            headers: {
                ...headers,
                Authorization: `Bearer ${token}`,
            },
        };
    }
    return headers;
});
