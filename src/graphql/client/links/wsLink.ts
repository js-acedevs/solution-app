import { WebSocketLink } from '@apollo/client/link/ws';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { GQL_WS_API_URI } from '@config/env';
import { readAuthToken } from 'utils/auth';

export const wsClient = new SubscriptionClient(GQL_WS_API_URI, {
    reconnect: true,
    lazy: true,
    connectionParams: () => {
        // fetch token
        const token = readAuthToken();
        return {
            headers: {
                // validate token
                ...(token
                    ? {
                          Authorization: `Bearer ${token}`,
                      }
                    : {}),
            },
        };
    },
});

export const wsLink = new WebSocketLink(wsClient);
