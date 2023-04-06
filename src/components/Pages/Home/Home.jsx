import React from "react";
import Carousel from "../../Carousel/Carousel";
import Blogs from "../../Blogs/Blogs";
import Media from "../../Gallery/Media";
import Team from "../../Team/Team";
import ContactForm from "../../ContactForm/ContactForm";
import Fade from "react-reveal/Fade";
import { Box } from "@material-ui/core";
import classes from "../../Style/comman.module.css"

const Home = () => {
  return (
    <Box >
      <Fade top>
        <Carousel />
      </Fade>
    </Box>
  );
};

export default Home;
