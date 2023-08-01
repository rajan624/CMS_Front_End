import React, { useEffect, useState } from "react";
import classes from "./ViewBlog.module.css";
import { Avatar, Badge } from "@mui/material";
import { SlLike } from "react-icons/sl";
import { AiOutlineComment, AiFillLike } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { FiShare } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { GetType } from "../../../utilities/context/authContext";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";
function ViewBlog() {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const user = GetType();
  const [filled, setFilled] = useState(false);
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

  const likeBlog = async () => {
   const token = cookies.get("token");
      console.log(token)
      if (!token) {
        return;
      }
      console.log("testing we are token is not working")
      try {
      await axios.get(
          `${process.env.REACT_APP_API_URL}/user/likeMyBlog/${blogId}`,
          {
            headers: { Authorization: `${token}` },
          }
      ).then((data) => {
        toast.success(data.data.data);
        setBlog({...blog , like:blog.like+1  })
      }).catch((error) => {
          toast.error("Something went Wrong")
        })
        setFilled(true);
      } catch (error) {
        console.log(error);
      }
  }
  
  const bookmarkBlog = async () => {
   const token = cookies.get("token");
      console.log(token)
      if (!token) {
        return;
      }
      console.log("testing we are token is not working")
      try {
      await axios
        .get(
          `${process.env.REACT_APP_API_URL}/user/bookmarkMyBlog/${blogId}`,
          {
            headers: { Authorization: `${token}` },
          }
        )
        .then((data) => {
          toast.success(data.data.data);
          setBlog({ ...blog, like: blog.like + 1 });
        })
        .catch((error) => {
          toast.error("Something went Wrong");
        });
        setFilled(true);
      } catch (error) {
        console.log(error);
      }
  }
  
  const follow = async() => {
    const token = cookies.get("token");
      console.log(token)
      if (!token) {
        return;
      }
      try {
        await axios.get(
          `${process.env.REACT_APP_API_URL}/user/followUser/${userId}`,
          {
            headers: { Authorization: `${token}` },
          }
        ).then((data) => {
          console.log("🚀 ~ file: ViewBlog.js:75 ~ ).then ~ data:", data)
          toast.success(data.data.data);
          setFilled(true);
        }).catch((error) => {
          toast.error("Something went Wrong")
        })
      } catch (error) {
        console.log(error);
      }
  
  }
  return (
    <div className={classes.mainDiv}>
      <div className={classes.blogHeadingDiv}>
        <h1 className={classes.blogHeading}>{blog.heading}</h1>
        <p className={classes.blogDescription}>{blog.description}</p>
      </div>
      <div className={classes.writerProfileDiv}>
        <Avatar
          sx={{ cursor: "pointer" }}
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/profile/${blog.createdBy._id}`);
          }}
          src={blog?.createdBy?.profileImage}
        />
        <div className={classes.writerNameTimeDiv}>
          <div className={classes.writerNameFollowDiv}>
            <h4
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/profile/${blog.createdBy._id}`);
              }}
            >
              {blog?.createdBy?.name}
            </h4>
            {user._id != userId ? (
              <></>
            ) : (
              <button onClick={follow}>Follow</button>
            )}
          </div>
          {/* <div className={classes.writerTimeDiv}>
            <p>4 min read</p>
            <p>3 min read</p>
          </div> */}
        </div>
      </div>
      <div className={classes.likeShareDiv}>
        <div className={classes.likeDiv}>
          <Badge badgeContent={blog?.like} color="primary">
            <svg
              onClick={likeBlog}
              className={filled ? classes.filled : classes.unfilled}
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Like</title>
              <path
                d="M12 21.35l-1.45-1.32C5.4 16.36 2 13.25 2 9.5 2 7.42 3.29 5.53 5.34 4.58c1.95-.91 4.17-.58 6 .75 1.83-1.33 4.05-1.66 6-.75 2.05.95 3.34 2.84 3.34 5.01 0 3.75-3.4 6.86-8.55 10.54L12 21.35z"
                stroke="black" // Set the border color to black
                strokeWidth="2" // Set the border width
                fill={filled ? "black" : "transparent"} // Set the fill color to black if filled, otherwise transparent
              />
            </svg>
          </Badge>
          {/* 
          <AiOutlineComment size={30} /> */}
        </div>{" "}
        <div className={classes.shareDiv}>
          <svg
            onClick={bookmarkBlog}
            title="bookmark"
            className={false ? "filled" : "unfilled"} // Add the class based on the filled state
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Add To Bookmark</title> {/* Tooltip */}
            <path
              d="M4 2C3.44771 2 3 2.44772 3 3V21L12 18L21 21V3C21 2.44772 20.5523 2 20 2H4Z"
              stroke="black" // Set the border color to black
              strokeWidth="2" // Set the border width
              fill={false ? "black" : "transparent"} // Set the fill color to black if filled, otherwise transparent
            />
          </svg>
          <FiShare onClick={() => { navigator.share({
      url: window.location.url })}} size={30} />
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
      {/* <div className={classes.likeShareDiv}>
        <div className={classes.likeDiv}>
          <SlLike />
          <AiOutlineComment />
        </div>
        <div className={classes.shareDiv}>
          <BsBookmark />
          <FiShare />
        </div>
      </div> */}
      <div className={classes.writerRecomandedBlog}></div>
      <div className={classes.userRecomandedBlog}></div>
    </div>
  );
}

export default ViewBlog;
