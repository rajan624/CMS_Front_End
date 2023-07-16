import React from "react";
import classes from "./Profile.module.css";
import { Avatar, Chip, useScrollTrigger } from "@mui/material";
import { useState } from "react";
function Profile() {
    const [blogArray , setBlogArray] = useState([1,2,3,4,5,6])
  return (
    <div className={classes.mainProfileDiv}>
      <div className={classes.profileDiv}>
        <div className={classes.imageNameDiv}>
          <div className={classes.imageDiv}>
            <Avatar className={classes.image} variant="rounded" />
          </div>
          <div className={classes.nameDiv}>
            <h2>Lorem ipsum</h2>
            <p>Lorem, ipsum dolor.</p>
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
                          <Avatar
                            variant="rounded"
                            className={classes.imageBlog}
                          />
                          <Chip label="Chip Filled" />
                          <Chip label="Chip Filled" />
                          <Chip label="Chip Filled" />
                          <Chip label="Chip Filled" />
                          <Chip label="Chip Filled" />
                          <Chip label="Chip Filled" />
                          <h4>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Dignissimos, nam.
                          </h4>
                        </div>
                      );
                  })}
        </div>
      </div>

      <div className={classes.messageSuggestionDiv}>
        <div className={classes.messageDiv}></div>
        <div className={classes.suggestionDiv}></div>
      </div>
    </div>
  );
}
export default Profile;
