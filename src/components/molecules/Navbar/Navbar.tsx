// react
import { ReactElement, useContext, useState } from 'react';

// mui
import { Button, Menu, MenuItem } from '@mui/material';

// router
import { NavLink, useNavigate } from 'react-router-dom';

// contexts
import { AuthContext } from 'contexts/AuthContext';

export const Navbar = (): ReactElement => {
    // local state
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    // hooks
    const navigate = useNavigate();
    const { logout, user } = useContext(AuthContext);

    const open = Boolean(anchorEl);

    // handler
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => setAnchorEl(null);

    const handleLogout = () => {
        logout();
        navigate('/auth/login');
    };
    return (
        <div className="flex flex-row items-center justify-between w-full">
            <NavLink
                to="/board"
                style={({ isActive }) => ({ color: isActive ? 'white' : 'whitesmoke' })}
            >
                Board
            </NavLink>

            {user && (
                <Button
                    sx={{ color: 'white' }}
                    variant="text"
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    {user?.name}
                </Button>
            )}
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </div>
    );
};
