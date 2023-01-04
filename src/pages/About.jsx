import React from "react";
import Layout from "../components/layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          textAlign: "center",
          my: 15,
          p: 2,
          "& h3": {
            fontWeight: "bold",
            my: "2rem",
            fontSize: "4rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media(max-width:600px)": {
            marginTop: 0,
            "& h5": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h3">
          My Anime Food Website
          <br />
          (you are under my genjutsu)
        </Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque
          assumenda quia facilis perspiciatis impedit consequuntur fugit.
          Deleniti enim architecto nobis voluptatum accusantium neque non at cum
          delectus. Reprehenderit fuga ad explicabo consequuntur iste rerum
          dolore optio perspiciatis officiis, ipsam fugiat dignissimos. Libero,
          debitis odit. Enim nulla pariatur, quia necessitatibus alias
          accusantium consectetur animi amet et? Vel ipsum, odio ipsam molestiae
          quis esse at provident repudiandae, illo sint a obcaecati magni sunt
          quaerat modi. Aliquam vitae similique aperiam! Recusandae voluptas
          ipsa distinctio ducimus libero, voluptate perferendis itaque error
          fugiat laborum nisi, enim aspernatur architecto labore harum quo quas
          ratione voluptates.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque
          assumenda quia facilis perspiciatis impedit consequuntur fugit.
          Deleniti enim architecto nobis voluptatum accusantium neque non at cum
          delectus. Reprehenderit fuga ad explicabo consequuntur iste rerum
          dolore optio perspiciatis officiis, ipsam fugiat dignissimos. Libero,
          debitis odit. Enim nulla pariatur, quia necessitatibus alias
          accusantium consectetur animi amet et? Vel ipsum, odio ipsam molestiae
          quis esse at provident repudiandae, illo sint a obcaecati magni sunt
          quaerat modi. Aliquam vitae similique aperiam! Recusandae voluptas
          ipsa distinctio ducimus libero, voluptate perferendis itaque error
          fugiat laborum nisi, enim aspernatur architecto labore harum quo quas
          ratione voluptates.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
