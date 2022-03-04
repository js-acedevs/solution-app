// react
import { ReactElement } from 'react';

// mui
import { AppBar, Container, Toolbar, AppBarProps } from '@mui/material';

// molecules
import { Navbar } from '@molecules';

export const Header = (props: AppBarProps): ReactElement => (
    <AppBar position="static" {...props}>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Navbar />
            </Toolbar>
        </Container>
    </AppBar>
);
