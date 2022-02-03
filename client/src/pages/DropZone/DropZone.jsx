import React, { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import formatBytes from "../../utils/FormatBytes";
import "./DropZone.css";

export default function DropZone({
  setIsSelected,
  setSelectedFile,
  maxFiles = 1,
  accept,
}) {
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      maxFiles,
      accept,
      maxSize: 10000000,
    });

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      setIsSelected(true);
      setSelectedFile(acceptedFiles[0]);
    }
    return () => {
      setSelectedFile(false);
    };
  }, [acceptedFiles]);

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {formatBytes(file.size)}
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => {
    return (
      <>
        <div>File might be larger than 10 mb or might be in wrong formate</div>

        <li key={file.path}>
          {file.path} - {formatBytes(file.size)} bytes
          <ul>
            {errors.map((e) => (
              <li key={e.code}>{e.message}</li>
            ))}
          </ul>
        </li>
      </>
    );
  });

  return (
    <section className="baseStyle">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
        <em>
          ( {maxFiles} files are the maximum number of files you can drop here)
        </em>
        <br />
        <em>(Only {accept} images will be accepted)</em>
      </div>
      <aside>
        <h4>Accepted files</h4>
        <ul>{acceptedFileItems}</ul>
        <h4>Rejected files</h4>
        <ul>{fileRejectionItems}</ul>
      </aside>
    </section>
  );
}
