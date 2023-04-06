import Router from "../src/utilities/Router/Router"
import { useState } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box } from "@material-ui/core";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Box>
    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router />
    </Box>
  );
}

export default App;
  // <Box className={classes.pageLayout}>
    //   <Router>
    //     <ThemeProvider theme={theme}>
    //       <CssBaseline />

    //       <Header setDarkMode={setDarkMode} darkMode={darkMode} />
    //       <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/about" element={<About />} />
    //         <Route path="/gallery" element={<Gallery />} />
    //         <Route path="/blog" element={<Blog />} />
    //         <Route path="/contact" element={<Contact />} />
    //         <Route path="/donate" element={<Donate />} />
    //       </Routes>
    //       <ToastContainer />
    //       <Footer />
    //     </ThemeProvider>
    //   </Router>
    // </Box>
