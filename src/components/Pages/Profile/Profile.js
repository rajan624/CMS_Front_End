import React from "react";
import classes from "./Profile.module.css";
import { Avatar, Chip, useScrollTrigger } from "@mui/material";
import { useState } from "react";
import Badge from "@mui/material/Badge";
import { GrLocation } from "react-icons/gr";

function Profile() {
  const [blogArray, setBlogArray] = useState([1, 2, 3, 4, 5, 6]);
  const [messageArray, setMessageArray] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  ]);
  const [suggestionArray, setSuggestionArray] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]);
  return (
    <div className={classes.mainProfileDiv}>
      <div className={classes.profileDiv}>
        <div className={classes.imageNameDiv}>
          <div className={classes.imageDiv}>
            <Avatar className={classes.image} variant="rounded" />
          </div>
          <div className={classes.nameDiv}>
            <h2>Lorem ipsum</h2>
            <p> <GrLocation/> Lorem, ipsum dolor.</p>
            <h4>Lorem ipsum dolor sit.</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum in, sapiente dicta vero voluptatem incidunt quis quam
              suscipit animi ullam?
            </p>
            <div className={classes.followLikeDiv}>
              <div>
                {" "}
                <p>Post</p>
                <p>24</p>{" "}
              </div>
              <div>
                <p>Follower</p>
                <p>1 222</p>
              </div>
              <div>
                <p>Following</p>
                <p>63</p>
              </div>
            </div>
            <button className="Black-button">Lorem, ipsum.</button>
          </div>
        </div>
        <div className={classes.storyDiv}>
          {blogArray.map((data, index) => {
            return (
              <div className={classes.cardDiv}>
                <Avatar variant="rounded" className={classes.imageBlog} />
                <Chip label="Chip Filled" />
                <Chip label="Chip Filled" />
                <Chip label="Chip Filled" />
                <Chip label="Chip Filled" />
                <Chip label="Chip Filled" />
                <Chip label="Chip Filled" />
                <h4>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos, nam.
                </h4>
              </div>
            );
          })}
        </div>
      </div>

      <div className={classes.messageSuggestionDiv}>
        <div className={classes.messageDiv}>
          <h2>Messages</h2>
          <div className={classes.messagesGroup}>
            {messageArray.map((data, index) => {
              return (
                <div className={classes.messages}>
                  <Avatar />
                  <div className={classes.messagesName}>
                    {" "}
                    <h4>Lorem, ipsum.</h4> <p>Lorem ipsum dolor sit amet.</p>{" "}
                  </div>
                  <Badge badgeContent={4} color="success"></Badge>
                </div>
              );
            })}
          </div>
        </div>
        <div className={classes.suggestionDiv}>
          <h2>Suggestion</h2>
          <div className={classes.suggestionGroup}>
            {suggestionArray.map((data, index) => {
              return (
                <div className={classes.suggestion}>
                  <Avatar />
                  <h5>Lorem, ipsum.</h5>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
