import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { IconButton, Toolbar } from '@mui/material';


export const NavBar = () => {
    
    return <AppBar position="absolute" style={{zIndex: 30}}>
        <Toolbar variant="dense">
        {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}> */}
        {/* </IconButton> */}
        Event Manager
        </Toolbar>
    </AppBar>

}