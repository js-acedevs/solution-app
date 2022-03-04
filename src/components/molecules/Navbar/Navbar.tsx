// react
import { ReactElement } from 'react';

// mui
import { Button } from '@mui/material';

// router
import { NavLink } from 'react-router-dom';

export const Navbar = (): ReactElement => (
    <nav className="flex items-center justify-between">
        <NavLink to="/board">Board</NavLink>
        <Button variant="contained">Logout</Button>
    </nav>
);
