// ReusableButton.js
import React from "react";
import { Button } from "@mui/material";

const MainBtn = ({ label, customStyles, ...props }) => {
  return (
    <Button
      variant="contained"
      style={{ width: "100%", ...customStyles }}
      {...props}
    >
      {label}
    </Button>
  );
};

export default MainBtn;
