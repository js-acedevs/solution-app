// react
import { Suspense } from 'react';
import ReactDOM from 'react-dom';

// apollo
import { client as apolloClient } from '@graphql/client';
import { ApolloProvider } from '@apollo/client';

// mui
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

// app
import App from './App';
import reportWebVitals from './reportWebVitals';

// styles
import { theme } from './styles/theme';

ReactDOM.render(
    <Suspense fallback={<div>Loading...</div>}>
        <ApolloProvider client={apolloClient}>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <App />
            </ThemeProvider>
        </ApolloProvider>
    </Suspense>,
    document.querySelector('#root')
);

reportWebVitals();
