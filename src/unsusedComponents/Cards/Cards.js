import { Box, Typography } from "@mui/material";
import { CongratulationsIcon, JobVacanciesIcon } from "../../utilities/Icons/Icons";
import TrustedUserImage from "../images/svg images/TrustedUserImg.svg";

export const CongratulationsCards = () => {
  return (
    <Box
      sx={{
        width: { xs: "80px", md: "140px" },
        backgroundColor: "#fff",
        padding: "15px",
        borderRadius: "15px",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            width: "70px",
            height: "70px",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#1967D2",
          }}
        >
          <CongratulationsIcon />
        </Box>
      </Box>
      <Box sx={{ textAlign: "center", mt: "10px" }}>
        <Typography
          sx={{
            color: "#1967D2",
            fontSize: { xs: "8px", md: "12px" },
            fontWeight: 700,
          }}
        >
          Send offers!
        </Typography>
        <Typography
          sx={{
            color: "#565656",
            fontSize: { xs: "6px", md: "10px" },
            mt: "5px",
          }}
        >
          Extend, accept, or reject job offers
        </Typography>
      </Box>
    </Box>
  );
};
export const TrustedUserCards = () => {
  return (
    <Box
      sx={{
        width: { xs: "110px", md: "150px" },
        backgroundColor: "#fff",
        padding: "15px",
        borderRadius: "15px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "40px", height: "60px" }}>
          <img
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            src={TrustedUserImage}
            alt=""
          />
        </Box>
      </Box>
      <Box sx={{ textAlign: "center", mt: "12px" }}>
        <Typography
          sx={{
            color: "#030303",
            fontSize: { xs: "8px", md: "12px" },
            fontWeight: 700,
          }}
        >
          Trusted by top industrial companies
        </Typography>
      </Box>
    </Box>
  );
};
export const JobVacanciesCards = () => {
  return (
    <Box
      sx={{
        width: { xs: "80px", md: "140px" },
        backgroundColor: "#fff",
        padding: "15px",
        borderRadius: "15px",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            width: "70px",
            height: "70px",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#1967D2",
          }}
        >
          <JobVacanciesIcon />
        </Box>
      </Box>
      <Box sx={{ textAlign: "center", mt: "12px" }}>
        <Typography
          sx={{
            color: "#000",
            fontSize: { xs: "8px", md: "12px" },
            fontWeight: 700,
          }}
        >
          Find top manufacturing and industrial candidates
        </Typography>
      </Box>
    </Box>
  );
};
