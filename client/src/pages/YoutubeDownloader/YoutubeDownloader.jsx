import { useContext, useState } from "react";
import { toast } from "react-toastify";

import { UserContext } from "../../Context/userContext";

import { simplePostCall } from "../../api/ApiServices";
import SimpleList from "./SimpleList";
import JsFileDownloader from "js-file-downloader";
import OvalLoader from "../../utils/Loader";

export default function YoutubeDownloader() {
  const { userData } = useContext(UserContext);
  const [youtubeLink, setYoutubeLink] = useState("");
  const [loader, setLoader] = useState(false);
  const [disableLinkButton, setDisableLinkButton] = useState(false);
  const [disableDownloadButton, setDisableDownloadButton] = useState(false);
  const [validResponse, setValidResponse] = useState(false);
  const [valueSelected, setValueSelected] = useState("");
  const [VideoTitle, setSetVideoTitle] = useState("");
  const [formats, setFormats] = useState([]);
  const [OwnerChannelName, setOwnerChannelName] = useState("");

  const checkForValidYoutubeVideo = async (e) => {
    e.preventDefault();
    setLoader(true);
    setDisableLinkButton(true);
    setValidResponse(false);
    if (youtubeLink === "") {
      toast.error("Link cannot be empty");
    } else if (!youtubeLink.includes("https://www.youtube.com/")) {
      toast.error("Please enter a youtube link only.");
    } else if (
      youtubeLink.substring("https://www.youtube.com/watch?v=".length)
        .length === 0
    ) {
      toast.error("Invalid youtube link please check your link once again");
    } else {
      const id = youtubeLink.substring(
        "https://www.youtube.com/watch?v=".length
      );
      const response = await simplePostCall(
        `https://all-in-one-youtube-downloader.herokuapp.com/api/youtube-downloader/validate-link/${id}`,
        userData
      );
      if (response.data === false) {
        toast.error("Invalid youtube link please check your link once again");
      } else {
        setSetVideoTitle(response.data.title);
        setFormats(response.data.format);
        setOwnerChannelName(response.data.ownerChannelName);
        setValidResponse(true);
      }
    }
    setLoader(false);
    setDisableLinkButton(false);
  };

  const downloadVideo = async () => {
    setDisableDownloadButton(true);
    await simplePostCall(
      `https://all-in-one-youtube-downloader.herokuapp.com/api/youtube-downloader/download-video/${youtubeLink.substring(
        "https://www.youtube.com/watch?v=".length
      )}/1`,
      userData
    );
    new JsFileDownloader({
      url: `https://all-in-one-youtube-downloader.herokuapp.com/api/youtube-downloader/download-video/${youtubeLink.substring(
        "https://www.youtube.com/watch?v=".length
      )}/${valueSelected}`,
      method: "POST",
      forceDesktopMode: true,
      nameCallback: function (name) {
        return VideoTitle;
      },
      timeout: 300000,
    })
      .then(function () {
        setDisableDownloadButton(false);
        toast.info("Done downloading please check your downloads folder");
      })
      .catch(function (error) {
        setDisableDownloadButton(false);
        toast.error(
          "Something went wrong please wait for sometime and retry or call the support"
        );
      });
  };
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="relative sm:py-16">
        <div aria-hidden="true" className="hidden sm:block">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" />
          <svg
            className="absolute top-8 left-1/2 -ml-3"
            width={404}
            height={392}
            fill="none"
            viewBox="0 0 404 392"
          >
            <defs>
              <pattern
                id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={392}
              fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
            />
          </svg>
        </div>
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative rounded-2xl px-6 py-10 bg-indigo-600 overflow-hidden shadow-xl sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
            >
              <svg
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1463 360"
              >
                <path
                  className="text-indigo-500 text-opacity-40"
                  fill="currentColor"
                  d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                />
                <path
                  className="text-indigo-700 text-opacity-40"
                  fill="currentColor"
                  d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                />
              </svg>
            </div>
            <div className="relative">
              <div className="sm:text-center">
                <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                  Paste your youtube link here
                </h2>
                <p className="mt-6 mx-auto max-w-2xl text-lg text-indigo-200">
                  After entering link we will give you options to choose
                  download video or only mp3 file
                </p>
              </div>
              <form
                onSubmit={(e) => checkForValidYoutubeVideo(e)}
                className="mt-12 sm:mx-auto sm:max-w-lg sm:flex"
              >
                <div className="min-w-0 flex-1">
                  <label htmlFor="cta-email" className="sr-only">
                    video link
                  </label>
                  <input
                    value={youtubeLink}
                    onChange={(e) => setYoutubeLink(e.target.value)}
                    id="url"
                    type="url"
                    className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                    placeholder="www.youtube.com/"
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3">
                  <button
                    type="submit"
                    disabled={disableLinkButton}
                    className="block w-full rounded-md border border-transparent px-5 py-3 bg-indigo-500 text-base font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10"
                  >
                    Click to download
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {loader && <OvalLoader />}

      {validResponse && (
        <>
          <div className="relative mt-8">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-300" />
            </div>
          </div>
          <header className="py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-white">Video details</h1>
              <h1 className="text-3xl font-bold text-white">
                Video title:-{VideoTitle}
              </h1>
              <h1 className="text-3xl font-bold text-white">
                Channel name:-{OwnerChannelName}
              </h1>
            </div>
          </header>
          <main className="-mt-8">
            <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
                <div className="h-98 border-4 border-dashed border-gray-200 rounded-lg">
                  <div className="grid grid-cols-2 divide-x">
                    <div className="flex justify-center py-14">
                      <SimpleList
                        setValueSelected={setValueSelected}
                        formats={formats}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {valueSelected && !disableDownloadButton && (
                <button
                  type="button"
                  disabled={disableDownloadButton}
                  onClick={() => downloadVideo()}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Download
                </button>
              )}
              {disableDownloadButton && (
                <div>
                  Downloaded has started please wait do not refresh this page
                  otherwise progress will be lost. Videos typically takes more
                  time to be processed by the server than photos so please wait
                </div>
              )}
            </div>
          </main>
        </>
      )}
    </div>
  );
}
