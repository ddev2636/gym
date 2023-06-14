import React from "react";
import { ArrowDownwardRounded } from "@mui/icons-material";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@emotion/react";

const ScrollButton = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const theme = useTheme();

  const handleClick = () => {
    window.scrollTo(0, window.innerHeight);
  };

  return isMobile ? (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "2rem",
      }}
    >
      <ArrowDownwardRounded
        variant="contained"
        color="primary"
        onClick={handleClick}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          background: theme.palette.secondary.alternate,
          color: "white",
          borderRadius: "5px",
          fontSize: "2rem",
        }}
      />
    </Box>
  ) : null;
};

export default ScrollButton;
