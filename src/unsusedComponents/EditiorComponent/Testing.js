import React, { useState } from "react";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";


const Testing = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleEditorChange = (state) => {
    setEditorState(state);
  };

  const handleImageUpload = (file) => {
    // Handle image upload logic here
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
        console.log(text)
    };

  return (
      <div>
          <button onClick={() => {
              handleSave();}}>dsadAS</button>
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

export default Testing;
