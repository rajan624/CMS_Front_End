
import React from "react";
import Cookies from "universal-cookie";
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
function MyBlogCard({id}) {
  const cookies = new Cookies()
  const navigate = useNavigate();
  const [recentBlog, setRecentBlog] = useState([]);
  useEffect(() => {
    const fetchRecentBlog = async () => {
      try {
        const token = cookies.get("token");
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/user/myBlog/${id}` , {
            headers: { Authorization: `${token}` },
          }
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