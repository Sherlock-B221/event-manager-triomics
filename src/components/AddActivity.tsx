import { Button, Card, Grid, TextField, Toolbar } from "@mui/material";
import React, { useState } from "react";
import { IActivity } from "../interfaces/types";

export const AddActivity = ({ setActivities, activities, setAddActivityOpen }: { setActivities: (activities: IActivity[]) => void, activities: IActivity[], setAddActivityOpen: any }) => {
  const [nameData, setNameData] = useState("");
  const [descriptionData, setDescriptionData] = useState("");
  const handleAddActivity = () => {
    setActivities([...activities, { id: activities.length + 2, name: nameData, description: descriptionData }]);
    setAddActivityOpen(false);
  };

  return <>
    <Card style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "auto", width: "auto", padding: "15px" }}>
      <form
        // className={classes.form}
        onSubmit={e => e.preventDefault()}
        noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} >
            <TextField
              autoComplete="ename"
              name="activityName"
              variant="outlined"
              required
              fullWidth
              onChange={(e) => { setNameData(e.target.value) }}
              id="activityName"
              label="Activity Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              onChange={(e) => { setDescriptionData(e.target.value) }}
              required
              fullWidth
              id="activityDescription"
              label="Activity Description"
              name="activityDescription"
              autoComplete="activityDescription"
            />
          </Grid>
        </Grid>
        <Toolbar />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleAddActivity}
        // className={classes.submit}
        >
          Add Activity
        </Button>
      </form>
    </Card>
  </>


}