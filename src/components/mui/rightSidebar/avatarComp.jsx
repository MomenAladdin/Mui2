import * as React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
  Box,
} from "@mui/material";

export default function FollowList() {
  return (
    <List sx={{ width: "100%", maxWidth: 360 }}>
      {[
        {
          primary: "Mohamed Mahmoud",
          avatarSrc: "/static/images/avatar/1.jpg",
        },
        {
          primary: "Ahmed Ezzat",

          avatarSrc: "/static/images/avatar/2.jpg",
        },
        {
          primary: "Ibrahim Adel",
          avatarSrc: "/static/images/avatar/3.jpg",
        },
      ].map((item, index) => (
        <ListItem
          key={index}
          alignItems="flex-start"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <ListItemAvatar>
            <Avatar alt="User Avatar" src={item.avatarSrc} />
          </ListItemAvatar>
          <Box sx={{ flexGrow: 1 }}>
            <ListItemText primary={item.primary} />
          </Box>
          <Button variant="outlined" size="small">
            Follow
          </Button>
        </ListItem>
      ))}
    </List>
  );
}
