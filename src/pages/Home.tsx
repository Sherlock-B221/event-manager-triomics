import { Grid } from "@mui/material"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import React from "react"
import { NavBar } from "../components/AppBar/NavBar"
import { SideDrawer } from "../components/SideDrawer/SideDrawer"


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export const Home = () => {
    return ( 
        <div>
            <div>
                <NavBar/>
                <SideDrawer/>
            </div>
            <div style={{ marginLeft: "242px"}}>
                <Grid container spacing={2} >
                    <Grid item xs={12}>
                        <Item>Selected Event Details</Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>List of Events </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>Droppable Container</Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>List of Activities</Item>
                    </Grid>
                </Grid>
            </div>
        </div> 
    )
}