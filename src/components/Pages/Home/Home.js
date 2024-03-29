import React, { useState } from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { GetType } from "../../../utilities/context/authContext";
import "./tempHome.css"
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
const Home = () => {
  return (
    <>
      <Header />
      <Box className={"outLet"}>
        <Outlet />
      </Box>

      <Footer></Footer>
    </>
  );
};

export default Home;

  {/* <section class="section featured" aria-label="featured post">
    <div class="container">
      <p class="section-subtitle">
        Get started with our{" "}
        <strong class="strong">best stories</strong>
      </p>

      <ul class="has-scrollbar">
        <li class="scrollbar-item">
          <div class="blog-card">
            <figure
              class="card-banner img-holder"
              //  style="--width: 500; --height: 600;"
              style={CustomHeightstyles500}
            >
              <img
                src={featured_1}
                width="500"
                height="600"
                loading="lazy"
                alt="New technology is not good or evil in and of itself"
                class="img-cover"
              />

              <ul class="avatar-list absolute">
                <li class="avatar-item">
                  <a
                    href="#"
                    class="avatar img-holder"
                    style={CustomHeightstyles100}
                    // style="--width: 100; --height: 100;"
                  >
                    <img
                      src={author_1}
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Author"
                      class="img-cover"
                    />
                  </a>
                </li>

                <li class="avatar-item">
                  <a
                    href="#"
                    class="avatar img-holder"
                    style={CustomHeightstyles100}
                  >
                    <img
                      src={author_2}
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Author"
                      class="img-cover"
                    />
                  </a>
                </li>
              </ul>
            </figure>

            <div class="card-content">
              <ul class="card-meta-list">
                <li>
                  <a href="#" class="card-tag">
                    Design
                  </a>
                </li>

                <li>
                  <a href="#" class="card-tag">
                    Idea
                  </a>
                </li>

                <li>
                  <a href="#" class="card-tag">
                    Review
                  </a>
                </li>
              </ul>

              <h3 class="h4">
                <a href="#" class="card-title hover:underline">
                  New technology is not good or evil in and of itself
                </a>
              </h3>

              <p class="card-text">
                Vestibulum vehicula dui venenatis neque tempor, accumsan
                iaculis sapien ornare. Sed at ante porta, ullamcorper
                massa eu, ullamcorper sapien. Donec pretium tortor
                augue. Integer egestas ut tellus sed pretium. Nullam
                tristique augue ut mattis vulputate. Duis et lorem in
                odio ultricies porttitor.
              </p>
            </div>
          </div>
        </li>

        <li class="scrollbar-item">
          <div class="blog-card">
            <figure
              class="card-banner img-holder"
              style={CustomHeightstyles500}
              // style="--width: 500; --height: 600;"
            >
              <img
                src={featured_2}
                width="500"
                height="600"
                loading="lazy"
                alt="It’s a new era in design, there are no rules"
                class="img-cover"
              />

              <ul class="avatar-list absolute">
                <li class="avatar-item">
                  <a
                    href="#"
                    class="avatar img-holder"
                    style={CustomHeightstyles100}

                    // style="--width: 100; --height: 100;"
                  >
                    <img
                      src={author_3}
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Author"
                      class="img-cover"
                    />
                  </a>
                </li>
              </ul>
            </figure>

            <div class="card-content">
              <ul class="card-meta-list">
                <li>
                  <a href="#" class="card-tag">
                    Creative
                  </a>
                </li>

                <li>
                  <a href="#" class="card-tag">
                    Product
                  </a>
                </li>
              </ul>

              <h3 class="h4">
                <a href="#" class="card-title hover:underline">
                  It’s a new era in design, there are no rules
                </a>
              </h3>

              <p class="card-text">
                Quibus autem in rebus tanta obscuratio non fit, fieri
                tamen potest, ut id ipsum, quod interest, non sit
                magnum. Ita fit ut, quanta differentia est in principiis
                naturalibus, tanta sit in finibus bonorum malorumque
                dissimilitudo.
              </p>
            </div>
          </div>
        </li>

        <li class="scrollbar-item">
          <div class="blog-card">
            <figure
              class="card-banner img-holder"
              style={CustomHeightstyles500}
              // style="--width: 500; --height: 600;"
            >
              <img
                src={featured_3}
                width="500"
                height="600"
                loading="lazy"
                alt="Perfection has to do with the end product"
                class="img-cover"
              />

              <ul class="avatar-list absolute">
                <li class="avatar-item">
                  <a
                    href="#"
                    class="avatar img-holder"
                    style={CustomHeightstyles100}
                    // style="--width: 100; --height: 100;"
                  >
                    <img
                      src={author_4}
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Author"
                      class="img-cover"
                    />
                  </a>
                </li>
              </ul>
            </figure>

            <div class="card-content">
              <ul class="card-meta-list">
                <li>
                  <a href="#" class="card-tag">
                    Design
                  </a>
                </li>

                <li>
                  <a href="#" class="card-tag">
                    Creative
                  </a>
                </li>

                <li>
                  <a href="#" class="card-tag">
                    Idea
                  </a>
                </li>
              </ul>

              <h3 class="h4">
                <a href="#" class="card-title hover:underline">
                  Perfection has to do with the end product
                </a>
              </h3>

              <p class="card-text">
                Aenean eget urna aliquet, viverra orci quis, aliquam
                erat. Ut rutrum quam quam, eu eleifend est blandit et.
                Vivamus suscipit ultrices venenatis. Aliquam massa
                ipsum, porta quis hendrerit at, varius sed leo.
                Curabitur convallis urna sit amet mi tempus posuere.
              </p>
            </div>
          </div>
        </li>

        <li class="scrollbar-item">
          <div class="blog-card">
            <figure
              class="card-banner img-holder"
              style={CustomHeightstyles500}
              // style="--width: 500; --height: 600;"
            >
              <img
                src={featured_4}
                width="500"
                height="600"
                loading="lazy"
                alt="Everyone has a different life story"
                class="img-cover"
              />

              <ul class="avatar-list absolute">
                <li class="avatar-item">
                  <a
                    href="#"
                    class="avatar img-holder"
                    style={CustomHeightstyles100}
                    // style="--width: 100; --height: 100;"
                  >
                    <img
                      src={author_5}
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Author"
                      class="img-cover"
                    />
                  </a>
                </li>

                <li class="avatar-item">
                  <a
                    href="#"
                    class="avatar img-holder"
                    style={CustomHeightstyles100}
                    // style="--width: 100; --height: 100;"
                  >
                    <img
                      src={author_2}
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Author"
                      class="img-cover"
                    />
                  </a>
                </li>
              </ul>
            </figure>

            <div class="card-content">
              <ul class="card-meta-list">
                <li>
                  <a href="#" class="card-tag">
                    People
                  </a>
                </li>

                <li>
                  <a href="#" class="card-tag">
                    Story
                  </a>
                </li>
              </ul>

              <h3 class="h4">
                <a href="#" class="card-title hover:underline">
                  Everyone has a different life story
                </a>
              </h3>

              <p class="card-text">
                Non est igitur summum malum dolor. Tu autem inter haec
                tantam multitudinem hominum interiectam non vides nec
                laetantium nec dolentium. Nunc vero a primo quidem
                mirabiliter occulta natura est nec perspici nec cognosci
                potest.
              </p>
            </div>
          </div>
        </li>

        <li class="scrollbar-item">
          <div class="blog-card">
            <figure
              class="card-banner img-holder"
              style={CustomHeightstyles500}
              // style="--width: 500; --height: 600;"
            >
              <img
                src={featured_5}
                width="500"
                height="600"
                loading="lazy"
                alt="The difference is quality"
                class="img-cover"
              />

              <ul class="avatar-list absolute">
                <li class="avatar-item">
                  <a
                    href="#"
                    class="avatar img-holder"
                    style={CustomHeightstyles100}
                    // style="--width: 100; --height: 100;"
                  >
                    <img
                      src={author_6}
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Author"
                      class="img-cover"
                    />
                  </a>
                </li>
              </ul>
            </figure>

            <div class="card-content">
              <ul class="card-meta-list">
                <li>
                  <a href="#" class="card-tag">
                    Design
                  </a>
                </li>

                <li>
                  <a href="#" class="card-tag">
                    Lifestyle
                  </a>
                </li>

                <li>
                  <a href="#" class="card-tag">
                    Idea
                  </a>
                </li>
              </ul>

              <h3 class="h4">
                <a href="#" class="card-title hover:underline">
                  The difference is quality
                </a>
              </h3>

              <p class="card-text">
                Vide, ne etiam menses! nisi forte eum dicis, qui, simul
                atque arripuit, interficit. Atque his de rebus et
                splendida est eorum et illustris oratio.
              </p>
            </div>
          </div>
        </li>

        <li class="scrollbar-item">
          <div class="blog-card">
            <figure
              class="card-banner img-holder"
              style={CustomHeightstyles500}
              // style="--width: 500; --height: 600;"
            >
              <img
                src={featured_6}
                width="500"
                height="600"
                loading="lazy"
                alt="Problems are not stop signs, they are guidelines"
                class="img-cover"
              />

              <ul class="avatar-list absolute">
                <li class="avatar-item">
                  <a
                    href="#"
                    class="avatar img-holder"
                    style={CustomHeightstyles100}
                    // style="--width: 100; --height: 100;"
                  >
                    <img
                      src={author_3}
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Author"
                      class="img-cover"
                    />
                  </a>
                </li>
              </ul>
            </figure>

            <div class="card-content">
              <ul class="card-meta-list">
                <li>
                  <a href="#" class="card-tag">
                    Idea
                  </a>
                </li>

                <li>
                  <a href="#" class="card-tag">
                    Creating
                  </a>
                </li>
              </ul>

              <h3 class="h4">
                <a href="#" class="card-title hover:underline">
                  Problems are not stop signs, they are guidelines
                </a>
              </h3>

              <p class="card-text">
                Quid ad utilitatem tantae pecuniae. Duo enim genera quae
                erant, fecit tria. Et quod est munus, quod opus
                sapientiae.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
  <section class="section recent" aria-label="recent post">
    <div class="container">
      <div class="title-wrapper">
        <h2 class="h2 section-title">
          See what we’ve <strong class="strong">written lately</strong>
        </h2>

        <div class="top-author">
          <ul class="avatar-list">
            <li class="avatar-item">
              <a
                href="#"
                class="avatar large img-holder"
                style={CustomHeightstyles100}
              >
                <img
                  src={author_1}
                  width="100"
                  height="100"
                  alt="top author"
                  class="img-cover"
                />
              </a>
            </li>

            <li class="avatar-item">
              <a
                href="#"
                class="avatar large img-holder"
                style={CustomHeightstyles100}
              >
                <img
                  src={author_2}
                  width="100"
                  height="100"
                  alt="top author"
                  class="img-cover"
                />
              </a>
            </li>

            <li class="avatar-item">
              <a
                href="#"
                class="avatar large img-holder"
                style={CustomHeightstyles100}
              >
                <img
                  src={author_3}
                  width="100"
                  height="100"
                  alt="top author"
                  class="img-cover"
                />
              </a>
            </li>

            <li class="avatar-item">
              <a
                href="#"
                class="avatar large img-holder"
                style={CustomHeightstyles100}
              >
                <img
                  src={author_4}
                  width="100"
                  height="100"
                  alt="top author"
                  class="img-cover"
                />
              </a>
            </li>

            <li class="avatar-item">
              <a
                href="#"
                class="avatar large img-holder"
                style={CustomHeightstyles100}
              >
                <img
                  src={author_5}
                  width="100"
                  height="100"
                  alt="top author"
                  class="img-cover"
                />
              </a>
            </li>
          </ul>

          <span class="span">Meet our top authors</span>
        </div>
      </div>

      <ul class="grid-list">
        <li>
          <div class="blog-card">
            <figure
              class="card-banner img-holder"
              style={CustomHeightstyles550}
            >
              <img
                src={recent_1}
                width="550"
                height="660"
                loading="lazy"
                alt="Creating is a privilege but it’s also a gift"
                class="img-cover"
              />

              <ul class="avatar-list absolute">
                <li class="avatar-item">
                  <a
                    href="#"
                    class="avatar img-holder"
                    style={CustomHeightstyles100}
                  >
                    <img
                      src={author_3}
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Author"
                      class="img-cover"
                    />
                  </a>
                </li>

                <li class="avatar-item">
                  <a
                    href="#"
                    class="avatar img-holder"
                    style={CustomHeightstyles100}
                  >
                    <img
                      src={author_5}
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Author"
                      class="img-cover"
                    />
                  </a>
                </li>
              </ul>
            </figure>

            <div class="card-content">
              <ul class="card-meta-list">
                <li>
                  <a href="#" class="card-tag">
                    Lifestyle
                  </a>
                </li>

                <li>
                  <a href="#" class="card-tag">
                    People
                  </a>
                </li>

                <li>
                  <a href="#" class="card-tag">
                    Review
                  </a>
                </li>
              </ul>

              <h3 class="h4">
                <a href="#" class="card-title hover:underline">
                  Creating is a privilege but it’s also a gift
                </a>
              </h3>

              <p class="card-text">
                Nullam vel lectus vel velit pellentesque dignissim nec
                id magna. Cras molestie ornare quam at semper. Proin a
                ipsum ex. Curabitur eu venenatis justo. Nullam felis
                augue, imperdiet at sodales a, sollicitudin nec risus.
              </p>
            </div>
          </div>
        </li>

        <li>
          <div class="blog-card">
            <figure
              class="card-banner img-holder"
              style={CustomHeightstyles550}
            >
              <img
                src={recent_2}
                width="550"
                height="660"
                loading="lazy"
                alt="Being unique is better than being perfect"
                class="img-cover"
              />

              <ul class="avatar-list absolute">
                <li class="avatar-item">
                  <a
                    href="#"
                    class="avatar img-holder"
                    style={CustomHeightstyles100}
                  >
                    <img
                      src={author_5}
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Author"
                      class="img-cover"
                    />
                  </a>
                </li>
              </ul>
            </figure>

            <div class="card-content">
              <ul class="card-meta-list">
                <li>
                  <a href="#" class="card-tag">
                    Design
                  </a>
                </li>

                <li>
                  <a href="#" class="card-tag">
                    Product
                  </a>
                </li>

                <li>
                  <a href="#" class="card-tag">
                    Idea
                  </a>
                </li>
              </ul>

              <h3 class="h4">
                <a href="#" class="card-title hover:underline">
                  Being unique is better than being perfect
                </a>
              </h3>

              <p class="card-text">
                Nam in pretium dui. Phasellus dapibus, mi at molestie
                cursus, neque eros aliquet nisi, non efficitur nisi est
                nec mi. Nullam semper, ligula a luctus ornare, leo
                turpis fermentum lectus, quis volutpat urna orci a
                lectus. Duis et odio lobortis, auctor justo ut, egestas
                magna.
              </p>
            </div>
          </div>
        </li>

        <li>
          <div class="blog-card">
            <figure
              class="card-banner img-holder"
              style={CustomHeightstyles550}
            >
              <img
                src={recent_3}
                width="550"
                height="660"
                loading="lazy"
                alt="Now we’re getting somewhere"
                class="img-cover"
              />

              <ul class="avatar-list absolute">
                <li class="avatar-item">
                  <a
                    href="#"
                    class="avatar img-holder"
                    style={CustomHeightstyles100}
                  >
                    <img
                      src={author_2}
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Author"
                      class="img-cover"
                    />
                  </a>
                </li>

                <li class="avatar-item">
                  <a
                    href="#"
                    class="avatar img-holder"
                    style={CustomHeightstyles100}
                  >
                    <img
                      src={author_5}
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Author"
                      class="img-cover"
                    />
                  </a>
                </li>

                <li class="avatar-item">
                  <a
                    href="#"
                    class="avatar img-holder"
                    style={CustomHeightstyles100}
                  >
                    <img
                      src={author_1}
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Author"
                      class="img-cover"
                    />
                  </a>
                </li>
              </ul>
            </figure>

            <div class="card-content">
              <ul class="card-meta-list">
                <li>
                  <a href="#" class="card-tag">
                    Idea
                  </a>
                </li>

                <li>
                  <a href="#" class="card-tag">
                    Product
                  </a>
                </li>

                <li>
                  <a href="#" class="card-tag">
                    Review
                  </a>
                </li>
              </ul>

              <h3 class="h4">
                <a href="#" class="card-title hover:underline">
                  Now we’re getting somewhere
                </a>
              </h3>

              <p class="card-text">
                Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Donec volutpat
                rhoncus quam, a feugiat elit gravida eget. Curabitur id
                pharetra ligula. Integer porttitor suscipit ante ac
                faucibus. Sed a enim non enim viverra pulvinar vel diam
                ut lorem congue feugiat.
              </p>
            </div>
          </div>
        </li>

        <li>
          <div class="blog-card">
            <figure
              class="card-banner img-holder"
              style={CustomHeightstyles550}
            >
              <img
                src={recent_4}
                width="550"
                height="660"
                loading="lazy"
                alt="The trick to getting more done is to have the freedom to roam around"
                class="img-cover"
              />

              <ul class="avatar-list absolute">
                <li class="avatar-item">
                  <a
                    href="#"
                    class="avatar img-holder"
                    style={CustomHeightstyles100}
                  >
                    <img
                      src={author_3}
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Author"
                      class="img-cover"
                    />
                  </a>
                </li>
              </ul>
            </figure>

            <div class="card-content">
              <ul class="card-meta-list">
                <li>
                  <a href="#" class="card-tag">
                    Lifestyle
                  </a>
                </li>

                <li>
                  <a href="#" class="card-tag">
                    Design
                  </a>
                </li>
              </ul>

              <h3 class="h4">
                <a href="#" class="card-title hover:underline">
                  The trick to getting more done is to have the freedom
                  to roam around
                </a>
              </h3>

              <p class="card-text">
                Integer nec mi cursus, blandit est et, auctor mauris.
                Aenean ex metus, faucibus in mattis at, tincidunt eu
                dolor. Cras hendrerit massa nec augue placerat rutrum.
                Sed facilisis massa enim, ac tempus diam elementum sit
                amet.
              </p>
            </div>
          </div>
        </li>

        <li>
          <div class="blog-card">
            <figure
              class="card-banner img-holder"
              style={CustomHeightstyles550}
            >
              <img
                src={recent_5}
                width="550"
                height="660"
                loading="lazy"
                alt="Every day, in every city and town across the country"
                class="img-cover"
              />

              <ul class="avatar-list absolute">
                <li class="avatar-item">
                  <a
                    href="#"
                    class="avatar img-holder"
                    style={CustomHeightstyles100}
                  >
                    <img
                      src={author_1}
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Author"
                      class="img-cover"
                    />
                  </a>
                </li>

                <li class="avatar-item">
                  <a
                    href="#"
                    class="avatar img-holder"
                    style={CustomHeightstyles100}
                  >
                    <img
                      src={author_6}
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Author"
                      class="img-cover"
                    />
                  </a>
                </li>
              </ul>
            </figure>

            <div class="card-content">
              <ul class="card-meta-list">
                <li>
                  <a href="#" class="card-tag">
                    People
                  </a>
                </li>

                <li>
                  <a href="#" class="card-tag">
                    Story
                  </a>
                </li>

                <li>
                  <a href="#" class="card-tag">
                    Lifestyle
                  </a>
                </li>
              </ul>

              <h3 class="h4">
                <a href="#" class="card-title hover:underline">
                  Every day, in every city and town across the country
                </a>
              </h3>

              <p class="card-text">
                Morbi a facilisis lectus. Ut eu dapibus risus, a
                interdum justo. Vestibulum volutpat velit ac tellus
                mollis, sit amet sodales metus elementum. Aliquam eu mi
                massa. Proin suscipit enim a pulvinar viverra.
              </p>
            </div>
          </div>
        </li>

        <li>
          <div class="blog-card">
            <figure
              class="card-banner img-holder"
              style={CustomHeightstyles550}
            >
              <img
                src={recent_6}
                width="550"
                height="660"
                loading="lazy"
                alt="Your voice, your mind, your story, your vision"
                class="img-cover"
              />

              <ul class="avatar-list absolute">
                <li class="avatar-item">
                  <a
                    href="#"
                    class="avatar img-holder"
                    style={CustomHeightstyles100}
                  >
                    <img
                      src={author_6}
                      width="100"
                      height="100"
                      loading="lazy"
                      alt="Author"
                      class="img-cover"
                    />
                  </a>
                </li>
              </ul>
            </figure>

            <div class="card-content">
              <ul class="card-meta-list">
                <li>
                  <a href="#" class="card-tag">
                    People
                  </a>
                </li>

                <li>
                  <a href="#" class="card-tag">
                    Review
                  </a>
                </li>

                <li>
                  <a href="#" class="card-tag">
                    Story
                  </a>
                </li>
              </ul>

              <h3 class="h4">
                <a href="#" class="card-title hover:underline">
                  Your voice, your mind, your story, your vision
                </a>
              </h3>

              <p class="card-text">
                Nullam auctor nisi non tortor porta, id dapibus lectus
                rhoncus. Vivamus lobortis posuere enim finibus sodales.
                Phasellus quis tellus scelerisque, sagittis tortor et,
                maximus metus.
              </p>
            </div>
          </div>
        </li>
      </ul>

      <button class="btn">Load more</button>
    </div>
  </section> */}
{/* <section class="section recommended" aria-label="recommended post">
  <div class="container">
    <p class="section-subtitle">
      <strong class="strong">Recommended</strong>
    </p>

    <ul class="grid-list">
      <li>
        <div class="blog-card">
          <figure
            class="card-banner img-holder"
            style={CustomHeightstyles300}
          >
            <img
              src={recommended_1}
              width="300"
              height="360"
              loading="lazy"
              alt="The trick to getting more done is to have the freedom to roam around "
              class="img-cover"
            />

            <ul class="avatar-list absolute">
              <li class="avatar-item">
                <a
                  href="#"
                  class="avatar img-holder"
                  style={CustomHeightstyles100}
                >
                  <img
                    src={author_5}
                    width="100"
                    height="100"
                    loading="lazy"
                    alt="Author"
                    class="img-cover"
                  />
                </a>
              </li>

              <li class="avatar-item">
                <a
                  href="#"
                  class="avatar img-holder"
                  style={CustomHeightstyles100}
                >
                  <img
                    src={author_2}
                    width="100"
                    height="100"
                    loading="lazy"
                    alt="Author"
                    class="img-cover"
                  />
                </a>
              </li>
            </ul>
          </figure>

          <div class="card-content">
            <h3 class="h5">
              <a href="#" class="card-title hover:underline">
                The trick to getting more done is to have the freedom
                to roam around
              </a>
            </h3>
          </div>
        </div>
      </li>

      <li>
        <div class="blog-card">
          <figure
            class="card-banner img-holder"
            style={CustomHeightstyles300}
          >
            <img
              src={recommended_2}
              width="300"
              height="360"
              loading="lazy"
              alt="Every day, in every city and town across the country "
              class="img-cover"
            />

            <ul class="avatar-list absolute">
              <li class="avatar-item">
                <a
                  href="#"
                  class="avatar img-holder"
                  style={CustomHeightstyles100}
                >
                  <img
                    src={author_3}
                    width="100"
                    height="100"
                    loading="lazy"
                    alt="Author"
                    class="img-cover"
                  />
                </a>
              </li>
            </ul>
          </figure>

          <div class="card-content">
            <h3 class="h5">
              <a href="#" class="card-title hover:underline">
                Every day, in every city and town across the country
              </a>
            </h3>
          </div>
        </div>
      </li>

      <li>
        <div class="blog-card">
          <figure
            class="card-banner img-holder"
            style={CustomHeightstyles300}
          >
            <img
              src={recommended_3}
              width="300"
              height="360"
              loading="lazy"
              alt="I work best when my space is filled with inspiration "
              class="img-cover"
            />

            <ul class="avatar-list absolute">
              <li class="avatar-item">
                <a
                  href="#"
                  class="avatar img-holder"
                  style={CustomHeightstyles100}
                >
                  <img
                    src={author_1}
                    width="100"
                    height="100"
                    loading="lazy"
                    alt="Author"
                    class="img-cover"
                  />
                </a>
              </li>
            </ul>
          </figure>

          <div class="card-content">
            <h3 class="h5">
              <a href="#" class="card-title hover:underline">
                I work best when my space is filled with inspiration
              </a>
            </h3>
          </div>
        </div>
      </li>

      <li>
        <div class="blog-card">
          <figure
            class="card-banner img-holder"
            style={CustomHeightstyles300}
          >
            <img
              src={recommended_4}
              width="300"
              height="360"
              loading="lazy"
              alt="I have my own definition of minimalism "
              class="img-cover"
            />

            <ul class="avatar-list absolute">
              <li class="avatar-item">
                <a
                  href="#"
                  class="avatar img-holder"
                  style={CustomHeightstyles100}
                >
                  <img
                    src={author_4}
                    width="100"
                    height="100"
                    loading="lazy"
                    alt="Author"
                    class="img-cover"
                  />
                </a>
              </li>

              <li class="avatar-item">
                <a
                  href="#"
                  class="avatar img-holder"
                  style={CustomHeightstyles100}
                >
                  <img
                    src={author_3}
                    width="100"
                    height="100"
                    loading="lazy"
                    alt="Author"
                    class="img-cover"
                  />
                </a>
              </li>
            </ul>
          </figure>

          <div class="card-content">
            <h3 class="h5">
              <a href="#" class="card-title hover:underline">
                I have my own definition of minimalism
              </a>
            </h3>
          </div>
        </div>
      </li>

      <li>
        <div class="blog-card">
          <figure
            class="card-banner img-holder"
            style={CustomHeightstyles300}
          >
            <img
              src={recommended_5}
              width="300"
              height="360"
              loading="lazy"
              alt="Change your look and your attitude "
              class="img-cover"
            />

            <ul class="avatar-list absolute">
              <li class="avatar-item">
                <a
                  href="#"
                  class="avatar img-holder"
                  style={CustomHeightstyles100}
                >
                  <img
                    src={author_6}
                    width="100"
                    height="100"
                    loading="lazy"
                    alt="Author"
                    class="img-cover"
                  />
                </a>
              </li>
            </ul>
          </figure>

          <div class="card-content">
            <h3 class="h5">
              <a href="#" class="card-title hover:underline">
                Change your look and your attitude
              </a>
            </h3>
          </div>
        </div>
      </li>

      <li>
        <div class="blog-card">
          <figure
            class="card-banner img-holder"
            style={CustomHeightstyles300}
          >
            <img
              src={recommended_6}
              width="300"
              height="360"
              loading="lazy"
              alt="The difference is quality "
              class="img-cover"
            />

            <ul class="avatar-list absolute">
              <li class="avatar-item">
                <a
                  href="#"
                  class="avatar img-holder"
                  style={CustomHeightstyles100}
                >
                  <img
                    src={author_3}
                    width="100"
                    height="100"
                    loading="lazy"
                    alt="Author"
                    class="img-cover"
                  />
                </a>
              </li>
            </ul>
          </figure>

          <div class="card-content">
            <h3 class="h5">
              <a href="#" class="card-title hover:underline">
                The difference is quality
              </a>
            </h3>
          </div>
        </div>
      </li>
    </ul>
  </div>
</section> */}

 {
   /*  
      <section class="section recent" aria-label="recent post">
        <div class="container">

          <div class="title-wrapper">

            <h2 class="h2 section-title">
              See what we’ve <strong class="strong">written lately</strong>
            </h2>

            <div class="top-author">
              <ul class="avatar-list">

                <li class="avatar-item">
                  <a href="#" class="avatar large img-holder" style="--width: 100; --height: 100;">
                    <img src="./assets/images/author-1.jpg" width="100" height="100" alt="top author" class="img-cover"/>
                  </a>
                </li>

                <li class="avatar-item">
                  <a href="#" class="avatar large img-holder" style="--width: 100; --height: 100;">
                    <img src="./assets/images/author-2.jpg" width="100" height="100" alt="top author" class="img-cover"/>
                  </a>
                </li>

                <li class="avatar-item">
                  <a href="#" class="avatar large img-holder" style="--width: 100; --height: 100;">
                    <img src="./assets/images/author-3.jpg" width="100" height="100" alt="top author" class="img-cover"/>
                  </a>
                </li>

                <li class="avatar-item">
                  <a href="#" class="avatar large img-holder" style="--width: 100; --height: 100;">
                    <img src="./assets/images/author-4.jpg" width="100" height="100" alt="top author" class="img-cover"/>
                  </a>
                </li>

                <li class="avatar-item">
                  <a href="#" class="avatar large img-holder" style="--width: 100; --height: 100;">
                    <img src="./assets/images/author-5.jpg" width="100" height="100" alt="top author" class="img-cover"/>
                  </a>
                </li>

              </ul>

              <span class="span">Meet our top authors</span>
            </div>

          </div>

          <ul class="grid-list">

            <li>
              <div class="blog-card">

                <figure class="card-banner img-holder" style="--width: 550; --height: 660;">
                  <img src="./assets/images/recent-1.jpg" width="550" height="660" loading="lazy"
                    alt="Creating is a privilege but it’s also a gift" class="img-cover"/>

                  <ul class="avatar-list absolute">

                    <li class="avatar-item">
                      <a href="#" class="avatar img-holder" style="--width: 100; --height: 100;">
                        <img src="./assets/images/author-3.jpg" width="100" height="100" loading="lazy" alt="Author"
                          class="img-cover"/>
                      </a>
                    </li>

                    <li class="avatar-item">
                      <a href="#" class="avatar img-holder" style="--width: 100; --height: 100;">
                        <img src="./assets/images/author-5.jpg" width="100" height="100" loading="lazy" alt="Author"
                          class="img-cover"/>
                      </a>
                    </li>

                  </ul>
                </figure>

                <div class="card-content">

                  <ul class="card-meta-list">

                    <li>
                      <a href="#" class="card-tag">Lifestyle</a>
                    </li>

                    <li>
                      <a href="#" class="card-tag">People</a>
                    </li>

                    <li>
                      <a href="#" class="card-tag">Review</a>
                    </li>

                  </ul>

                  <h3 class="h4">
                    <a href="#" class="card-title hover:underline">
                      Creating is a privilege but it’s also a gift
                    </a>
                  </h3>

                  <p class="card-text">
                    Nullam vel lectus vel velit pellentesque dignissim nec id magna. Cras molestie ornare quam at
                    semper. Proin a ipsum ex.
                    Curabitur eu venenatis justo. Nullam felis augue, imperdiet at sodales a, sollicitudin nec risus.
                  </p>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <figure class="card-banner img-holder" style="--width: 550; --height: 660;">
                  <img src="./assets/images/recent-2.jpg" width="550" height="660" loading="lazy"
                    alt="Being unique is better than being perfect" class="img-cover"/>

                  <ul class="avatar-list absolute">

                    <li class="avatar-item">
                      <a href="#" class="avatar img-holder" style="--width: 100; --height: 100;">
                        <img src="./assets/images/author-5.jpg" width="100" height="100" loading="lazy" alt="Author"
                          class="img-cover"/>
                      </a>
                    </li>

                  </ul>
                </figure>

                <div class="card-content">

                  <ul class="card-meta-list">

                    <li>
                      <a href="#" class="card-tag">Design</a>
                    </li>

                    <li>
                      <a href="#" class="card-tag">Product</a>
                    </li>

                    <li>
                      <a href="#" class="card-tag">Idea</a>
                    </li>

                  </ul>

                  <h3 class="h4">
                    <a href="#" class="card-title hover:underline">
                      Being unique is better than being perfect
                    </a>
                  </h3>

                  <p class="card-text">
                    Nam in pretium dui. Phasellus dapibus, mi at molestie cursus, neque eros aliquet nisi, non
                    efficitur nisi est nec mi.
                    Nullam semper, ligula a luctus ornare, leo turpis fermentum lectus, quis volutpat urna orci a
                    lectus. Duis et odio
                    lobortis, auctor justo ut, egestas magna.
                  </p>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <figure class="card-banner img-holder" style="--width: 550; --height: 660;">
                  <img src="./assets/images/recent-3.jpg" width="550" height="660" loading="lazy"
                    alt="Now we’re getting somewhere" class="img-cover" />

                  <ul class="avatar-list absolute">

                    <li class="avatar-item">
                      <a href="#" class="avatar img-holder" style="--width: 100; --height: 100;">
                        <img src="./assets/images/author-2.jpg" width="100" height="100" loading="lazy" alt="Author"
                          class="img-cover" />
                      </a>
                    </li>

                    <li class="avatar-item">
                      <a href="#" class="avatar img-holder" style="--width: 100; --height: 100;">
                        <img src="./assets/images/author-5.jpg" width="100" height="100" loading="lazy" alt="Author"
                          class="img-cover" />
                      </a>
                    </li>

                    <li class="avatar-item">
                      <a href="#" class="avatar img-holder" style="--width: 100; --height: 100;">
                        <img src="./assets/images/author-1.jpg" width="100" height="100" loading="lazy" alt="Author"
                          class="img-cover" />
                      </a>
                    </li>

                  </ul>
                </figure>

                <div class="card-content">

                  <ul class="card-meta-list">

                    <li>
                      <a href="#" class="card-tag">Idea</a>
                    </li>

                    <li>
                      <a href="#" class="card-tag">Product</a>
                    </li>

                    <li>
                      <a href="#" class="card-tag">Review</a>
                    </li>

                  </ul>

                  <h3 class="h4">
                    <a href="#" class="card-title hover:underline">
                      Now we’re getting somewhere
                    </a>
                  </h3>

                  <p class="card-text">
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec
                    volutpat rhoncus quam,
                    a feugiat elit gravida eget. Curabitur id pharetra ligula. Integer porttitor suscipit ante ac
                    faucibus. Sed a enim non
                    enim viverra pulvinar vel diam ut lorem congue feugiat.
                  </p>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <figure class="card-banner img-holder" style="--width: 550; --height: 660;">
                  <img src="./assets/images/recent-4.jpg" width="550" height="660" loading="lazy"
                    alt="The trick to getting more done is to have the freedom to roam around" class="img-cover" />

                  <ul class="avatar-list absolute">

                    <li class="avatar-item">
                      <a href="#" class="avatar img-holder" style="--width: 100; --height: 100;">
                        <img src="./assets/images/author-3.jpg" width="100" height="100" loading="lazy" alt="Author"
                          class="img-cover" />
                      </a>
                    </li>

                  </ul>
                </figure>

                <div class="card-content">

                  <ul class="card-meta-list">

                    <li>
                      <a href="#" class="card-tag">Lifestyle</a>
                    </li>

                    <li>
                      <a href="#" class="card-tag">Design</a>
                    </li>

                  </ul>

                  <h3 class="h4">
                    <a href="#" class="card-title hover:underline">
                      The trick to getting more done is to have the freedom to roam around
                    </a>
                  </h3>

                  <p class="card-text">
                    Integer nec mi cursus, blandit est et, auctor mauris. Aenean ex metus, faucibus in mattis at,
                    tincidunt eu dolor. Cras
                    hendrerit massa nec augue placerat rutrum. Sed facilisis massa enim, ac tempus diam elementum sit
                    amet.
                  </p>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <figure class="card-banner img-holder" style="--width: 550; --height: 660;">
                  <img src="./assets/images/recent-5.jpg" width="550" height="660" loading="lazy"
                    alt="Every day, in every city and town across the country" class="img-cover" />

                  <ul class="avatar-list absolute">

                    <li class="avatar-item">
                      <a href="#" class="avatar img-holder" style="--width: 100; --height: 100;">
                        <img src="./assets/images/author-1.jpg" width="100" height="100" loading="lazy" alt="Author"
                          class="img-cover" />
                      </a>
                    </li>

                    <li class="avatar-item">
                      <a href="#" class="avatar img-holder" style="--width: 100; --height: 100;">
                        <img src="./assets/images/author-6.jpg" width="100" height="100" loading="lazy" alt="Author"
                          class="img-cover" />
                      </a>
                    </li>

                  </ul>
                </figure>

                <div class="card-content">

                  <ul class="card-meta-list">

                    <li>
                      <a href="#" class="card-tag">People</a>
                    </li>

                    <li>
                      <a href="#" class="card-tag">Story</a>
                    </li>

                    <li>
                      <a href="#" class="card-tag">Lifestyle</a>
                    </li>

                  </ul>

                  <h3 class="h4">
                    <a href="#" class="card-title hover:underline">
                      Every day, in every city and town across the country
                    </a>
                  </h3>

                  <p class="card-text">
                    Morbi a facilisis lectus. Ut eu dapibus risus, a interdum justo. Vestibulum volutpat velit ac
                    tellus mollis, sit amet
                    sodales metus elementum. Aliquam eu mi massa. Proin suscipit enim a pulvinar viverra.
                  </p>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <figure class="card-banner img-holder" style="--width: 550; --height: 660;">
                  <img src="./assets/images/recent-6.jpg" width="550" height="660" loading="lazy"
                    alt="Your voice, your mind, your story, your vision" class="img-cover" />

                  <ul class="avatar-list absolute">

                    <li class="avatar-item">
                      <a href="#" class="avatar img-holder" style="--width: 100; --height: 100;">
                        <img src="./assets/images/author-6.jpg" width="100" height="100" loading="lazy" alt="Author"
                          class="img-cover" />
                      </a>
                    </li>

                  </ul>
                </figure>

                <div class="card-content">

                  <ul class="card-meta-list">

                    <li>
                      <a href="#" class="card-tag">People</a>
                    </li>

                    <li>
                      <a href="#" class="card-tag">Review</a>
                    </li>

                    <li>
                      <a href="#" class="card-tag">Story</a>
                    </li>

                  </ul>

                  <h3 class="h4">
                    <a href="#" class="card-title hover:underline">
                      Your voice, your mind, your story, your vision
                    </a>
                  </h3>

                  <p class="card-text">
                    Nullam auctor nisi non tortor porta, id dapibus lectus rhoncus. Vivamus lobortis posuere enim
                    finibus sodales. Phasellus
                    quis tellus scelerisque, sagittis tortor et, maximus metus.
                  </p>

                </div>

              </div>
            </li>

          </ul>

          <button class="btn">Load more</button>

        </div>
      </section>
      <section class="section recommended" aria-label="recommended post">
        <div class="container">

          <p class="section-subtitle">
            <strong class="strong">Recommended</strong>
          </p>

          <ul class="grid-list">

            <li>
              <div class="blog-card">

                <figure class="card-banner img-holder" style="--width: 300; --height: 360;">
                  <img src="./assets/images/recommended-1.jpg" width="300" height="360" loading="lazy"
                    alt="The trick to getting more done is to have the freedom to roam around " class="img-cover"/>

                  <ul class="avatar-list absolute">

                    <li class="avatar-item">
                      <a href="#" class="avatar img-holder" style="--width: 100; --height: 100;">
                        <img src="./assets/images/author-5.jpg" width="100" height="100" loading="lazy" alt="Author"
                          class="img-cover" />
                      </a>
                    </li>

                    <li class="avatar-item">
                      <a href="#" class="avatar img-holder" style="--width: 100; --height: 100;">
                        <img src="./assets/images/author-2.jpg" width="100" height="100" loading="lazy" alt="Author"
                          class="img-cover" />
                      </a>
                    </li>

                  </ul>
                </figure>

                <div class="card-content">

                  <h3 class="h5">
                    <a href="#" class="card-title hover:underline">
                      The trick to getting more done is to have the freedom to roam around
                    </a>
                  </h3>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <figure class="card-banner img-holder" style="--width: 300; --height: 360;">
                  <img src="./assets/images/recommended-2.jpg" width="300" height="360" loading="lazy"
                    alt="Every day, in every city and town across the country " class="img-cover" />

                  <ul class="avatar-list absolute">

                    <li class="avatar-item">
                      <a href="#" class="avatar img-holder" style="--width: 100; --height: 100;">
                        <img src="./assets/images/author-3.jpg" width="100" height="100" loading="lazy" alt="Author"
                          class="img-cover" />
                      </a>
                    </li>

                  </ul>
                </figure>

                <div class="card-content">

                  <h3 class="h5">
                    <a href="#" class="card-title hover:underline">
                      Every day, in every city and town across the country
                    </a>
                  </h3>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <figure class="card-banner img-holder" style="--width: 300; --height: 360;">
                  <img src="./assets/images/recommended-3.jpg" width="300" height="360" loading="lazy"
                    alt="I work best when my space is filled with inspiration " class="img-cover" />

                  <ul class="avatar-list absolute">

                    <li class="avatar-item">
                      <a href="#" class="avatar img-holder" style="--width: 100; --height: 100;">
                        <img src="./assets/images/author-1.jpg" width="100" height="100" loading="lazy" alt="Author"
                          class="img-cover" />
                      </a>
                    </li>

                  </ul>
                </figure>

                <div class="card-content">

                  <h3 class="h5">
                    <a href="#" class="card-title hover:underline">
                      I work best when my space is filled with inspiration
                    </a>
                  </h3>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <figure class="card-banner img-holder" style="--width: 300; --height: 360;">
                  <img src="./assets/images/recommended-4.jpg" width="300" height="360" loading="lazy"
                    alt="I have my own definition of minimalism " class="img-cover" />

                  <ul class="avatar-list absolute">

                    <li class="avatar-item">
                      <a href="#" class="avatar img-holder" style="--width: 100; --height: 100;">
                        <img src="./assets/images/author-4.jpg" width="100" height="100" loading="lazy" alt="Author"
                          class="img-cover"/>
                      </a>
                    </li>

                    <li class="avatar-item">
                      <a href="#" class="avatar img-holder" style="--width: 100; --height: 100;">
                        <img src="./assets/images/author-3.jpg" width="100" height="100" loading="lazy" alt="Author"
                          class="img-cover"/>
                      </a>
                    </li>

                  </ul>
                </figure>

                <div class="card-content">

                  <h3 class="h5">
                    <a href="#" class="card-title hover:underline">
                      I have my own definition of minimalism
                    </a>
                  </h3>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <figure class="card-banner img-holder" style="--width: 300; --height: 360;">
                  <img src="./assets/images/recommended-5.jpg" width="300" height="360" loading="lazy"
                    alt="Change your look and your attitude " class="img-cover" />

                  <ul class="avatar-list absolute">

                    <li class="avatar-item">
                      <a href="#" class="avatar img-holder" style="--width: 100; --height: 100;">
                        <img src="./assets/images/author-6.jpg" width="100" height="100" loading="lazy" alt="Author"
                          class="img-cover" />
                      </a>
                    </li>

                  </ul>
                </figure>

                <div class="card-content">

                  <h3 class="h5">
                    <a href="#" class="card-title hover:underline">
                      Change your look and your attitude
                    </a>
                  </h3>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <figure class="card-banner img-holder" style="--width: 300; --height: 360;">
                  <img src="./assets/images/recommended-6.jpg" width="300" height="360" loading="lazy"
                    alt="The difference is quality " class="img-cover" />

                  <ul class="avatar-list absolute">

                    <li class="avatar-item">
                      <a href="#" class="avatar img-holder" style="--width: 100; --height: 100;">
                        <img src="./assets/images/author-3.jpg" width="100" height="100" loading="lazy" alt="Author"
                          class="img-cover" />
                      </a>
                    </li>

                  </ul>
                </figure>

                <div class="card-content">

                  <h3 class="h5">
                    <a href="#" class="card-title hover:underline">
                      The difference is quality
                    </a>
                  </h3>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>




      <section class="section newsletter">

        <h2 class="h2 section-title">
          Subscribe to <strong class="strong">new posts</strong>
        </h2>

        <form action="" class="newsletter-form">
          <input type="email" name="email_address" placeholder="Your email address" required class="email-field"/>

          <button type="submit" class="btn">Subscribe</button>
        </form>

      </section> */
 }












































{
        /* <Box
        sx={{
          paddingBottom: "15vw",
        }}
      >
        <Fade top>
          <Slider {...settings}>
            <div className={homeClasses.imageDiv}>
              <Intro heading={"Welcome to EPO"} />
              <img className={homeClasses.imgs} src={img1} alt="epo=intro" />
            </div>
            <div className={homeClasses.imageDiv}>
              <Intro heading={"Welcome to EPO"} />
              <img className={homeClasses.imgs} src={img2} alt="epo=intro" />
            </div>
            <div className={homeClasses.imageDiv}>
              <Intro heading={"Welcome to EPO"} />
              <img className={homeClasses.imgs} src={img3} alt="epo=intro" />
            </div>
            <div className={homeClasses.imageDiv}>
              <Intro heading={"Welcome to EPO"} />
              <img className={homeClasses.imgs} src={img4} alt="epo=intro" />
            </div>
          </Slider>
        </Fade>
      </Box>
      <Footer></Footer> */
      }