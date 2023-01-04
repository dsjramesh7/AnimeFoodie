import { Box, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <div style={{ position: "fixed", bottom: 0, width: "100%" }}>
      <Box
        sx={{
          bgcolor: "black",
          textAlign: "center",
          color: "white",
          py: "1rem",
        }}
      >
        <Box
          sx={{
            my: "0.5rem",
            "& svg": { fontSize: "60px", mr: "2", cursor: "pointer" },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translate(5px)",
              transition: "all 400ms",
            },
          }}
        >
          <InstagramIcon />
          <YouTubeIcon />
          <TwitterIcon />
          <GitHubIcon />
        </Box>
        <Typography
          variant="h5"
          sx={{ "@media(max-width:600px)": { fontSize: "1rem" } }}
        >
          All Rights Reserved @ Ramesh
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;
