import React, { useState } from "react";
import { styled } from "@mui/system";
import {
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AlignHorizontalRightIcon from "@mui/icons-material/AlignHorizontalRight";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

const Navbar = styled(AppBar)(({ theme }) => ({
  position: "fixed",
  top: 0,
  zIndex: theme.zIndex.appBar,
  // background: "rgb(4, 36, 77)",
  background:
    "linear-gradient(90deg, rgba(4,36,77,0.9698004201680672) 0%, rgba(13,13,170,1) 35%, rgba(0,82,255,1) 100%)",
}));

const Logo = styled("div")(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "1.5rem",
  marginRight: theme.spacing(2),
  marginTop: "0.5rem",
  marginBottom: "0.5rem",
  display: "flex",
}));
const NavbarMenu = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
}));
const NavbarLinks = styled(List)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const NavLink = styled(ListItem)(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
  cursor: "pointer",
}));

const PointerIcon = styled(AlignHorizontalRightIcon)(({ theme }) => ({
  cursor: "pointer",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const ResponsiveNavbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Navbar>
      <Toolbar>
        <Logo>
          <FitnessCenterIcon sx={{ fontSize: "4rem" }} />
          My Gym
        </Logo>
        <NavbarMenu>
          <NavbarLinks>
            <NavLink>
              <ListItemText primary="Home" />
            </NavLink>
            <NavLink>
              <ListItemText primary="About" />
            </NavLink>
            <NavLink>
              <ListItemText primary="Services" />
            </NavLink>
            <NavLink>
              <ListItemText primary="Contact" />
            </NavLink>
          </NavbarLinks>
        </NavbarMenu>
        <PointerIcon
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}
        />
      </Toolbar>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: (theme) => theme.palette.primary.main,
            color: "#fff",
          },
        }}
      >
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <NavLink button>
            <ListItemText primary="Home" />
          </NavLink>
          <NavLink button>
            <ListItemText primary="About" />
          </NavLink>
          <NavLink button>
            <ListItemText primary="Services" />
          </NavLink>
          <NavLink button>
            <ListItemText primary="Contact" />
          </NavLink>
          <ListItemText>
            <CloseIcon onClick={toggleDrawer} />
          </ListItemText>
        </List>
      </Drawer>
    </Navbar>
  );
};

export default ResponsiveNavbar;
