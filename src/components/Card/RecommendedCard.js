import React, { useEffect, useState } from 'react'
import "../Pages/Home/home.module.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import classes1 from "./CardComman.module.css";
const CustomHeightstyles300 = {
  "--height": "360px",
  "--width": "300px",
};
const CustomHeightstyles100 = {
  "--height": "100px",
  "--width": "100px",
};

function RecommendedCard({setLoading}) {
  const navigate = useNavigate();
   const [recommendedBlog, setRecommendedBlog] = useState([]);
   useEffect(() => {
     const fetchRecommendedBlog = async () => {
       try {
         const response = await axios.get(
           `${process.env.REACT_APP_API_URL}/blog/recommendedStories`
         );
         console.log(response.data);
          setLoading(false);
         setRecommendedBlog(response.data.data);
       } catch (error) {
         console.log(error);
       }
     };

     fetchRecommendedBlog();
   }, []);
  return (
    <section class="section recommended" aria-label="recommended post">
      <div class="container">
        <p class="section-subtitle">
          <strong class="strong">Recommended</strong>
        </p>

        <ul class="grid-list">
          {recommendedBlog.map((blog, index) => {
            return (
              <li
                className={classes1.boxShadow}
                onClick={() => {
                  navigate(`/${blog.createdBy._id}/${blog._id}`);
                }}
              >
                <div class="blog-card">
                  <figure
                    class="card-banner img-holder"
                    style={CustomHeightstyles300}
                  >
                    <img
                      src={blog.imageUrl}
                      width="300"
                      height="360"
                      loading="lazy"
                      alt="The trick to getting more done is to have the freedom to roam around "
                      class="img-cover"
                    />

                    <ul class="avatar-list absolute">
                      <li
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/profile/${blog.createdBy._id}`);
                        }}
                        class="avatar-item"
                      >
                        <a
                          class="avatar img-holder"
                          style={CustomHeightstyles100}
                        >
                          <img
                            src={blog.createdBy.profileImage}
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
                        {blog.heading}
                      </a>
                    </h3>
                  </div>
                </div>
              </li>
            );
          })}
          {/* 
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
          </li> */}
        </ul>
      </div>
    </section>
  );
}

export default RecommendedCard