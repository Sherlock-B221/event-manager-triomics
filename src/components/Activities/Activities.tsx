import { Card, Paper, TextField } from "@mui/material";
import { IActivity } from "../../interfaces/types";
import "./activities.scss"
import React, { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { DraggableCard } from "./DraggableCard";

export const Activities = ({ activities }: { activities: IActivity[] }) => {
  const [searchValue, setSearchValue] = useState("");

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
          <TextField label="search" style={{ margin: "4px" ,padding: "3px", width: "95%" }} onChange={(e) => { setSearchValue(e.target.value) }} />
          {
            activities.filter((activity) => activity.name.toLowerCase().includes(searchValue.toLowerCase()))
              .map((activity, index) =>
                <DraggableCard activity={activity} index={index} key={activity.id} />)
          }
          {provided.placeholder}
        </Paper>
    }
  </Droppable>
}