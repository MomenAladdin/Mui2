// ReusablePaperItem.js
import React from "react";
import { Paper, Typography, styled } from "@mui/material";

// Styling for the reusable paper component
const StyledPaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(2),
  marginBottom: theme.spacing(6),
}));

const PaperItem = ({ title, children }) => {
  return (
    <StyledPaper>
      {title && (
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", marginBottom: "5px" }}
        >
          {title}
        </Typography>
      )}
      {children}
    </StyledPaper>
  );
};

export default PaperItem;
