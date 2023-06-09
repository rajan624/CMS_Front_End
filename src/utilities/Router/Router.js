import { Route, Routes } from "react-router-dom";
import Home from "../../components/Pages/Home/Home"
import { Box } from "@material-ui/core";
import SignIn from "../../components/LoginSignUpComponent/SignIn";
import SignUp from "../../components/LoginSignUpComponent/SignUp";
import PageNotFound from "../../components/PageNotFound/PageNotFound";
import TextEditor from "../../EditorComponent/TextEditor";
const Router = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Editor" element={<TextEditor />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Box>
  );
};

export default Router;