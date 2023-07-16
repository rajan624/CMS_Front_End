import { Route, Routes } from "react-router-dom";
import Home from "../../components/Pages/Home/Home"
import { Box } from "@material-ui/core";
import SignIn from "../../components/LoginSignUpComponent/SignIn";
import SignUp from "../../components/LoginSignUpComponent/SignUp";
import PageNotFound from "../../components/PageNotFound/PageNotFound";
import TextEditor from "../../EditorComponent/TextEditor";
import HomePage from "../../components/Pages/Home/HomePage";
import Profile from "../../components/Pages/Profile/Profile";
const Router = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<HomePage />} />
          <Route path="/editor" element={<TextEditor />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Blog/:heading/:id" element={<TextEditor />} />
        </Route>
        <Route path="/login" element={<SignIn />}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Box>
  );
};

export default Router;