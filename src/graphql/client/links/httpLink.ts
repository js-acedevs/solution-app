// apollo
import { createHttpLink } from '@apollo/client';

// config
import { GQL_API_URI } from '@config/index';

// export link
export const httpLink = createHttpLink({
    uri: GQL_API_URI,
});
