import { Card, Paper, TextField } from "@mui/material";
import { IActivity } from "../../interfaces/types";
import "./activities.scss"
import React from "react";

export const Activities = () => {
    const activities : IActivity[] = [
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
    return <Paper style={{ height: "78vh", padding: "6px"}} elevation={3}>
        <h4 style={{ display: "flex", justifyContent: "center", margin: "3px"}}>
            Activities
        </h4>
        <TextField label="search" style={{padding: "3px"}} />
        { 
            activities.map( (activity) => 
            <Card className="selectableCard" >
                {activity.name}
            </Card>)
            
        }

    </Paper>
}