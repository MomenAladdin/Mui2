import React from "react";
import {
  CssBaseline,
  Container,
  Grid,
  ThemeProvider,
  Box,
} from "@mui/material";
import Sidebar from "./components/mui/sidebar/sidebar";
import RightSidebar from "./components/mui/rightSidebar/rightSidebar";
import darkTheme from "./components/mui/darkTheme/theme";
import Post from "./components/mui/mainSection/createPost";
import StoryCard from "./components/mui/mainSection/cards";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Grid container spacing={2} sx={{ height: "100vh" }}>
        <Grid item xs={12} md={3} display={{ xs: "none", md: "block" }}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} md={6}>
          <Container sx={{ padding: "2rem" }}>
            <Post />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}
            >
              <StoryCard
                avatarLetter="M"
                title="Mo'men Aladdin"
                subheader="September 14, 2023"
                image="https://th.bing.com/th/id/OIP.dC8lbTvtWAj6sTZo2qhcbQHaEK?rs=1&pid=ImgDetMain"
                content="This impressive paella is a perfect party dish and a fun meal to cook together with your guests."
                expandedContent="Method: Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes. ..."
              />
              <StoryCard
                avatarLetter="A"
                title="Ahmed Ezzat"
                subheader="January 14, 2023"
                image="https://th.bing.com/th/id/R.ae2e78ed7f37e3782066baa3c79e9458?rik=eClLjFHgS39Jtg&pid=ImgRaw&r=0"
                content="This impressive paella is a perfect party dish and a fun meal to cook together with your guests."
                expandedContent="Method: Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes. ..."
              />
              <StoryCard
                avatarLetter="E"
                title="Eslam Mohamed"
                subheader="January 14, 2023"
                image="https://th.bing.com/th/id/R.796523382777357d18ba619048335003?rik=hi%2f%2bPd07IRqj%2fA&pid=ImgRaw&r=0"
                content="This impressive paella is a perfect party dish and a fun meal to cook together with your guests."
                expandedContent="Method: Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes. ..."
              />
              <StoryCard
                avatarLetter="M"
                title="Mazen Mohamed"
                subheader="March 14, 2023"
                image="https://th.bing.com/th/id/OIP.v6ucd36pXcbCjHSC1A4HTgHaEJ?rs=1&pid=ImgDetMain"
                content="This impressive paella is a perfect party dish and a fun meal to cook together with your guests."
                expandedContent="Method: Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes. ..."
              />
              <StoryCard
                avatarLetter="M"
                title="Mazen Mohamed"
                subheader="March 14, 2023"
                image="https://th.bing.com/th/id/R.896b0753fe8bc3b4acdf34edf7981066?rik=qp8NL0vrEgMdpg&pid=ImgRaw&r=0"
                content="This impressive paella is a perfect party dish and a fun meal to cook together with your guests."
                expandedContent="Method: Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes. ..."
              />
            </Box>
          </Container>
        </Grid>
        <Grid item xs={12} md={3} display={{ xs: "none", md: "block" }}>
          <RightSidebar />
        </Grid>
        <Grid item xs={12} display={{ md: "none" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Sidebar />
            <RightSidebar />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
