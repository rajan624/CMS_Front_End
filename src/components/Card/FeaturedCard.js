import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import classes1 from "./CardComman.module.css";
const CustomHeightstyles500 = {
  "--height": "600px",
  "--width": "500px",
};
const CustomHeightstyles100 = {
  "--height": "100px",
  "--width": "100px",
};
function FeaturedCard({setLoading}) {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [featuredBlog, setFeaturedBlog] = useState([]);
   useEffect(() => {
     const fetchUserProfile = async () => {
       try {
         const response = await axios.get(
           `${process.env.REACT_APP_API_URL}/blog/bestStories`
         );
         setLoading(false);
         console.log(response.data);
         setFeaturedBlog(response.data.data);
       } catch (error) {
         console.log(error);
       }
     };

     fetchUserProfile();
   }, []);
  return (
    <section class="section featured" aria-label="featured post">
      <div class="container">
        <p class="section-subtitle">
          Get started with our <strong class="strong">best stories</strong>
        </p>

        <ul class="has-scrollbar">

          {featuredBlog.map((blog, index) => {
            return (
              <li
                className={`${classes1.boxShadow} scrollbar-item `}
                onClick={() => {
                  navigate(`/${blog.createdBy._id}/${blog._id}`);
                }}
                key={index}
                // class="scrollbar-item"
              >
                <div class="blog-card">
                  <figure
                    class="card-banner img-holder"
                    //  style="--width: 500; --height: 600;"
                    style={CustomHeightstyles500}
                  >
                    <img
                      src={blog.imageUrl}
                      // src={featured_1}
                      width="500"
                      height="600"
                      loading="lazy"
                      alt="New technology is not good or evil in and of itself"
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
                          // style="--width: 100; --height: 100;"
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
                    <ul class="card-meta-list">
                      {blog.tagLine.map((tag, tagIndex) => {
                        return (
                          <li key={tagIndex}>
                            <a href="#" class="card-tag">
                              {tag}
                            </a>
                          </li>
                        );
                      })}
                    </ul>

                    <h3 class="h4">
                      <a href="#" class="card-title hover:underline">
                        {blog.heading}
                      </a>
                    </h3>

                    <p class="card-text">{blog.description}</p>
                  </div>
                </div>
              </li>
            );})}
        </ul>
      </div>
    </section>
  );
}

export default FeaturedCard