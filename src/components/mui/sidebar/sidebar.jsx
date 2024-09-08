// Sidebar.js
import React from "react";
import { Grid2, IconButton, Paper } from "@mui/material";
import {
  Home,
  Search,
  Notifications,
  Mail,
  AccountCircle,
  X,
  People,
  FlashOnOutlined,
  MoreHoriz,
} from "@mui/icons-material";
import { styled } from "@mui/system";
import SidebarTypography from "./sidebarTybo";
import MainBtn from "../../Buttons/mainBtn";

// Styling the sidebar
const SidebarContainer = styled(Paper)(({ theme }) => ({
  height: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(2),
}));

const IconGrid2 = styled(Grid2)(({ theme }) => ({
  marginTop: theme.spacing(2),
  "& .MuiIconButton-root": {
    marginBottom: theme.spacing(2),
  },
}));

const Sidebar = () => {
  return (
    <SidebarContainer>
      <IconGrid2 container direction="column" alignItems="start">
        <Grid2 item>
          <IconButton>
            <Home />
            <SidebarTypography>Home</SidebarTypography>
          </IconButton>
        </Grid2>
        <Grid2 item>
          <IconButton>
            <Search />
            <SidebarTypography>Explore</SidebarTypography>
          </IconButton>
        </Grid2>
        <Grid2 item>
          <IconButton>
            <Notifications />
            <SidebarTypography>Notifications</SidebarTypography>
          </IconButton>
        </Grid2>
        <Grid2 item>
          <IconButton>
            <Mail />
            <SidebarTypography>Messages</SidebarTypography>
          </IconButton>
        </Grid2>
        <Grid2 item>
          <IconButton>
            <X />
            <SidebarTypography>Premium</SidebarTypography>
          </IconButton>
        </Grid2>
        <Grid2 item>
          <IconButton>
            <FlashOnOutlined />
            <SidebarTypography>Verified Orgs</SidebarTypography>
          </IconButton>
        </Grid2>
        <Grid2 item>
          <IconButton>
            <People />
            <SidebarTypography>Community</SidebarTypography>
          </IconButton>
        </Grid2>
        <Grid2 item>
          <IconButton>
            <AccountCircle />
            <SidebarTypography>Account</SidebarTypography>
          </IconButton>
        </Grid2>
        <Grid2 item>
          <IconButton>
            <MoreHoriz />
            <SidebarTypography>More</SidebarTypography>
          </IconButton>
        </Grid2>
        <MainBtn label={"Post"}></MainBtn>
      </IconGrid2>
    </SidebarContainer>
  );
};

export default Sidebar;
