import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function ImageDragAndDrop() {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log("files : ", acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <br></br>
      <br></br>
      <h1>Hi</h1>
      <br></br>
      <div
        style={{
          border: "solid 2px grey",
          borderStyle: "dashed",
          height: "300px",
          justifyContent: "center",
          alignItems: "center",
        }}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
    </div>
  );
}

export default ImageDragAndDrop;
