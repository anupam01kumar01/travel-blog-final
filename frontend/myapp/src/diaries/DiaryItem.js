import React,{ useState } from "react";
import {
  Box,
  Alert,
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import {Link} from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";


import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import { postDelete } from "../api-helpers/helpers";

const DiaryItem = ({ title, description, image, location, date, id, user,name, }) => {
  const[open, setOpen] = useState(false)
  const isLoggedInUser = () => {
    if (localStorage.getItem("userId") === user) {
      return true;
    }
    return false;
  };

  const handleDelete = () =>{
    postDelete(id)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
    
  };

  return (
    <Card
      sx={{
        width: "50%",
        height: "auto",
        margin: "1",
        padding: "1",
        flexDirection: "column",
        boxShadow: "5px 5px 10px #ccc",
      }}
    >
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: "red" }} aria-label="recipe">{name}</Avatar>}
        action={
          <IconButton aria-label="settings">
            {<EditLocationAltIcon />}
          </IconButton>
        }
        title={location}
        header={location}
        subheader={date}
      />
      <img width={"100%"} height="190" src={image} alt={title} />
      <CardContent>
        <Typography paddingBottom={1} variant="h6" color="text.secondary">
          {title}
        </Typography>
        <hr />
        <Box paddingTop={1} display="flex">
          <Typography width="170px" fontWeight={"bold"} variant="">
            {name}:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Box>
      </CardContent>
      {isLoggedInUser() && (
        <CardActions sx={{ marginLeft: "80%" }}>
          <IconButton LinkComponent={Link} to={`/post/${id}`} color="warning">
            <ModeEditOutlineIcon />
          </IconButton>
          <IconButton onClick={handleDelete} color="error">
            <DeleteIcon />
          </IconButton>
        </CardActions>
      )}
      
  <Snackbar open={open} autoHideDuration={6000} onClose={()=>setOpen(false)}>
  <Alert
    onClose={()=>setOpen(false)}
    severity="success"
    variant="filled"
    sx={{ width: '100%' }}
  >
    Your post will be deleted in few seconds!
  </Alert>
</Snackbar>
    </Card>
  );
};

export default DiaryItem;
