import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import axios from "axios";
import { toast } from "react-toastify";
import { Box, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import classes from "./AddBlogForm.module.css";
import CommanLoadingScreen from "../LoadingScreen/CommanLoadingScreen";

const AddBlogForm = () => {
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [alreadyUploadImage, setAlreadyUploadImage] = useState(true);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();
  const handleFileChange = (e) => {
  const file = e.target.files[0];
  const imageUrl = URL.createObjectURL(file);
  setImage(imageUrl);
  }
  const handelSubmit = async (data) => {
    setLoading(true);
    console.log(data)
    const formData = new FormData();
    formData.append("image", image);
    formData.append("image", data.description);
    formData.append("image", data.name);
    formData.append("image", data.tagLine);

    // Make the API request to upload the image
    await axios.post(`${process.env.REACT_APP_API_URL}/blog/createBlog`, formData)
      .then((response) => {
      // Handle the response after successful upload
        console.log(response.data);
        setLoading(false);
        toast.error(response.message);
      })
      .catch((error) => {
      setLoading(false);
      // Handle any errors during the upload
        toast.error(error.message)
        console.error(error);
      });
  };

  return (
    <>
      {loading ? (
        <CommanLoadingScreen progress={progress} />
      ) : (
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
          <label htmlFor="thumbnail-image" className={classes.container}>
            {url || image ? (
              <img className={classes.imageAddBlogForm} src={image}></img>
            ) : (
              <label className={classes.card}>
                <div className={classes.drop_box}>
                  <header>
                    <h4>Upload Thumbnail</h4>
                  </header>
                  <p>Files Supported: img , jpeg</p>
                  <button
                    type="button"
                    className={"Black-button"}
                    onClick={() => {
                      const fileInput =
                        document.getElementById("thumbnail-image");
                      fileInput.click();
                    }}
                  >
                    Choose Image
                  </button>
                </div>
              </label>
            )}
            <input
              accept="image/*"
              type="file"
              onChange={(e) => {
                console.log(e.target.files[0]);
                handleFileChange(e);
              }}
              id="thumbnail-image"
              style={{ display: "none" }}
            />
          </label>
          <Box className={classes.formBox}>
            <TextField
              variant="filled"
              color="success"
              multiline
              id="filled-textarea"
              label="Heading"
              className={classes.inputField}
              {...register("name", { required: "Heading is required" })}
              error={Boolean(errors.name)}
              helperText={errors.name && errors.name.message}
            />

            <TextField
              variant="filled"
              color="success"
              multiline
              id="filled-textarea"
              label="Description"
              placeholder=""
              className={classes.inputField}
              {...register("description", {
                required: "Description is required",
              })}
              error={Boolean(errors.description)}
              helperText={errors.description && errors.description.message}
            />

            <TextField
              variant="filled"
              color="success"
              multiline
              id="filled-textarea"
              label="Tag"
              placeholder=""
              className={classes.inputField}
              {...register("tagLine", {
                required: "Tag Line is required",
              })}
              error={Boolean(errors.tagLine)}
              helperText={errors.tagLine && errors.tagLine.message}
            />

            <Box>
              <button
                type="submit"
                loading={loading}
                className={"Black-button"}
              >
                Add
              </button>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default AddBlogForm;