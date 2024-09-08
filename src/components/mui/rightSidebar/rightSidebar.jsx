// RightSidebar.js
import React from "react";
import { Paper, Typography, TextField, styled } from "@mui/material";
import PaperItem from "./paperItem";
import MainBtn from "../../Buttons/mainBtn";
import MyListComponent from "./listComp";
import FollowList from "./avatarComp";

// Styling for the right sidebar container
const RightSidebarContainer = styled(Paper)(({ theme }) => ({
  width: "100%", // Full width on smaller screens
  maxWidth: "350px", // Maximum width on larger screens
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(2),
  marginLeft: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%", // Full width on smaller screens
    marginLeft: 0,
    marginTop: theme.spacing(2),
  },
}));

// Styling for the search bar
const SearchBar = styled(TextField)(({ theme }) => ({
  width: "100%",
  marginBottom: theme.spacing(4),
}));

const RightSidebar = () => {
  return (
    <RightSidebarContainer>
      <SearchBar variant="outlined" placeholder="Search..." />

      <PaperItem title="Subscribe to Premium">
        <Typography variant="h6" align="center">
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
          <MainBtn
            label={"Subscribe"}
            customStyles={{ width: "60%", margin: "3px" }}
          ></MainBtn>
        </Typography>
      </PaperItem>
      <PaperItem title="What's Happening">
        <MyListComponent />
      </PaperItem>
      <PaperItem title="Who to follow">
        <FollowList />
      </PaperItem>
    </RightSidebarContainer>
  );
};

export default RightSidebar;
