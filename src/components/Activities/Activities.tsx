import { Card, Paper, TextField } from "@mui/material";
import { IActivity } from "../../interfaces/types";
import "./activities.scss"
import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { DraggableCard } from "./DraggableCard";

export const Activities = ( {activities}: {activities : IActivity[]} ) => {
  
  return <Droppable
    droppableId="dropContainer1"
  >
    {
      provided =>
        <Paper style={{ height: "78vh", padding: "6px" }} elevation={3}
          ref={provided.innerRef}
          {...provided.droppableProps}>
          <h4 style={{ display: "flex", justifyContent: "center", margin: "3px" }}>
            Activities
          </h4>
          <TextField label="search" style={{ padding: "3px" }} />
          {
            activities.map((activity, index) =>
              
              <DraggableCard activity={activity} index={index} />)

          }

        </Paper>
    }
  </Droppable>
}