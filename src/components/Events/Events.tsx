import { Card, Paper, TextField } from "@mui/material";
import "./events.scss"
import React, { useEffect, useState } from "react";
import { IEvents } from "../../interfaces/types";
import axios from "axios";

export const Events = ({events, selectedEvent, setSelectedEvent}:{events : IEvents[], selectedEvent: string, setSelectedEvent: any}) => {
    // const events: any[] = [
    //     {
    //       "id": "73749978-00fc-4699-adef-18f755754ee2",
    //       "name": "Day 1",
    //       "description": "First day of the enrollment of the subject"
    //     },
    //     {
    //       "id": "c33a4a43-47df-45b9-b654-acfad22b7079",
    //       "name": "Day 7",
    //       "description": "Seventh day of the enrollment of the subject"
    //     }
    //   ]
    // const [events, setEvents] =  useState([{}]);

    // const url = "http://tfams429.dev.triomics.in/api/events"

    
    // useEffect( () => {
    //     axios.get(url).then( async (res) => {
    //         console.log(res.data["items"])
    //         setEvents(res.data["items"])
    //     }
    //     )
    // },[])




    return <Paper style={{ height: "78vh", padding: "6px"}} elevation={3}>
        <h4 style={{display: "Flex", justifyContent: "center", margin: "3px"}}>
            Events
        </h4>
        <TextField label="search" style={{padding: "3px"}} />
        {
            events.map( (event) => <Card className="selectableCard"  >
                {event.name}
            </Card>
            )
        }
        
    </Paper>
}