import React, { useEffect, useState } from "react";
import classes from "./ViewBlog.module.css";
import { Avatar } from "@mui/material";
import {SlLike} from "react-icons/sl"
import { AiOutlineComment } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { FiShare } from "react-icons/fi";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GetType } from "../../../utilities/context/authContext";
function ViewBlog() {
  const user = GetType();
  const { userId, blogId } = useParams();
   const [htmlContent, setHtmlContent] = useState("");
  const [blog, setBlog] = useState({});
   useEffect(() => {
     const fetchUserProfile = async () => {
       try {
         const response = await axios.get(
           `${process.env.REACT_APP_API_URL}/blog/${blogId}`
         );
         console.log(response.data);
         setBlog(response.data.data);
         setHtmlContent(response.data.data.htmlData);
       } catch (error) {
         console.log(error);
       }
     };

     fetchUserProfile();
   }, []);
  return (
    <div className={classes.mainDiv}>
      <div className={classes.blogHeadingDiv}>
        <h1 className={classes.blogHeading}>{blog.heading}</h1>
        <p className={classes.blogDescription}>{blog.description}</p>
      </div>
      <div className={classes.writerProfileDiv}>
        <Avatar src={blog?.createdBy?.profileImage} />
        <div className={classes.writerNameTimeDiv}>
          <div className={classes.writerNameFollowDiv}>
            <h4>{blog?.createdBy?.name}</h4>
            {user._id == userId ?<></> :<a href="">Follow</a>}
          </div>
          <div className={classes.writerTimeDiv}>
            <p>4 min read</p>
            <p>3 min read</p>
          </div>
        </div>
      </div>
      <div className={classes.likeShareDiv}>
        <div className={classes.likeDiv}>
          <SlLike />
          <AiOutlineComment />
        </div>
        <div className={classes.shareDiv}>
          <BsBookmark />
          <FiShare />
        </div>
      </div>
      <div>
        <Avatar
          variant="rounded"
          src={blog.imageUrl}
          className={classes.image}
        />
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        className={classes.blogContent}
      ></div>
      <div className={classes.likeShareDiv}>
        <div className={classes.likeDiv}>
          <SlLike />
          <AiOutlineComment />
        </div>
        <div className={classes.shareDiv}>
          <BsBookmark />
          <FiShare />
        </div>
      </div>
      <div className={classes.writerRecomandedBlog}></div>
      <div className={classes.userRecomandedBlog}></div>
    </div>
  );
}

export default ViewBlog;
