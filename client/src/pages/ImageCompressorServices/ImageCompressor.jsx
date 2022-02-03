import React from "react";
import Services from "./Services";

export default function ImageCompressor() {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <main>
          <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                  <div className="lg:py-24">
                    <h2 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-6 sm:text-6xl lg:mt-6 xl:text-6xl">
                      <span className="block">Compress Images !</span>
                      <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5">
                        Scroll down to know more
                      </span>
                    </h2>
                  </div>
                </div>
                <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                    <img
                      className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                      src={require("../../assets/gifs/image-processing.gif")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Services />
        </main>
      </div>
    </div>
  );
}
