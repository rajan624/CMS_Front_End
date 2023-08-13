import React from 'react'
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
import classes1 from "./CardComman.module.css";
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReceiptSharp } from '@material-ui/icons';
const CustomHeightstyles550 = {
  "--height": "660px",
  "--width": "550px",
};
const CustomHeightstyles100 = {
  "--height": "100px",
  "--width": "100px",
};
function RecentCard( {  setLoading}) {
  const navigate = useNavigate();
  const [offset, setOffset] = useState(1);
  const [showLoadMoreButton, setShowLoadMoreButton] = useState(true);
   const [recentBlog, setRecentBlog] = useState([]);
   useEffect(() => {
     const fetchRecentBlog = async () => {
       try {
         const response = await axios.get(
           `${process.env.REACT_APP_API_URL}/blog/bestAuthorStories?offset=${offset}`
         );
         setLoading(false);
         if (response.data.data.length==0) {
           setShowLoadMoreButton(false)
         }
         setRecentBlog( [...recentBlog,...response.data.data]);
       } catch (error) {
         console.log(error);
       }
     };

     fetchRecentBlog();
   }, [offset]);
  return (
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
          {recentBlog.map((blog, index) => {
            return (
              <li
                className={classes1.boxShadow}
                onClick={() => {
                  navigate(`/${blog.createdBy._id}/${blog._id}`);
                }}
                key={index}
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
        {showLoadMoreButton ?
          <button onClick={() => { setOffset(offset => offset + 12); setLoading(true); }} class="btn">Load more</button>
          : <></>}
        </div>
    </section>
  );
}

export default RecentCard