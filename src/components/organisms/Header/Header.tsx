// react
import { ReactElement } from 'react';

// mui
import AddIcon from '@mui/icons-material/Add';
import { AppBar, Container, Toolbar, AppBarProps, Button } from '@mui/material';
import { useToggle } from '@hooks/useToggle';

// molecules
import { Navbar } from '@molecules';
import { AddedBoard } from '../Board/AddedBoard/AddedBoard';

export const Header = (props: AppBarProps): ReactElement => {
    const [modalOpen, handleModalToggle] = useToggle();

    return (
        <AppBar position="static" {...props}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ width: 1 }}>
                    <Navbar />
                </Toolbar>
                <div className="py-2 bg-slate-100">
                    <Button onClick={handleModalToggle} size="small" startIcon={<AddIcon />}>
                        Add a issue
                    </Button>

                    <AddedBoard open={modalOpen} handleClose={handleModalToggle} />
                </div>
            </Container>
        </AppBar>
    );
};
