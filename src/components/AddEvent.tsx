import { Button, Card, Grid, TextField, Toolbar } from "@mui/material";
import React from "react";

export const AddEvent = () => {
    
    
    return <>
        <Card style={{display: "flex", alignItems: "center", justifyContent: "center", height: "auto", width: "auto",  padding: "15px"}}>
        <form 
        // className={classes.form}
         noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="ename"
                name="eventName"
                variant="outlined"
                required
                fullWidth
                id="eventName"
                label="Event Name"
                autoFocus
              />
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid> */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="eventDescription"
                label="Event Description"
                name="eventDescription"
                autoComplete="eventDescription"
              />
            </Grid>
            {/* <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid> */}
          </Grid>
          <Toolbar/>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            // className={classes.submit}
          >
            Add Event
          </Button>
        </form>
        </Card>
    </>


}