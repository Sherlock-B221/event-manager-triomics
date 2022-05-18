import { Paper } from "@mui/material";
import { Droppable } from "react-beautiful-dnd";
import React from "react";
import { IActivity, IEvent } from "../interfaces/types";
import { DraggableCard } from "./Activities/DraggableCard";

export const Container = ({ activities, selectedEvent, events }: { activities: IActivity[], selectedEvent : string, events: IEvent[] }) => {

    return <Droppable droppableId="dropContainer2" >
        {
            (provided) => {
                return (
                    <Paper style={{ height: "78vh", padding: "6px" }} elevation={3}
                        ref={provided.innerRef}
                        {...provided.droppableProps}>
                        <h4 style={{ display: "flex", justifyContent: "center", margin: "3px" }}>
                        {selectedEvent === "" ? "Activities in the selected event" : selectedEvent}
                            
                        </h4>
                        {
                            activities.map((activity, index) =>

                                <DraggableCard activity={activity} index={index} key={activity.id} />)

                        }
                        {provided.placeholder}
                    </Paper>
                )
            }
        }
    </Droppable>

}