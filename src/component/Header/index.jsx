import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, Link } from 'react-router-dom';
import './style.css';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Register from '../../feature/Auth/component/Register';
import LoginForm from '../../feature/Auth/component/LoginForm';




export default function Heading() {
    const [open, setOpen] = React.useState(false);
    const [openLog, setOpenLog] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpenLog = () => {
        setOpenLog(true);
    };

    const handleCloseLog = () => {
        setOpenLog(false);
    };
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link to="/" className='link'>
                                VTO
                            </Link>
                        </Typography>
                        <NavLink to="/todo" className='link'>
                            <Button color="inherit">ToDo</Button>

                        </NavLink>
                        <NavLink to="/album" className='link'>
                            <Button color="inherit">Album</Button>
                        </NavLink>
                        <Button color="inherit" onClick={handleClickOpenLog}>Login</Button>
                        <Button color="inherit" onClick={handleClickOpen}>Register</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Dialog disableEscapeKeyDown open={open} onClose={handleClose} className='dialogRe'>
                <DialogContent >

                    <Register />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>

            <Dialog disableEscapeKeyDown open={openLog} onClose={handleCloseLog} className='dialogRe'>
                <DialogContent >
                    <LoginForm />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseLog}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>

    );
}
