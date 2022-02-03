import React, { useState } from "react";
import { simplePostCall } from "../../../api/ApiServices";
import Loader from "../../../utils/Loader";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import DropZone from "../../DropZone/DropZone";
import "rc-slider/assets/index.css";
import JsFileDownloader from "js-file-downloader";

export default function JpgCompressor() {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [loader, setLoader] = useState(false);
  const [showDownloadButton, setShowDownloadButton] = useState(false);
  const [originalDownloadImageUrl, setOriginalDownloadImageUrl] = useState("");
  const [completedGif, setCompletedGif] = useState(false);
  const [showCompressAgainButton, setShowCompressAgainButton] = useState(false);
  const [fileNameAfterCompression, setFileNameAfterCompression] = useState("");

  const onSubmitImage = async () => {
    setLoader(true);
    const Picture = new FormData();
    Picture.append("file", selectedFile);
    Picture.append("name", selectedFile.name);

    try {
      const { data } = await simplePostCall(
        "http://localhost:5000/api/images/png-to-jpg/convert",
        Picture
      );
      // await simplePostCall("http://localhost:5000/api/images/jpg-compressor/", {
      //   userData,
      //   data,
      // });

      setShowDownloadButton(true);
      setFileNameAfterCompression(data.data.original_filename);
      setOriginalDownloadImageUrl(data.data.secure_url);
      setLoader(false);
      setCompletedGif(true);

      toast.success("Image ready to download !");
    } catch (error) {
      console.log("Error: ", error);
      setLoader(false);
    }
  };

  const download = async () => {
    setShowCompressAgainButton(true);

    new JsFileDownloader({
      url: originalDownloadImageUrl,
      forceDesktopMode: true,
      nameCallback: function (name) {
        return fileNameAfterCompression;
      },
      timeout: 30000,
    });
  };

  return (
    <>
      {!loader ? (
        <>
          <div className="max-w-7xl mx-auto px-4 py-8 my-4 sm:px-6  lg:px-8">
            <div className="max-w-3xl  mx-auto">
              {!showDownloadButton && (
                <>
                  <h3 className="text-center">Png Converter</h3>
                  <DropZone
                    maxFiles={1}
                    accept={"image/png"}
                    setIsSelected={setIsSelected}
                    setSelectedFile={setSelectedFile}
                  />
                </>
              )}

              {isSelected && !showDownloadButton ? (
                <>
                  <div>{selectedFile.name}</div>
                  <button
                    type="button"
                    onClick={() => onSubmitImage()}
                    className="inline-flex items-center  px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Convert Jpg Image
                  </button>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 py-8 my-4 sm:px-6  lg:px-8">
            <div className="max-w-3xl  mx-auto">
              {showDownloadButton && (
                <>
                  <div>{selectedFile.name}</div>
                  <button
                    className="inline-flex items-center  px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => download()}
                  >
                    Download Converted Image
                  </button>
                </>
              )}

              {showCompressAgainButton && (
                <button
                  onClick={() => navigate("/image-converter")}
                  className="inline-flex items-center  px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Convert Again ?
                </button>
              )}
            </div>
          </div>
          {completedGif && (
            <div className="max-w-7xl mx-auto px-4 py-8 my-4 sm:px-6  lg:px-8">
              <div className="max-w-3xl  mx-auto">
                <img
                  alt="completed gif"
                  src={require("../../../assets/gifs/completed.gif")}
                  style={{ height: "60%", width: "50%", position: "relative" }}
                />
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="max-w-7xl mx-auto px-4 py-8 my-4 sm:px-6  lg:px-8">
          <div className="max-w-3xl  mx-auto">
            <Loader />
            <h3>Image being converting...</h3>
            <img
              alt="processing gif"
              style={{ height: "50%", width: "50%" }}
              src={require("../../../assets/gifs/image-processing.gif")}
            />
          </div>
        </div>
      )}
    </>
  );
}
