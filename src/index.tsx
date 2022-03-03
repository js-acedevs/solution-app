// react
import { Suspense } from 'react';
import ReactDOM from 'react-dom';

// apollo
import { client as apolloClient } from '@graphql/client';
import { ApolloProvider } from '@apollo/client';

// app
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <Suspense fallback={<div>Loading...</div>}>
        <ApolloProvider client={apolloClient}>
            <App />
        </ApolloProvider>
    </Suspense>,
    document.querySelector('#root')
);

reportWebVitals();
