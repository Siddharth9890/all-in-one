import React, { useContext, useEffect, useState } from "react";
import { simplePostCall } from "../../../api/ApiServices";
import Loader from "../../../utils/Loader";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import DropZone from "../../DropZone/DropZone";
import formatBytes from "../../../utils/FormatBytes";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import JsFileDownloader from "js-file-downloader";
import { UserContext } from "../../../Context/userContext";

export default function JpgCompressor() {
  const { userData } = useContext(UserContext);
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState();
  const [quality, setQuality] = useState(80);
  const [isSelected, setIsSelected] = useState(false);
  const [loader, setLoader] = useState(false);
  const [showDownloadButton, setShowDownloadButton] = useState(false);
  const [originalDownloadImageUrl, setOriginalDownloadImageUrl] = useState("");
  const [completedGif, setCompletedGif] = useState(false);
  const [showCompressAgainButton, setShowCompressAgainButton] = useState(false);
  const [quality100, setQuality100] = useState(false);
  const [fileNameAfterCompression, setFileNameAfterCompression] = useState("");

  useEffect(() => {
    if (quality === 100) {
      setQuality100(true);
    }
    return () => {
      setQuality100(false);
    };
  }, [quality100, quality]);

  const onSubmitImage = async () => {
    setLoader(true);
    const Picture = new FormData();
    Picture.append("file", selectedFile);
    Picture.append("name", selectedFile.name);
    // to print form data use a for loop
    // for (var pair of data.entries()) {
    //   console.log(`${pair[0]}: ${pair[1]}`);
    // }
    try {
      const response = await simplePostCall(
        `https://all-in-one-images-server.herokuapp.com/api/images/png-compressor/${quality}`,
        Picture
      );
      if (response.status === 200) {
        const data = response.data;
        await simplePostCall(
          "https://all-in-one-images-server.herokuapp.com/api/images/png-compressor/",
          {
            userData,
            data,
          }
        );

        setShowDownloadButton(true);
        setFileNameAfterCompression(data.data.original_filename);
        setOriginalDownloadImageUrl(data.data.secure_url);
        setLoader(false);
        setCompletedGif(true);
        toast.success("Image ready to download !");
      } else {
        setLoader(false);
        setCompletedGif(true);
        toast.error("Something went wrong  !");
      }
    } catch (error) {
      setLoader(false);
      toast.error("Something went wrong  !");
    }
  };

  const download = async () => {
    setShowCompressAgainButton(true);

    new JsFileDownloader({
      url: originalDownloadImageUrl,
      forceDesktopMode: true,
      nameCallback: function (name) {
        return name;
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
                  <h3 className="text-center">Png Compressor</h3>
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
                  <div>Select Quality of image 80% is recommended</div>
                  <Slider
                    defaultValue={80}
                    min={10}
                    max={100}
                    step={1}
                    onChange={(value) => setQuality(value)}
                  />

                  <div>
                    {selectedFile.name +
                      "    size is after compressed will be:-"}
                    {formatBytes(
                      (parseInt(selectedFile?.size) / 100) * quality
                    )}
                  </div>
                  {!quality100 && (
                    <button
                      type="button"
                      onClick={() => onSubmitImage()}
                      className="inline-flex items-center  px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Compress Jpg Image
                    </button>
                  )}
                  {quality100 && (
                    <div>
                      Quality is 100% means same as original image so cannot
                      compress please change the quality
                    </div>
                  )}
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
                    Download Compressed Image
                  </button>
                </>
              )}

              {showCompressAgainButton && (
                <button
                  onClick={() => navigate("/image-compressor")}
                  className="inline-flex items-center  px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Compress Again ?
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
            <h3>Image being compressed...</h3>
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
