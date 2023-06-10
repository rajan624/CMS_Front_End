import { Autocomplete, Box, Button, Container, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { searchDataDump } from "../../firebase/functions";
import classes from "../../pages/JobSearchPage/JobSearchPage.module.css";
import { LocationIcon, SearchIcon } from "../../utilities/Icons/Icons";
import "./FormComponent.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
const JobLoaction = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // useEffect(() => {
  //   "JOB SERCH LOSAAAAADED";
  //   searchDataDump().then(({ data }) => {
  //     setSearch(data);
  //   });
  // }, []);
  const onSubmit = (data) => {
    navigate(`/job-search/?query=${data.search}`);
  };
  return (
    <Container component="form" onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          backgroundColor: "#fff",
          padding: "10px",
          borderRadius: "8px",
          boxShadow: "0px 5px 20px rgba(71, 119, 54, 0.15)",
          position: "relative",
          top: "-30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            className={classes.input}
            sx={{
              width: "100%",
              borderRight: "1px solid #ECEDF2",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <SearchIcon />
            <TextField
              {...register("search")}
              fullWidth
              placeholder="Search by job title or keyword"
              variant="standard"
            />
            {/* <SearchBox
              defaultRefinement=""
              translations={{
                placeholder: "Search by Job Title or Skills",
              }}
              searchAsYouType={false}
            /> */}
            {/* <input
            type="text"
            placeholder="Job title, keywords, or company"
          /> */}
          </Box>
          {/* <Box
          className={classes.input}
          sx={{
            width: "100%",
            borderRight: "1px solid #ECEDF2",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <LocationIcon />
          <input type="text" placeholder="City or postcode" />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Box
            className={classes.input}
            sx={{
              width: "100%",
              padding: "20px",
            }}
          >
            <Box
              className="styled-select"
              sx={{ display: "flex", alignItems: "center", gap: "15px" }}
            >
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.2 3.36842H13.5V1.68421C13.5 0.755368 12.6927 0 11.7 0H6.3C5.3073 0 4.5 0.755368 4.5 1.68421V3.36842H1.8C0.8073 3.36842 0 4.12379 0 5.05263V8.42105H4.5V6.73684H6.3V8.42105H11.7V6.73684H13.5V8.42105H18V5.05263C18 4.12379 17.1927 3.36842 16.2 3.36842ZM6.3 1.68421H11.7V3.36842H6.3V1.68421ZM13.5 10.9474H11.7V9.26316H6.3V10.9474H4.5V9.26316H0V14.3158C0 15.2446 0.8073 16 1.8 16H16.2C17.1927 16 18 15.2446 18 14.3158V9.26316H13.5V10.9474Z"
                  fill="#0A7ABF"
                />
              </svg>

              <select>
                <option selected disabled value="job-location">
                  categories
                </option>
                <option value="">Bangladesh</option>
                <option value="">India</option>
                <option value="">Pakistan</option>
                <option value="">Nepal</option>
                <option value="">China</option>
              </select>
            </Box>
          </Box>
        </Box> */}
          <Box>
            <Button
              type="submit"
              sx={{
                textTransform: "none",
                width: "150px",
                fontSize: "18px",
                fontFamily: "",
                backgroundColor: "#1967D2",
                color: "#fff",
                padding: "14px 24px",
                borderRadius: "8px",
                "&:hover": {
                  backgroundColor: "#1967D2",
                },
              }}
            >
              Find Jobs
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default JobLoaction;
