import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import DiagonalSeparator from "./DiagonalSeparator";

export default function Footer() {
  return (
    <footer className="relative">
      <DiagonalSeparator color="white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 py-2">
              <h4 className="text-3xl font-semibold">Lets Keep in Touch</h4>
              <h5 className="text-lg mb-2 text-gray-700">
                You Can Find Us On Any Of These Platforms
              </h5>
              <div className="mt-6">
                <button className="bg-black text-blue-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-middle rounded-full outline-none mr-2">
                  <FontAwesomeIcon icon={faTwitter} />
                </button>
                <button className="bg-black text-blue-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-middle rounded-full outline-none mr-2">
                  <FontAwesomeIcon icon={faFacebook} />
                </button>
                <button className="bg-black text-purple-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-middle rounded-full outline-none mr-2">
                  <FontAwesomeIcon icon={faInstagram} />
                </button>
                <button className="bg-black text-red-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-middle rounded-full outline-none mr-2">
                  <FontAwesomeIcon icon={faYoutube} />
                </button>
                <button className="bg-black text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-middle rounded-full outline-none mr-2">
                  <FontAwesomeIcon icon={faGithub} />
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4 py-2 ml-auto">
                  <span className="block uppercase text-gray-600 text-base font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul>
                    <li>
                      <a className="text-gray-500 hover:text-gray-800 font-semibold text-sm pb-2">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-500 hover:text-gray-800 font-semibold text-sm pb-2">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-500 hover:text-gray-800 font-semibold text-sm pb-2">
                        Our Products
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-500 hover:text-gray-800 font-semibold text-sm pb-2">
                        Our Location
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4 py-2 ml-auto">
                  <span className="block uppercase text-gray-600 text-base font-semibold mb-2">
                    Useful Resources
                  </span>
                  <ul>
                    <li>
                      <a className="text-gray-500 hover:text-gray-800 font-semibold text-sm pb-2">
                        Lorem ipsum
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-500 hover:text-gray-800 font-semibold text-sm pb-2">
                        Lorem ipsum
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-500 hover:text-gray-800 font-semibold text-sm pb-2">
                        Lorem ipsum
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-500 hover:text-gray-800 font-semibold text-sm pb-2">
                        Lorem ipsum
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400"/> 
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                <div className="text-sm text-gray-600 font-semibold py-1">
                  Copyright 2022 Apple clone by Ahmed-5
                </div>
              </div>
            </div>
        </div>
      </DiagonalSeparator>
    </footer>
  );
}
