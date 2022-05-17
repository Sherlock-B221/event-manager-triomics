import { Button, Card, Grid, TextField, Toolbar } from "@mui/material";
import React, { useId, useState } from "react";
import { IEvent } from "../interfaces/types";

export const AddEvent = ({ setEvents, events ,setAddEventOpen }: { setEvents: React.Dispatch<React.SetStateAction<IEvent[]>>, events: IEvent[], setAddEventOpen: any }) => {
  const [nameData, setNameData] = useState("");
  const [descriptionData, setDescriptionData] = useState("");
  const id = useId()

  const handleAddEvent = () => {
    setEvents([...events, { id, name: nameData, description: descriptionData, activities: [] }]);
    setAddEventOpen(false);
  };

  return <>
    <Card style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "auto", width: "auto", padding: "15px" }}>
      <form
        // className={classes.form}
        onSubmit={(e) => {e.preventDefault()}}
        noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} >
            <TextField
              autoComplete="ename"
              name="eventName"
              variant="outlined"
              required
              onChange={(e) => { setNameData(e.target.value) }}
              fullWidth
              id="eventName"
              label="Event Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              onChange={(e) => { setDescriptionData(e.target.value) }}
              fullWidth
              id="eventDescription"
              label="Event Description"
              name="eventDescription"
              autoComplete="eventDescription"
            />
          </Grid>
        </Grid>
        <Toolbar />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleAddEvent}
        // className={classes.submit}
        >
          Add Event
        </Button>
      </form>
    </Card>
  </>


}