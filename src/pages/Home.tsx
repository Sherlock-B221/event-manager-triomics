import { Grid, Toolbar } from "@mui/material"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import React from "react"
import { NavBar } from "../components/AppBar/NavBar"
import { SideDrawer } from "../components/SideDrawer/SideDrawer"
import { Events } from "../components/Events/Events";
import { Activities } from "../components/Activities/Activities";
import { EventDetails } from "../components/EventDetails";
import { Container } from "../components/Container";


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
            <Toolbar/>
            <div style={{ marginLeft: "242px", minHeight: "100%"}}>
                <Grid container spacing={2} style={{padding: "10px"}}>
                    <Grid item xs={12}>
                        <EventDetails/>
                    </Grid>
                    <Grid item xs={3} >
                        <Events />
                    </Grid>
                    <Grid item xs={6}>
                        <Container/>
                    </Grid>
                    <Grid item xs={3}>
                        <Activities/>
                    </Grid>
                </Grid>
            </div>
        </div> 
    )
}