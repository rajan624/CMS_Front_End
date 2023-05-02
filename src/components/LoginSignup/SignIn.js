import React from "react";
import "./sign.css"
import GoogleLogin from "react-google-login";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../../images/Random Images/denise-jans-laoBHO09sU0-unsplash-fotor-bg-remover-20230408163752.png";
import axios from "axios";
import { toast } from "react-toastify";
import { Box, Button, Checkbox, FormControlLabel, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import SignForm from "./SignForm";
const styles = (theme) => ({
  textField: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
  },
  input: {
    color: "white",
  },
});
function SignIn({props}) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
    getValues,
  } = useForm();
  const onSubmit = async(data) => {
    // evt.preventDefault();
    console.log(data)
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/user/login`, data)
        .then(function (response) {
          toast.success("Login Successfully");
          reset({})
          console.log(response);
          localStorage.setItem("token", response.data.token);

        })
        .catch(function (error) {
          console.log(error);
          toast.error(error.response.data.msg);
        })
    } catch (error) {
      console.log(error.response.data.msg);      
    }

  
  };
  return (
    <div className="heropanel--video">
      <SignForm></SignForm>
      <div className="container1">
        {/* <div id="loginform">
          <h2 id="headerTitle">Login</h2>
          <div>
            <div class="row">
              <label>Username</label>
              <input type="text" placeholder="Enter your username" />
            </div>
            <div class="row">
              <label>Password</label>
              <TextField
                InputProps={{
                  className: styles.input,
                }}
                className={styles.textField}
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                error={!!errors?.password}
                helperText={errors?.password ? errors.password.message : null}
                type="password"
              />
            </div>
            <div id="button" class="row">
              <button>Login</button>
            </div>
          </div>
        </div>
        <div className="welcome_container">
          <h1 className="heading_secondary">
            Welcome to <span className="lg">Planner Buddy!</span>
          </h1>
          <img src={backgroundImage} alt="" />
        </div> */}
      </div>
    </div>
  );
}

export default SignIn;

{
  /* <div id="alternativeLogin">
            <label>Or sign in with:</label>
            <div id="iconGroup">
              <GoogleLogin
                clientId="539221818310-ahur6g6dnj7rhjlvivjvait810t1lh2l.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                
                className="google-login"
              />
              <a href="#" id="facebookIcon"></a>
              <a href="#" id="twitterIcon"></a>
              <a href="#" id="googleIcon"></a>
            </div>
          </div> */
}

 {
   /* <main className="signup_container">
          <h1 className="heading_primary">
            Log in<span className="span_blue">.</span>
          </h1>
          <p className="text_mute">
            Enter your credentials to access your account.
          </p>
          <div className="login_wrapper">
            <GoogleLogin
              clientId="539221818310-ahur6g6dnj7rhjlvivjvait810t1lh2l.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              style={{ display: "flex", justifyContent: "space-evenly" }}
              className="google-login"
            />
            <div className="line_breaker">
              <span className="line"></span>
              <span>or</span>
              <span className="line"></span>
            </div>
          </div>
          <Box
            sx={{ maxWidth: "45rem", width: "100%" }}
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <Stack spacing={3}>
              <Box className="input">
                <label className="text_label">Email</label>
                <TextField
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "invalid email address",
                    },
                  })}
                  error={!!errors?.email}
                  helperText={errors?.email ? errors.email.message : null}
                />
              </Box>
              <Box className="input">
                <label className="text_label">Password</label>
                <TextField
                  {...register("password", {
                    required: true,
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  error={!!errors?.password}
                  helperText={errors?.password ? errors.password.message : null}
                  type="password"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                
                <Box>
                  
                </Box>
                <Typography
                  // onClick={() => handlePasswordReset()}
                  sx={{
                    fontFamily: "Sofia Pro",
                    fontWeight: 500,
                    fontSize: { md: "20px", xs: "12px" },
                    color: "#2196f3",
                    cursor: "pointer",
                  }}
                >
                  Forgot your password?
                </Typography>
              </Box>
              <Box>
                <LoadingButton
                  // loading={loading}
                  type="submit"
                  sx={{
                    width: "100%",
                    textTransform: "none",
                    fontSize: "15px",
                    fontFamily: "",
                    backgroundColor: "#2196f3",
                    color: "#fff",
                    padding: "14px 24px",
                    borderRadius: "8px",
                    "&:hover": {
                      backgroundColor: "#2196f3",
                    },
                  }}
                >
                  Login
                </LoadingButton>

                <Typography
                  sx={{
                    fontFamily: "Sofia Pro",
                    fontSize: "20px",
                    textAlign: "center",
                    py: "15px",
                    fontWeight: 500,
                    fontSize: { md: "20px", xs: "12px" },
                    color: "#1a1a1a",
                  }}
                >
                  Don't have an account?{" "}
                  <span
                    onClick={() => navigate("/signup")}
                    style={{
                      fontWeight: 500,
                      cursor: "pointer",
                      color: "#2196f3",
                    }}
                  >
                    Signup
                  </span>
                </Typography>
              </Box>
           
            </Stack>
          </Box>

     
        </main> */
 }





















































































{
  /* <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        sx={{
                          color: "#25C02780",
                          "&.Mui-checked": {
                            color: "#25C02780",
                          },
                        }}
                      />
                    }
                  />
                  <Typography
                    sx={{
                      fontSize: {
                        md: "20px",
                        xs: "12px",
                      },
                      fontFamily: "Sofia Pro",
                      fontWeight: 500,
                      color: "#B7B7B7",
                      position: "relative",
                      left: "-20px",
                    }}
                  >
                    Remember Me
                  </Typography> */
}


   {
     /* <Box sx={{ display: "flex", alignItems: "center", gap: "" }}>
                <Box
                  sx={{
                    width: "45%",
                    height: "1px",
                    backgroundColor: "#ECEDF2",
                  }}
                ></Box>
                <Typography sx={{ width: "10%", textAlign: "center" }}>
                  or
                </Typography>
                <Box
                  sx={{
                    width: "45%",
                    height: "1px",
                    backgroundColor: "#ECEDF2",
                  }}
                ></Box>
              </Box> */
   }

   {
     /* <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: "20px",
                }}
              >
                <Button
                  sx={{
                    textTransform: "none",
                    width: { md: "50%", xs: "100%" },
                    fontSize: "14px",
                    fontFamily: "Sofia Pro",
                    backgroundColor: "#fff",
                    color: "#1967D2",
                    padding: "14px 24px",
                    borderRadius: "8px",
                    border: "1px solid #1967D2",
                    "&:hover": {
                      backgroundColor: "#fff",
                      color: "#1967D2",
                    },
                  }}
                >
                  <RegisterFacebookIcon />{" "}
                  <Typography sx={{ ml: "10px" }}>
                    Log In via Facebook
                  </Typography>
                </Button>

                <Button
                  sx={{
                    textTransform: "none",
                    width: { md: "50%", xs: "100%" },
                    fontSize: "14px",
                    fontFamily: "Sofia Pro",
                    backgroundColor: "#fff",
                    color: "#D93025",
                    padding: "14px 24px",
                    borderRadius: "8px",
                    border: "1px solid #D93025",
                    "&:hover": {
                      backgroundColor: "#fff",
                      color: "#D93025",
                    },
                  }}
                  onClick={() => googleLogin()}
                >
                  <RegisterGoogleIcon />{" "}
                  <Typography sx={{ ml: "10px" }}>
                    Log In via Google+
                  </Typography>
                </Button>
              </Box> */
   }
     {
       /* <form
            onChange={handleChange}
            onSubmit={handleOnSubmit}
            className="signup_form"
          >
            <label className="inp">
              <input type="email" name="email" className="input_text" placeholder="&nbsp;" />
              <span className="label">Email</span>
              <span className="input_icon">
                <i className="fa_solid, fa_envelope"></i>
              </span>
            </label>
            <label className="inp">
              <input
                type="password"
                name="password"
                className="input_text"
                placeholder="&nbsp;"
                id="password"
              />
              <span className="label">Password</span>
              <span className="input_icon input_icon_password" data-password>
                <i className="fa_solid fa_eye"></i>
              </span>
            </label>
            <button className="btn btn_login">Login</button>
          </form> */
     }
     {
       /* <p className="text_mute">
            Not a member ? <Link to="/signup">Sign up</Link>
          </p> */
     }