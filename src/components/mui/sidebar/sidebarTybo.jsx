// SidebarTypography.js
import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(2),
}));

const SidebarTypography = ({ children }) => {
  return <StyledTypography variant="body1">{children}</StyledTypography>;
};

export default SidebarTypography;
