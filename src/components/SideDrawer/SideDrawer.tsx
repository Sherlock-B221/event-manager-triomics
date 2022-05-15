import React from "react"
import Drawer from '@mui/material/Drawer';
import { Toolbar } from "@mui/material";

const drawerWidth = 240;

export const SideDrawer = () => {
    return <Drawer
    variant="permanent"
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
    }}
    anchor="left"
    style={{position:'relative', zIndex: 1, paddingTop: '56px'}}
  >
    <h1 style={{marginTop: "4rem"}}>Side Drawer</h1>   
  </Drawer>
}