// Post.js
import React from "react";
import { Card, CardContent, TextField, Button, Box } from "@mui/material";
import { Send as SendIcon } from "@mui/icons-material";

const Post = () => {
  return (
    <Card
      sx={{
        maxWidth: "100%",
        margin: "auto",
        marginTop: "2px",
        marginBottom: "40px",
      }}
    >
      <CardContent>
        <TextField
          fullWidth
          label="What is Happenning....?"
          margin="normal"
          multiline
          rows={2}
        />
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" color="primary" startIcon={<SendIcon />}>
            Post
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Post;
