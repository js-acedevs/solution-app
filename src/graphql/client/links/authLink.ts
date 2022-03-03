// apollo
import { setContext } from '@apollo/client/link/context';

export const authLink = setContext((_, { headers }) => {
    // fetch token from storage here
    const token = 'YOUR_TOKEN';
    // validate token here
    if (token) {
        return {
            headers: {
                ...headers,
                Authorization: `Bearer ${token}`,
            },
        };
    }
    return headers;
});
