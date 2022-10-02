import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function ButtonAppBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Akra Tech Coding Challenge
          </Typography>
          <Button
            onClick={props.refresh}
            size="large"
            sx={{ color: "white", marginRight: "50px" }}
          >
            Refresh Users Data
          </Button>
          By- MVVSAIKUMAR
        </Toolbar>
      </AppBar>
    </Box>
  );
}