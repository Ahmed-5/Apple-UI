import React from "react";

export default function WelcomePanel() {
  return (
    <React.Fragment>
      <div id="home" className="relative pt-16 lg:pb-64 pb-16 flex content-center items-center justify-center min-h-home-lg">
          <div className="absolute w-full h-full">
            <video autoPlay muted className="top-0 bg-center">
                <source src="https://www.apple.com/105/media/us/macbook-pro-13/2020/f2b14406-42ad-405e-bfa0-71b52a0bfd67/anim/chip/large.mp4"/>
            </video>
          </div>
          <div className="container relative mx-auto hidden md:block ">
              <div className="items-center flex flex-wrap ">
                  <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center bg-gray-600/40 rounded-lg">
                      {/* <div className="bg-sky-600/50 rounded-lg"> */}
                      <div>
                          <h1 className="text-white font-semibold text-5xl mt-20 mb-20">Welcome to Apple.</h1>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </React.Fragment>
  );
}
