import React from "react";
import classes from "./Profile.module.css";
import { Avatar, Box, Button, Checkbox, Chip, FormControlLabel, Grid, Link, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Badge from "@mui/material/Badge";
import { GrLocation } from "react-icons/gr";
import { GetType } from "../../../utilities/context/authContext";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import MyBlogCard from "../../Card/MyBlogCard";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius:"16px",
  boxShadow: 24,
  p: 4,
};
function Profile() {
  const [value , setValue] = useState("")
    const {
      register,
      handleSubmit,
      setError,
      formState: { errors },
      reset,
      getValues,
    } = useForm();
  const user = GetType();
  const { id } = useParams();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const [blogArray, setBlogArray] = useState([1, 2, 3, 4, 5, 6]);
  const [messageArray, setMessageArray] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  ]);
  const [suggestionArray, setSuggestionArray] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]);
   const onSubmit = async (data) => {
     console.log(process.env.REACT_APP_API_URL);
     console.log(data);
     try {
       await axios
         .post(`${process.env.REACT_APP_API_URL}/user/registerAuthor`, data)
         .then(function (response) {
           toast.success("Sign Up Successfully");
           // reset({})
           console.log(response);
           localStorage.setItem("token", response.data.token);
           navigate("/", { replace: true });
           window.location.reload();
         })
         .catch(function (error) {
           // handle error
           toast.error(error.response.data.msg);
           console.log(error.response.data.msg);
         })
         .finally(function () {
           // always executed
         });
     } catch (error) {
       toast.error(error.response.data.msg);
       console.log(error);
     }
   };
  return (
    <div className={classes.mainProfileDiv}>
      <div className={classes.profileDiv}>
        <div className={classes.imageNameDiv}>
          <div className={classes.imageDiv}>
            <Avatar
              className={classes.image}
              alt={user?.name}
              src={user?.profileImage}
              variant="rounded"
            />
          </div>
          <div className={classes.nameDiv}>
            <h2>{user?.name}</h2>
            <p>
              {" "}
              <GrLocation /> Lorem, ipsum dolor.
            </p>
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
            <button
              onClick={() => {
                handleOpen();
              }}
              className="Black-button"
            >
              Edit Profile
            </button>
          </div>
        </div>
        <div className={classes.storyDiv}><MyBlogCard/></div>
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
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              mt: 1,
              fontSize: "1.5rem",
            }}
          >
            <Avatar
              sx={{
                width: "100px",
                height: "100px",
                m: "auto",
                bgcolor: "secondary.main",
              }}
            ></Avatar>
            <TextField
              margin="normal"
              fullWidth
              sx={{
                fontSize: "1.5rem",
                mt: 1,
              }}
              id="name"
              label="Name"
              type="text"
              name="name"
              autoComplete="name"
              {...register("name", {
                required: true,
              })}
              error={!!errors?.name}
              helperText={errors?.name ? errors.name.message : null}
              autoFocus
              InputLabelProps={{
                sx: { fontSize: "1.5rem" },
              }}
            />
            <TextField
              margin="normal"
              fullWidth
              sx={{
                fontSize: "1.5rem",
                mt: 1,
              }}
              id="phone"
              label="Phone No"
              {...register("phone", {
                maxLength: 12,
                minLength: 10,
              })}
              error={!!errors?.phone}
              helperText={errors?.phone ? errors.phone.message : null}
              name="phone"
              type="tel"
              autoComplete="phone"
              autoFocus
              InputLabelProps={{
                sx: { fontSize: "1.5rem" },
              }}
            />
            <TextField
              margin="normal"
              fullWidth
              sx={{
                fontSize: "1.5rem",
                mt: 1,
              }}
              id="Tags"
              label="Tags"
              {...register("tags", {
                maxLength: 12,
                minLength: 10,
              })}
              error={!!errors?.tags}
              helperText={errors?.tags ? errors.tags.message : null}
              name="tags"
              type="text"
              autoComplete="tags"
              autoFocus
              InputLabelProps={{
                sx: { fontSize: "1.5rem" },
              }}
            />
            <TextField
              margin="normal"
              multiline
              rows="5"
              fullWidth
              sx={{
                fontSize: "1.5rem",
                mt: 1,
              }}
              id="description"
              label="Description"
              {...register("phone", {})}
              error={!!errors?.description}
              helperText={
                errors?.description ? errors.description.message : null
              }
              name="description"
              type="text"
              autoComplete="description"
              autoFocus
              InputLabelProps={{
                sx: { fontSize: "1.5rem" },
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  {...register("emailNotification")}
                  value={true}
                  color="primary"
                />
              }
              label={
                <Typography sx={{ fontSize: "1.5rem" }}>
                  I want to receive inspiration, marketing promotions and
                  updates via email.
                </Typography>
              }
              sx={{
                mt: 2,
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, fontSize: "1.5rem" }}
            >
              Update
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
export default Profile;
