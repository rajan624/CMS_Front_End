
import React from "react";
import author_1 from "../../images/images/author-1.jpg";
import author_2 from "../../images/images/author-2.jpg";
import author_3 from "../../images/images/author-3.jpg";
import author_4 from "../../images/images/author-4.jpg";
import author_5 from "../../images/images/author-5.jpg";
import author_6 from "../../images/images/author-6.jpg";

import recent_1 from "../../images/images/recent-1.jpg";
import recent_2 from "../../images/images/recent-2.jpg";
import recent_3 from "../../images/images/recent-3.jpg";
import recent_4 from "../../images/images/recent-4.jpg";
import recent_5 from "../../images/images/recent-5.jpg";
import recent_6 from "../../images/images/recent-6.jpg";
import "../Pages/Home/home.module.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const CustomHeightstyles550 = {
  "--height": "660px",
  "--width": "550px",
};
const CustomHeightstyles100 = {
  "--height": "100px",
  "--width": "100px",
};
function MyBlogCard() {
  const navigate = useNavigate();
  const [recentBlog, setRecentBlog] = useState([]);
  useEffect(() => {
    const fetchRecentBlog = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/blog/bestStories`
        );
        console.log(response.data);
        setRecentBlog(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRecentBlog();
  }, []);
  return (
    <section class="section recent" aria-label="recent post">
      <div class="container">
        <ul class="grid-list">
          {recentBlog.map((blog, index) => {
            return (
              <li
                onClick={() => {
                  navigate(`/${blog.createdBy._id}/${blog._id}`);
                }}
              >
                <div class="blog-card">
                  <figure
                    class="card-banner img-holder"
                    style={CustomHeightstyles550}
                  >
                    <img
                      src={blog.imageUrl}
                      width="550"
                      height="660"
                      loading="lazy"
                      alt="Creating is a privilege but it’s also a gift"
                      class="img-cover"
                    />

                    
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
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default MyBlogCard;