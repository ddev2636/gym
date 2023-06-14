import React from "react";
import { ArrowDownwardRounded } from "@mui/icons-material";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const ScrollButton = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const handleClick = () => {
    window.scrollTo(0, window.innerHeight);
  };

  return isMobile ? (
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      <ArrowDownwardRounded
        variant="contained"
        color="primary"
        onClick={handleClick}
        sx={{ display: "flex", justifyContent: "flex-end" }}
      />
    </Box>
  ) : null;
};

export default ScrollButton;
