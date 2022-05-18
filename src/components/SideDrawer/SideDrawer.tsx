import React from "react"
import Drawer from '@mui/material/Drawer';
import "./side-drawer.scss"
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
    style={{position:'relative', zIndex: 1}}
  >
    <h2 className="sideDrawer">Side Drawer</h2>   
  </Drawer>
}