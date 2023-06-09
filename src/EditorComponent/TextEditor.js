import React, { useState } from "react";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

const TextEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleEditorChange = (state) => {
    setEditorState(state);
  };

  const handleImageUpload = (file) => {
    // Handle image upload logic here
      return new Promise((resolve, reject) => {
        // Perform the image upload logic here
        // Once the upload is complete, resolve the promise with the image URL
        const imageUrl = "https://example.com/image.jpg";
        resolve({ data: { link: imageUrl } });

        // If there's an error during the upload, reject the promise
        // reject(new Error("Image upload failed"));
      });
    console.log("Uploaded image:", file);
  };

  const handleSave = () => {
    //   const rawContentState = convertToRaw(editorState.getCurrentContent());
    //   const contentState = ContentState.createFromBlockArray(
    //     rawContentState.blocks
    //   );
    //   const html = contentState.toHTML();

    //   // Perform further operations with the HTML output
    //   console.log("Editor content (HTML):", html);
    const { blocks } = convertToRaw(editorState.getCurrentContent());
    /*let text = blocks.reduce((acc, item) => {
      acc = acc + item.text;
      return acc;
    }, "");*/
    let text = editorState.getCurrentContent().getPlainText("\u0001");
    //  text = editorState.getCurrentContent().toHtml();
    text = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    console.log(text);
  };

  return (
    <div>
      {/* <button
        onClick={() => {
          handleSave();
        }}
      >
        dsadAS
      </button> */}
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        toolbar={{
          image: {
            uploadCallback: handleImageUpload,
            alt: { present: true, mandatory: true },
          },
        }}
        toolbarClassName="editor-toolbar"
        wrapperClassName="editor-wrapper"
        editorClassName="editor-content"
      />
    </div>
  );
};

export default TextEditor;
