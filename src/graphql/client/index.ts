// apollo
import { ApolloClient } from '@apollo/client';

// cache
import { cache } from './cache';

// links
import { links } from './links';

// export new client instance
export const client = new ApolloClient({
    cache,
    link: links,
    connectToDevTools: true,
});
