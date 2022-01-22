import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import DiagonalSeparator from "./DiagonalSeparator";

export default function MacbookSection() {
  return (
    <DiagonalSeparator color="black" id="macbook">
      <div className="container mx-auto px-4 bg-black">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img
              className="max-w-full rounded-lg shadow-lg"
              style={{ width: "400px" }}
              alt="Macbook Pro"
              src="https://www.apple.com/v/macbook-pro-13/j/images/overview/magic_keyboard__brx9diaauwaa_large_2x.jpg"
            />
          </div>
          <div className="w-full md:w-5/12 mr-auto ml-auto px-4 text-white">
            <div className="md:pr-12">
              <div className="text-black p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <FontAwesomeIcon icon={faLaptop} />
              </div>
              <h3 className="text-3xl font-semibold text-white">
                Macbook Pro 13in.
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-300">
                Sunt in mollit cupidatat aliqua ut ullamco mollit reprehenderit
                dolore. Reprehenderit laboris voluptate ea occaecat magna
                exercitation officia elit voluptate et amet mollit. Labore elit
                sit in duis deserunt id nisi veniam nostrud nulla. Aute amet ea
                sint in elit sint tempor dolor fugiat ex irure nulla labore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DiagonalSeparator>
  );
}
