import React from 'react'
import featured_1 from "../../images/images/featured-1.jpg";
import featured_2 from "../../images/images/featured-2.jpg";
import featured_3 from "../../images/images/featured-3.jpg";
import featured_4 from "../../images/images/featured-4.jpg";
import featured_5 from "../../images/images/featured-5.jpg";
import featured_6 from "../../images/images/featured-6.jpg";
import author_1 from "../../images/images/author-1.jpg";
import author_2 from "../../images/images/author-2.jpg";
import author_3 from "../../images/images/author-3.jpg";
import author_4 from "../../images/images/author-4.jpg";
import author_5 from "../../images/images/author-5.jpg";
import author_6 from "../../images/images/author-6.jpg";
const CustomHeightstyles500 = {
  "--height": "600px",
  "--width": "500px",
};
const CustomHeightstyles100 = {
  "--height": "100px",
  "--width": "100px",
};
function FeaturedCard() {
  return (
    <section class="section featured" aria-label="featured post">
      <div class="container">
        <p class="section-subtitle">
          Get started with our <strong class="strong">best stories</strong>
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
                  iaculis sapien ornare. Sed at ante porta, ullamcorper massa
                  eu, ullamcorper sapien. Donec pretium tortor augue. Integer
                  egestas ut tellus sed pretium. Nullam tristique augue ut
                  mattis vulputate. Duis et lorem in odio ultricies porttitor.
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
                  Quibus autem in rebus tanta obscuratio non fit, fieri tamen
                  potest, ut id ipsum, quod interest, non sit magnum. Ita fit
                  ut, quanta differentia est in principiis naturalibus, tanta
                  sit in finibus bonorum malorumque dissimilitudo.
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
                  Aenean eget urna aliquet, viverra orci quis, aliquam erat. Ut
                  rutrum quam quam, eu eleifend est blandit et. Vivamus suscipit
                  ultrices venenatis. Aliquam massa ipsum, porta quis hendrerit
                  at, varius sed leo. Curabitur convallis urna sit amet mi
                  tempus posuere.
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
                  Non est igitur summum malum dolor. Tu autem inter haec tantam
                  multitudinem hominum interiectam non vides nec laetantium nec
                  dolentium. Nunc vero a primo quidem mirabiliter occulta natura
                  est nec perspici nec cognosci potest.
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
                  Vide, ne etiam menses! nisi forte eum dicis, qui, simul atque
                  arripuit, interficit. Atque his de rebus et splendida est
                  eorum et illustris oratio.
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
                  erant, fecit tria. Et quod est munus, quod opus sapientiae.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default FeaturedCard