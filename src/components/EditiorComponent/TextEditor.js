import React, { useCallback, useMemo, useState } from "react";
import Editor from "./SlateEditor/Editor";
import "./TextEditor.css";
import backGround from "../../images/Background/hin-KMn4VEeEPR8-unsplash.jpg";
import { Box } from "@mui/material";
const TextEditor = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${backGround})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "auto",
        }}
      >
        <div className="editMain">
          <Editor></Editor>
        </div>
      </Box>
    </>
  );
};
export default TextEditor;
