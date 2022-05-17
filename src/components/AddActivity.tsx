import { Button, Card, Grid, TextField, Toolbar } from "@mui/material";
import React from "react";

export const AddActivity = () => {
    
    
    return <>
        <Card style={{display: "flex", alignItems: "center", justifyContent: "center", height: "auto", width: "auto", padding: "15px"}}>
        <form 
        // className={classes.form}
         noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="ename"
                name="activityName"
                variant="outlined"
                required
                fullWidth
                id="activityName"
                label="Activity Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="activityDescription"
                label="Activity Description"
                name="activityDescription"
                autoComplete="activityDescription"
              />
            </Grid>
          </Grid>
          <Toolbar/>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            // className={classes.submit}
          >
            Add Activity
          </Button>
        </form>
        </Card>
    </>


}