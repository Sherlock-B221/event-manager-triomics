import { Card, Paper, TextField } from "@mui/material";
import "./events.scss"
import React, { useEffect, useState } from "react";
import { IEvent } from "../../interfaces/types";
import axios from "axios";

export const Events = ({ events, selectedEvent, setSelectedEvent }: { events: IEvent[], selectedEvent: string, setSelectedEvent: any }) => {
    const [searchValue, setSearchValue] = useState("");

    return <Paper style={{ height: "78vh", padding: "6px" }} elevation={3}>
        <h4 style={{ display: "Flex", justifyContent: "center", margin: "3px" }}>
            Events
        </h4>
        <TextField label="search" style={{ padding: "3px" }} onChange={(e) => { setSearchValue(e.target.value) }} />
        {
            events.filter((event) => event.name.toLowerCase().includes(searchValue.toLowerCase()))
                .map((event) =>
                    <Card className="selectableCard" key={event.id} onClick={e => setSelectedEvent(event.id)}>
                        {event.name}
                    </Card>
                )
        }

    </Paper>
}