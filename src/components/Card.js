import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard(props) {
  return (
    <Card sx={{ width: 345, boxShadow: 5, marginBottom: "15px" }}>
      <CardMedia
        component="img"
        height="100%"
        width="100"
        image={props.picture}
        alt="green iguana"
      />
      <CardContent
        sx={{
          textAlign: "center",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          Name: {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          User No : {props.id}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          justifyContent: "center",
        }}
      >
        <Button size="small" onClick={(e) => props.deleteUser(props.id)}>
          Delete User
        </Button>
      </CardActions>
    </Card>
  );
}