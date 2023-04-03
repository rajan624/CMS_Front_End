import React from "react";
import classes from "./Footer.module.css";
import logo from "../../images/Logo/logo1.jpeg"
import right from "../../images/Random Images/Free download Hd Wallpapers Russell Westbrook 307 X 512 43 Kb Jpeg.jpg";
import left from "../../images/Random Images/Russell Westbrook Wallpaper for mobile phone tablet desktop.jpg";

import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LanguageIcon from "@material-ui/icons/Language";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className={classes.footer}>
      <img classname={classes.logo} src={logo} alt="epo logo" />
      <div className={classes.innerFooter}>
        {/* Contact */}
        <ul className={classes.contact}>
          <h5>Contact Us</h5>
          <li>
            <PhoneIcon fontSize="small" className={classes.icon} />{" "}
            +88474778789
          </li>
          <li>
            <EmailIcon fontSize="small" className={classes.icon} />{" "}
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, dolore?
          </li>
          <li>
            <LanguageIcon fontSize="small" className={classes.icon} />{" "}
            Lorem ipsum dolor sit amet.
          </li>
        </ul>
        {/* Links */}
        <ul className={classes.feild}>
          <h5>Our Organization</h5>
          <li>
            <a href="/about">About</a>{" "}
          </li>
          <li>
            <a href="/gallery">Gallery</a>{" "}
          </li>
          <li>
            <a href="/blog">Blog</a>{" "}
          </li>
          <li>
            <a href="/contact">Contact</a>{" "}
          </li>
          <li>
            <a href="/donate">Donate</a>{" "}
          </li>
        </ul>
        {/* Social Contacts */}
        <ul className={classes.feild}>
          <h5>Social Sites</h5>
          <li>
            <a target="_blank" href="https://www.facebook.com/">
              Facebook
            </a>
          </li>
          <li>
            <a target="_blank" href="https://twitter.com/">
              Twitter
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.youtube.com/"
            >
              YouTube
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/">
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.skype.com/">
              Skype
            </a>
          </li>
        </ul>
        {/* Address */}
        <ul className={classes.address}>
          <h5>Address</h5>
          <li>
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, eius?
          </li>
          <h5>Follow Us</h5>
          <a target="_blank" href="https://www.facebook.com">
            <FacebookIcon
              className={classes.socialIcon}
              fontSize="large"
              color="primary"
            />
          </a>
          <a target="_blank" href="https://twitter.com/">
            {" "}
            <TwitterIcon
              className={classes.socialIcon}
              fontSize="large"
              color="#1111"
            />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/"
          >
            <YouTubeIcon
              className={classes.socialIcon}
              fontSize="large"
              color="secondary"
            />
          </a>
        </ul>
      </div>
      <div className={classes.copyright}>
        <img src={left} alt="epo man with tree" />
        <h2 className={classes.text}>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem nobis recusandae, sapiente reiciendis sunt iste.
        </h2>
        <img src={right} alt="epo man with tree" />
      </div>
    </div>
  );
};

export default Footer;
