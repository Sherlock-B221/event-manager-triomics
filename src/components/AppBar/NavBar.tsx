import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { IconButton, Toolbar } from '@mui/material';


export const NavBar = () => {
    
    return <AppBar position="absolute" style={{zIndex: 30}}>
        <Toolbar variant="dense">
        <h3 style={{display: "flex", justifyContent: "center"}}>
           Event Manager
        </h3>
        </Toolbar>
    </AppBar>

}