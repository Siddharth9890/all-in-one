import React, { Suspense, useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import parser from "ua-parser-js";
import { simplePostCall } from "./api/ApiServices";
import axios from "axios";
import loadable from "@loadable/component";

import Footer from "./pages/Footer/Footer.jsx";
import Navbar from "./pages/Navbar/Navbar.jsx";

import "react-toastify/dist/ReactToastify.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { UserContext } from "./Context/userContext";
import OvalLoader from "./utils/Loader";

const Home = loadable(() => import("./pages/Home/Home"));
const FAQ = loadable(() => import("./pages/FAQ/FAQ"));

const Page404 = loadable(() => import("./pages/404/Page404.jsx"));

const ImageCompressor = loadable(() =>
  import("./pages/ImageCompressorServices/ImageCompressor")
);

const JpgCompressor = loadable(() =>
  import("./pages/ImageCompressorServices/JpgCompressor/JpgCompressor")
);
const PngCompressor = loadable(() =>
  import("./pages/ImageCompressorServices/PngCompressor/PngCompressor")
);

const AdvanceCalculator = loadable(() =>
  import("./pages/AdvanceCalculator/AdvanceCalculator")
);
const YoutubeDownloader = loadable(() =>
  import("./pages/YoutubeDownloader/YoutubeDownloader")
);
const AboutUs = loadable(() => import("./pages/AboutUs/AboutUs"));
const FeaturesComing = loadable(() => import("./pages/FeaturesComing"));

const App = () => {
  const { visitedContext } = useContext(UserContext);

  const getIp = async () => {
    let { data } = await axios.get("https://geolocation-db.com/json/");
    const parse = new parser();
    const userData = parse.getUA();
    data = { ...data, userData };
    visitedContext(data);
    await simplePostCall("http://localhost:5000/api/visited-data", data);
  };

  useEffect(() => {
    getIp();
    return () => {
      visitedContext(null);
    };
  }, []);
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Suspense fallback={<OvalLoader />}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/image-compressor" element={<ImageCompressor />} />
          {/* <Route path="/image-converter" element={<ImageConverter />} /> */}

          {/* routes for image compressor */}
          <Route
            path="/image-compressor/jpg-compressor"
            element={<JpgCompressor />}
          />
          <Route
            path="/image-compressor/png-compressor"
            element={<PngCompressor />}
          />
          {/* routes for image converter */}
          {/* <Route
          path="/image-converter/png-to-jpg-converter"
          element={<PngConverter />}
        />
        <Route
          path="/image-converter/jpg-to-png-converter"
          element={<JpgConverter />}
        /> */}

          <Route path="/advance-calculator" element={<AdvanceCalculator />} />
          <Route path="/youtube-downloader" element={<YoutubeDownloader />} />

          <Route path="/faq" element={<FAQ />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/upcoming-features" element={<FeaturesComing />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
