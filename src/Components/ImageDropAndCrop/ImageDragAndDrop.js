import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

function ImageDragAndDrop() {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      console.log("something happened");
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
  // style={{ width: "200px" }}
  const images = files.map((file) => (
    <div key={file.name}>
      <img src={file.preview} alt="preview" />
    </div>
  ));

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>drop files here</p>

        <div>{images}</div>
      </div>
    </div>
  );
}

export default ImageDragAndDrop;

// import React, { useCallback } from "react";
// import { useDropzone } from "react-dropzone";

// function ImageDragAndDrop() {
//   const onDrop = useCallback((acceptedFiles) => {
//     // Do something with the files
//     console.log("files : ", acceptedFiles);
//   }, []);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

//   return (
//     <div>
//       <br></br>
//       <br></br>
//       <h1>Hi</h1>
//       <br></br>
//       <div
//         style={{
//           border: "solid 2px grey",
//           borderStyle: "dashed",
//           height: "300px",
//           justifyContent: "center",
//           alignItems: "center",
//           textAlign: "center",
//         }}
//         {...getRootProps()}
//       >
//         <input {...getInputProps()} />
//         {isDragActive ? (
//           <p style={{ marginTop: "150px" }}>Drop the files here ...</p>
//         ) : (
//           <p style={{ marginTop: "150px" }}>
//             Drag 'n' drop some files here, or click to select files
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ImageDragAndDrop;
