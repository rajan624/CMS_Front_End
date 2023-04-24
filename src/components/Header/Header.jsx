import React, { useEffect, useState } from "react";
import logo from "../../images/images/logo.svg"
import { GetType } from "../../context/authContext";

const Header = ({ darkMode, setDarkMode }) => {
  const user = GetType()
  let [burger, setBurger] = useState(false)

  useEffect(() => {
    console.log(user.name)
  }, [user])
  return (
    <>      <header class="header section" data-header>
      <div class="container">

        <a href="#" class="logo">
          <img src={logo} width="129" height="40" alt="Blogy logo"/>
        </a>

        <nav class="navbar" data-navbar>
          <ul class="navbar-list">

            <li class="navbar-item">
              <a href="#" class="navbar-link hover:underline" data-nav-link>Home</a>
            </li>

            <li class="navbar-item">
              <a href="#" class="navbar-link hover:underline" data-nav-link>Recent Post</a>
            </li>

            <li class="navbar-item">
              <a href="#" class="navbar-link hover:underline" data-nav-link>Membership</a>
            </li>

          </ul>
        </nav>

        <div class="wrapper">

          <button class="search-btn" aria-label="search" data-search-toggler>
            <ion-icon name="search-outline" aria-hidden="true"></ion-icon>

            <span class="span">Search</span>
          </button>

          <button class="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler>
            <span class="span one"></span>
            <span class="span two"></span>
            <span class="span three"></span>
          </button>

          <a href="#" class="btn">Join</a>

        </div>

      </div>
    </header>
      <div class="search-bar" data-search-bar>

        <div class="input-wrapper">
          <input type="search" name="search" placeholder="Search" class="input-field"/>

            <button class="search-close-btn" aria-label="close search bar" data-search-toggler>
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>

        </div>

        <p class="search-bar-text">Please enter at least 3 characters</p>

      </div>
    </>
  );
}

export default Header;
 // //   <div
      // //     className={classes.herovideo}

      // //   >
      // <div className={classes.header}>
      //   <i
      //     onClick={() => setBurger(!burger)}
      //     className="fa fa-bars fa-2x"
      //     aria-hidden="true"
      //   ></i>
      //   <div className={classes.logo}>
      //     <img className={classes.logo} src={logo} alt="logo-epo" />
      //   </div>
      //   <div>
      //     <ul
      //       style={{ transform: `${burger ? "translateX(-50px)" : ""}` }}
      //       className={classes.nav}
      //     >
      //       <i
      //         onClick={() => setBurger(!burger)}
      //         style={{ left: "11em", top: ".5em" }}
      //         className="fa fa-times"
      //         aria-hidden="true"
      //       ></i>
      //       <li onClick={() => setBurger(false)}>
      //         <Link to="/">Home</Link>
      //       </li>
      //       <li onClick={() => setBurger(false)}>
      //         <Link to="/about">About</Link>
      //       </li>
      //       <li onClick={() => setBurger(false)}>
      //         <Link to="/gallery">Gallery</Link>
      //       </li>
      //       <li onClick={() => setBurger(false)}>
      //         <Link to="/blog">Blog</Link>
      //       </li>
      //       <li onClick={() => setBurger(false)}>
      //         <Link to="/contact">Contact</Link>
      //       </li>
      //       <li onClick={() => setBurger(false)}>
      //         {user ? (
      //           user?.name ? (
      //             user.name
      //           ) : (
      //             "User"
      //           )
      //         ) : (
      //           <Link to="/login">Login</Link>
      //         )}
      //       </li>
      //     </ul>
      //   </div>
      // </div>
      // // </div>