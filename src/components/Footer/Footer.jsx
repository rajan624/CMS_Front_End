import React from "react";
import logo from "../../images/images/logo.svg"
import "../Pages/Home/home.module.css";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div class="container">
          <div class="footer-top section">
            <div class="footer-brand">
              <a href="#" class="logo">
                <img src={logo} width="129" height="40" alt="Blogy logo" />
              </a>

              <p class="footer-text">
                A minimal, functional theme for running a paid-membership
                publication on Ghost.
              </p>
            </div>

            <ul class="footer-list">
              <li>
                <p class="h5">Social</p>
              </li>

              <li class="footer-list-item">
                <ion-icon name="logo-facebook"></ion-icon>

                <a href="#" class="footer-link hover:underline">
                  Facebook
                </a>
              </li>

              <li class="footer-list-item">
                <ion-icon name="logo-twitter"></ion-icon>

                <a href="#" class="footer-link hover:underline">
                  Twitter
                </a>
              </li>

              <li class="footer-list-item">
                <ion-icon name="logo-pinterest"></ion-icon>

                <a href="#" class="footer-link hover:underline">
                  Pinterest
                </a>
              </li>

              <li class="footer-list-item">
                <ion-icon name="logo-vimeo"></ion-icon>

                <a href="#" class="footer-link hover:underline">
                  Vimeo
                </a>
              </li>
            </ul>

            <ul class="footer-list">
              <li>
                <p class="h5">About</p>
              </li>

              <li>
                <a href="#" class="footer-link hover:underline">
                  Style Guide
                </a>
              </li>

              <li>
                <a href="#" class="footer-link hover:underline">
                  Features
                </a>
              </li>

              <li>
                <a href="#" class="footer-link hover:underline">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" class="footer-link hover:underline">
                  404
                </a>
              </li>

              <li>
                <a href="#" class="footer-link hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>

            <ul class="footer-list">
              <li>
                <p class="h5">Features</p>
              </li>

              <li>
                <a href="#" class="footer-link hover:underline">
                  Upcoming Events
                </a>
              </li>

              <li>
                <a href="#" class="footer-link hover:underline">
                  Blog & News
                </a>
              </li>

              <li>
                <a href="#" class="footer-link hover:underline">
                  Features
                </a>
              </li>

              <li>
                <a href="#" class="footer-link hover:underline">
                  FAQ Question
                </a>
              </li>

              <li>
                <a href="#" class="footer-link hover:underline">
                  Testimonial
                </a>
              </li>
            </ul>

            <ul class="footer-list">
              <li>
                <p class="h5">Membership</p>
              </li>

              <li>
                <a href="#" class="footer-link hover:underline">
                  Account
                </a>
              </li>

              <li>
                <a href="#" class="footer-link hover:underline">
                  Membership
                </a>
              </li>

              <li>
                <a href="#" class="footer-link hover:underline">
                  Subscribe
                </a>
              </li>

              <li>
                <a href="#" class="footer-link hover:underline">
                  Tags
                </a>
              </li>

              <li>
                <a href="#" class="footer-link hover:underline">
                  Authors
                </a>
              </li>
            </ul>
          </div>

          <div class="section footer-bottom">
            <p class="copyright">
              &copy; Blogy 2022. Published by{" "}
              <a href="#" class="copyright-link hover:underline">
                codewithsadee
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
{/* <div className={classes.footer}>
//       <div className={classes.innerFooter}>
//         {/* Contact */}
//         <ul className={classes.contact}>
//           <h5>Contact Us</h5>
//           <li>
//             <PhoneIcon fontSize="small" className={classes.icon} />{" "}
//             +88474778789
//           </li>
//           <li>
//             <EmailIcon fontSize="small" className={classes.icon} />{" "}
// Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, dolore?
//           </li>
//           <li>
//             <LanguageIcon fontSize="small" className={classes.icon} />{" "}
//             Lorem ipsum dolor sit amet.
//           </li>
//         </ul>
//         {/* Links */}
//         <ul className={classes.feild}>
//           <h5>Our Organization</h5>
//           <li>
//             <a href="/about">About</a>{" "}
//           </li>
//           <li>
//             <a href="/gallery">Gallery</a>{" "}
//           </li>
//           <li>
//             <a href="/blog">Blog</a>{" "}
//           </li>
//           <li>
//             <a href="/contact">Contact</a>{" "}
//           </li>
//           <li>
//             <a href="/donate">Donate</a>{" "}
//           </li>
//         </ul>
//         {/* Social Contacts */}
//         <ul className={classes.feild}>
//           <h5>Social Sites</h5>
//           <li>
//             <a target="_blank" href="https://www.facebook.com/">
//               Facebook
//             </a>
//           </li>
//           <li>
//             <a target="_blank" href="https://twitter.com/">
//               Twitter
//             </a>
//           </li>
//           <li>
//             <a
//               target="_blank"
//               href="https://www.youtube.com/"
//             >
//               YouTube
//             </a>
//           </li>
//           <li>
//             <a target="_blank" href="https://www.linkedin.com/">
//               LinkedIn
//             </a>
//           </li>
//           <li>
//             <a target="_blank" href="https://www.skype.com/">
//               Skype
//             </a>
//           </li>
//         </ul>
//         {/* Address */}
//         <ul className={classes.address}>
//           <h5>Address</h5>
//           <li>
//        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, eius?
//           </li>
//           <h5>Follow Us</h5>
//           <a target="_blank" href="https://www.facebook.com">
//             <FacebookIcon
//               className={classes.socialIcon}
//               fontSize="large"
//               color="primary"
//             />
//           </a>
//           <a target="_blank" href="https://twitter.com/">
//             {" "}
//             <TwitterIcon
//               className={classes.socialIcon}
//               fontSize="large"
//               color="#1111"
//             />
//           </a>
//           <a
//             target="_blank"
//             href="https://www.youtube.com/"
//           >
//             <YouTubeIcon
//               className={classes.socialIcon}
//               fontSize="large"
//               color="secondary"
//             />
//           </a>
//         </ul>
//       </div>
//     </div> */}