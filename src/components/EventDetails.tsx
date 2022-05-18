import { Button, Dialog, Paper, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { AddActivity } from "./AddActivity";
import { AddEvent } from "./AddEvent";
import { IActivity, IEvent } from "../interfaces/types";




export const EventDetails = ({ selectedEvent, activities, events, setEvents, setActivities }:
    {
        selectedEvent: string, activities: IActivity[], events: IEvent[],
        setEvents: React.Dispatch<React.SetStateAction<IEvent[]>>,
        setActivities: (activities: IActivity[]) => void
    }) => {

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const [openAddEvent, setAddEventOpen] = React.useState(false);
    const handleEventOpen = () => setAddEventOpen(true);
    const handleEventClose = () => setAddEventOpen(false);
    const [openAddActivity, setAddActivityOpen] = React.useState(false);
    const handleActivityOpen = () => setAddActivityOpen(true);
    const handleActivityClose = () => setAddActivityOpen(false);

    return <Paper >
        <div style={{
            display: "Flex", justifyContent: "space-between", alignItems: "center",
            marginLeft: "10px", marginRight: "10px"
        }}>
            <h3>
                {selectedEvent === "" ? "Please select an event!" : selectedEvent}
            </h3>
            <div style={{ alignContent: "center" }}>
                <Button variant="outlined" onClick={handleEventOpen}>+ Add Event</Button>
                <Button variant="outlined" onClick={handleActivityOpen} style={{ marginLeft: "20px" }}>+ Add Activity</Button>

            </div>

            <Dialog
                open={openAddEvent}
                onClose={handleEventClose}
                fullScreen={fullScreen}
                fullWidth={true}
            // aria-labelledby="modal-modal-title"
            // aria-describedby="modal-modal-description"
            >
                <AddEvent setEvents={setEvents} events={events} setAddEventOpen={setAddEventOpen} />

            </Dialog>

            <Dialog
                open={openAddActivity}
                onClose={handleActivityClose}
                fullScreen={fullScreen}
                fullWidth={true}
            // aria-labelledby="modal-modal-title"
            // aria-describedby="modal-modal-description"
            >
                <AddActivity setActivities={setActivities} activities={activities} setAddActivityOpen={setAddActivityOpen} />
            </Dialog>

        </div>
    </Paper>
}