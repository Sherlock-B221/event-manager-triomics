import { Grid, Toolbar } from "@mui/material"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from "react"
import { NavBar } from "../components/AppBar/NavBar"
import { SideDrawer } from "../components/SideDrawer/SideDrawer"
import { Events } from "../components/Events/Events";
import { Activities } from "../components/Activities/Activities";
import { EventDetails } from "../components/EventDetails";
import { Container } from "../components/Container";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { IActivity, IEvent } from "../interfaces/types";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const activitiesArr: IActivity[] = [
    {
        "id": 1,
        "name": "Take Blood Sample",
        "description": "Take blood sample for CR-Protein measurements"
    },
    {
        "id": 2,
        "name": "Take Subject Weight",
        "description": "Measure weight in KG"
    },
    {
        "id": 3,
        "name": "Take Subject Height",
        "description": "Measure height in CM"
    },
    {
        "id": 5,
        "name": "Take Temperature",
        "description": "Use thermometer and measure body temperature of the subject"
    }
]
const eventsArr: any[] = [
    {
        "id": "73749978-00fc-4699-adef-18f755754ee2",
        "name": "Day 1",
        "description": "First day of the enrollment of the subject"
    },
    {
        "id": "c33a4a43-47df-45b9-b654-acfad22b7079",
        "name": "Day 7",
        "description": "Seventh day of the enrollment of the subject"
    }
]


export const Home = () => {
    const [activities, setActivities] = useState<IActivity[]>([]);
    const [selectedEvent, setSelectedEvent] = useState<string>("");
    const [events, setEvents] = useState<IEvent[]>([]);

    const eventChanged = (elemId: string) => {
        const eventIndx = events.findIndex((e) => e.id === elemId);
        setActivities([...activitiesArr].map(activity => {
            activity.id = activity.id + eventIndx
            return activity
        }))
        setSelectedEvent(elemId);
    }

    const onDragEnd = (result: DropResult) => {
        if (!selectedEvent) {
            alert("Please select an event!")
            return;
        }

        const { source, destination } = result;
        if (!destination) return;
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        let add, active = activities;

        if (source.droppableId === "dropContainer1") {
            add = active[source.index];
            const newEventIndex = events.findIndex(e => e.id === selectedEvent)
            const newEvents = [...events];
            newEvents[newEventIndex].activities!.push(add);
            setEvents(() => newEvents)
        }
    }

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        // axios.get(url)
        //     .then(response => console.log(response));
        eventsArr.forEach(obj => obj["activities"] = [])
        setEvents(eventsArr)
        setActivities(activitiesArr);
        console.log("here 0")
    }, []);

    useEffect(() => {
        setActivities([...activitiesArr]);
        console.log("here1");
        
    }, [selectedEvent]);

    const event = (events.find(e => e.id === selectedEvent) ?? { name: "", activities: [] });

    return (
        <div>
            <div>
                <NavBar />
                <SideDrawer />
            </div>
            <Toolbar />
            <DragDropContext onDragEnd={onDragEnd}>
                <div style={{ marginLeft: "242px", minHeight: "100%" }}>
                    <Grid container spacing={2} style={{ padding: "10px" }}>
                        <Grid item xs={12}>
                            <EventDetails
                                selectedEvent={event.name ?? "N/A"}
                                setEvents={setEvents}
                                setActivities={setActivities}
                                activities={activities}
                                events={events}
                            />
                        </Grid>
                        <Grid item xs={3} >
                            <Events events={events} selectedEvent={selectedEvent} setSelectedEvent={eventChanged} />
                        </Grid>
                        <Grid item xs={6}>
                            <Container activities={event.activities!} />
                        </Grid>
                        <Grid item xs={3}>
                            <Activities activities={activities} />
                        </Grid>
                    </Grid>
                </div>
            </DragDropContext>
        </div>
    )
}