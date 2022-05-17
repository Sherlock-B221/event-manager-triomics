import { Paper } from "@mui/material";
import React from "react";

export const Container = () => {
    return <Paper style={{ height: "78vh", padding: "6px"}} elevation={3}>
        <h4 style={{ display: "flex", justifyContent: "center", margin: "3px"}}>
            Container
        </h4>
    </Paper>
}