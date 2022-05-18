import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Toolbar } from '@mui/material';


export const NavBar = () => {

    return <AppBar position="absolute" style={{ zIndex: 30, display: "flex", alignItems: "center" }}>
        <Toolbar variant="dense">
            <h3>
                Event Manager App
            </h3>
        </Toolbar>
    </AppBar>

}