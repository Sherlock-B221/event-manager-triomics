import { Box, Button, Card, Dialog, Modal, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { AddActivity } from "./AddActivity";
import { AddEvent } from "./AddEvent";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export const EventDetails = () => {
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
                Selected Event Details
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
            <AddEvent/>
        
            </Dialog>

            <Dialog
                open={openAddActivity}
                onClose={handleActivityClose}
                fullScreen={fullScreen}
                fullWidth={true}
                // aria-labelledby="modal-modal-title"
                // aria-describedby="modal-modal-description"
            >
            <AddActivity/>
            </Dialog>

        </div>
    </Paper>
}