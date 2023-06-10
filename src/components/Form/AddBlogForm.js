import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import axios from "axios";
import { toast } from "react-toastify";
import { Box, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { Stack } from "react-bootstrap";
import classes from "./AddBlogForm.module.css";

const AddBlogForm = () => {
  const [image, setImage] = useState("");
  const [ProfileLogo, setProfileLogo] = useState("");
  const [loading, setLoading] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();

  const handelSubmit = (e) => {
    e.preventDefault();

    // // Request body
    // const data = JSON.stringify({
    //   firstName,
    //   lastName,
    //   email,
    //   message
    // });

    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //   },
    // };

    // axios
    //   .post("https://epo-backend.herokuapp.com/api/contact", data, config)
    //   .then((res) => {
    //     setData(res.data);
    //     console.log(res.data);
    //     setOpen(false)
    //   })
    //   .catch((err) => {
    //     toast.error(err.response.data.msg, {
    //       position: "bottom-right",
    //       hideProgressBar: false,
    //       autoClose: 5000,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //     })
    //     console.log(err.response.data.msg)});
    toast.success("Message Sumbitted");
  };

  return (
    <Box
      sx={{
        width: "100%",
        padding: "10px",
        backgroundColor: "#fff",
        borderRadius: "8px",
      }}
      component={"form"}
      noValidate
      onSubmit={handleSubmit(handelSubmit)}
    >
      <h2 className={"Heading2"}>
        Add Blog<span>Share Your thoughts</span>
      </h2>

      <Box
      // sx={{
      //   alignItems: "center",
      // }}
      >
        <div className={classes.container}>
          <div htmlFor="thumbnail-image" className={classes.card}>
            <div className={classes.drop_box}>
              <header>
                <h4>Upload Thumbnail</h4>
              </header>
              <p>Files Supported: img , jpeg</p>
              <button className={classes.btn2}>Choose Image</button>
            </div>
          </div>
              <input
                type="image"
                hidden
                accept=".img,.jpeg"
                id="thumbnail-image"
                style={{ display: "none" }}
              />
        </div>
        <Typography
          sx={{
            color: "#696969",
            fontFamily: "Sofia Pro",
            fontSize: "14px",
            mt: "30px",
          }}
        >
          Max file size is 1MB, Minimum dimension: 330x300 And Suitable files
          are .jpg & .png
        </Typography>
      </Box>

      <Stack spacing={4} sx={{ mt: "50px" }}>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Box sx={{ width: "100%" }}>
              <Typography
                sx={{
                  color: "#202124",
                  fontFamily: "Sofia Pro",
                  fontSize: "15px",
                }}
              >
                Name
              </Typography>
              <TextField
                id="outlined-basic"
                //    label="John"
                variant="outlined"
                sx={{ width: "100%", mt: "10px" }}
                {...register("name", { required: "Name is required" })}
                error={Boolean(errors.name)}
                helperText={errors.name && errors.name.message}
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ width: "100%" }}>
              <Typography
                sx={{
                  color: "#202124",
                  fontFamily: "Sofia Pro",
                  fontSize: "15px",
                }}
              >
                Occupation
              </Typography>
              <TextField
                id="outlined-basic"
                //  label="plumber"
                variant="outlined"
                sx={{ width: "100%", mt: "10px" }}
                {...register("occupation", {
                  required: "Occupation is required",
                })}
                error={Boolean(errors.occupation)}
                helperText={errors.occupation && errors.occupation.message}
              />
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box sx={{ width: "100%" }}>
              <Typography
                sx={{
                  color: "#202124",
                  fontFamily: "Sofia Pro",
                  fontSize: "15px",
                }}
              >
                Tag Line
              </Typography>
              <TextField
                id="outlined-basic"
                // label="Great quality!"
                variant="outlined"
                sx={{ width: "100%", mt: "10px" }}
                {...register("tagLine", {
                  required: "Tag Line is required",
                })}
                error={Boolean(errors.tagLine)}
                helperText={errors.tagLine && errors.tagLine.message}
              />
            </Box>
            <Box>
              <button
                type="submit"
                loading={loading}
                className={"Black-button"}
              >
                Add
              </button>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box sx={{ width: "100%" }}>
              <Typography
                sx={{
                  color: "#202124",
                  fontFamily: "Sofia Pro",
                  fontSize: "15px",
                }}
              >
                Description
              </Typography>
              <TextField
                id="outlined-basic"
                //  label="Write something about company"
                variant="outlined"
                color="success"
                multiline
                rows={5}
                sx={{
                  width: "100%",
                  mt: "10px",
                  color: "#696969",
                  fontFamily: "Sofia Pro",
                  fontSize: "15px",
                }}
                {...register("description", {
                  required: "Description is required",
                })}
                error={Boolean(errors.description)}
                helperText={errors.description && errors.description.message}
              />
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default AddBlogForm;


//  <Box>
//    <label htmlFor="contained-button-file"></label>
//  </Box>;
   {
     /* <img
            style={{ width: "70vw", height: "30vh", borderRadius: "32px" }}
            src={image ? URL.createObjectURL(image) : ProfileLogo}
            alt=""
          /> */
}
   
  {
    /* <Input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              sx={{ display: "none" }}
              onChange={(e) => {
                // handleFileChange(e.target.files[0]);
              }}
            /> */
  }
  {
    /* <button
              className={"Black-button"}
            >
              Upload Photo
            </button> */
  }