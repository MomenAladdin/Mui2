import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";

const MyListComponent = () => {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        marginTop: "11px",
      }}
    >
      <ListItem disablePadding>
        <ListItemButton
          role={undefined}
          dense
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "4px",
          }}
        >
          <ListItemIcon>
            <Typography variant="body2" color="text.secondary">
              Trending In Egypt
            </Typography>
          </ListItemIcon>

          <Typography variant="body2" color="text.secondary">
            زلزال
          </Typography>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton
          role={undefined}
          dense
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "4px",
          }}
        >
          <ListItemIcon>
            <Typography variant="body2" color="text.secondary">
              41.8K posts
            </Typography>
          </ListItemIcon>

          <Typography variant="body2" color="text.secondary">
            احدث موضه
          </Typography>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton
          role={undefined}
          dense
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "4px",
          }}
        >
          <ListItemIcon>
            <Typography variant="body2" color="text.secondary">
              Trending In Egypt
            </Typography>
          </ListItemIcon>
          <Typography variant="body2" color="text.secondary">
            الدوري الانجليزي
          </Typography>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton
          role={undefined}
          dense
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "4px",
          }}
        >
          <ListItemIcon>
            <Typography variant="body2" color="text.secondary">
              2,466 posts
            </Typography>
          </ListItemIcon>
          <Typography variant="body2" color="text.secondary">
            منتخب مصر
          </Typography>
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default MyListComponent;
