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
import { LoadingButton } from "@mui/lab";

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
        padding: "30px 20px",
        backgroundColor: "#fff",
        boxShadow: "0px 20px 60px rgba(71, 119, 54, 0.15)",
        borderRadius: "8px",
      }}
      component={"form"}
      noValidate
      onSubmit={handleSubmit(handelSubmit)}
    >
      <Typography
        sx={{
          fontSize: "18px",
          fontWeight: 500,
        }}
      >
        Add Blog
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
          mt: "20px",
        }}
      >
        <Box>
          <img
            style={{ width: "87px", height: "87px", borderRadius: "50%" }}
            src={image ? URL.createObjectURL(image) : ProfileLogo}
            alt=""
          />
        </Box>
        <Box>
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              sx={{ display: "none" }}
              onChange={(e) => {
                // handleFileChange(e.target.files[0]);
              }}
            />
            <Button
              variant="contained"
              component="span"
              sx={{
                textTransform: "none",
                fontSize: "14px",
                fontFamily: "Sofia Pro",
                backgroundColor: "#25C027",
                color: "#fff",
                padding: "15px 30px",
                borderRadius: "8px",
                mt: "30px",
                "&:hover": {
                  backgroundColor: "#25C027",
                },
              }}
            >
              Upload Photo
            </Button>
          </label>

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
              <LoadingButton
                sx={{
                  width: "150px",
                  textTransform: "none",
                  fontSize: "14px",
                  fontFamily: "Sofia Pro",
                  backgroundColor: "#25C027",
                  color: "#fff",
                  padding: "15px 40px",
                  borderRadius: "8px",
                  mt: "30px",
                  "&:hover": {
                    backgroundColor: "#25C027",
                  },
                }}
                type="submit"
                loading={loading}
              >
                Add
              </LoadingButton>
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
