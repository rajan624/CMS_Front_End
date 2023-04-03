import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./Carousel.module.css";


import img1 from "../../images/Random Images/48 Russell Westbrook HD Wallpapers.jpg";
import img2 from "../../images/Random Images/Classic muscle cars wallpaper Everlasting Car.jpg";
import img3 from "../../images/Random Images/Free download Hd Wallpapers Russell Westbrook 307 X 512 43 Kb Jpeg.jpg";
import Intro from "./Intro";
import { Box } from "@material-ui/core";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    vertical: true,
    draggable: true,
    overflow:false,
    className: "slider",
  };
  return (
    <Box>
      <Slider {...settings}>
        <div>
          <Intro heading={"Welcome to EPO"} />
          <img className={classes.imgs} src={img1} alt="epo=intro" />
        </div>
        <div>
          <Intro />
          <img className={classes.imgs} src={img2} alt="epo=intro" />
        </div>
        <div>
          <Intro />
          <img className={classes.imgs} src={img3} alt="epo=intro" />
        </div>
      </Slider>
    </Box>
  );
};

export default Carousel;
