import { RamenDining } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/HeaderStyles.css";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [openMobile, setOpenMobile] = useState(false);

  // handlemenuclick
  const handledrawer = () => {
    setOpenMobile(!openMobile);
  };
  // menu drawer
  const drawer = (
    <Box onClick={handledrawer} sx={{ textAlign: "center" }}>
      <Typography
        component={"div"}
        variant="h5"
        sx={{ color: "#FFD700", flexGrow: 1, my: 1.5 }}
      >
        <RamenDining />
        Anime Foodie
      </Typography>
      <Divider />
      <ul className="mobile-menu">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/menu"}>Menu</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>contact</Link>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "#FA5F55" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" }, cursor: "pointer" }}
              onClick={handledrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component={"div"}
              variant="h5"
              sx={{ color: "#FFD700", flexGrow: 1 }}
            >
              <RamenDining />
              Anime Foodie
            </Typography>
            <Divider />

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/menu"}>Menu</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/contact"}>contact</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component={"nav"}>
          <Drawer
            variant="temporary"
            open={openMobile}
            onClose={handledrawer}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
