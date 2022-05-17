import { Card } from "@mui/material";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { IActivity } from "../../interfaces/types";


export const DraggableCard = ({activity, index}: {activity: IActivity, index: any}) => {
    return <Draggable
        draggableId={activity.id.toString()}
        index={index}
        key={activity.id.toString()}
    >
        {
            provided =>
                <Card className="selectableCard"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}>
                    {activity.name}
                </Card>
        }
    </Draggable>
}