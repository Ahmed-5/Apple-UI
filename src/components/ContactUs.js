import {
  faLightbulb,
  faMedal,
  faPoll,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import DiagonalSeparator from "./DiagonalSeparator";

export default function ContactUs() {
  return (
    <section id="contact" className="pb-20 relative block bg-black">
      <DiagonalSeparator color={"black"}>
        <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div className="flex flex-wrap text-center justify-center text-white">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold">Contact Us</h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-300">
                Ullamco reprehenderit veniam esse non. Fugiat et deserunt
                commodo sunt laborum cupidatat officia esse incididunt nisi.
                Sint nostrud reprehenderit velit elit ad magna dolore dolore
                tempor laborum ea magna. Consequat eiusmod sint est laborum
                voluptate nisi est aute fugiat voluptate ex incididunt elit
                exercitation. Amet magna sunt aliqua nostrud incididunt
                incididunt. Ex ullamco eu aliquip excepteur do cillum aliquip
                do. Lorem et voluptate proident et adipisicing in commodo
                laborum est.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mt-12 justify-center">
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <FontAwesomeIcon icon={faMedal} />
              </div>
              <h6 className="text-white mt-5 font-semibold text-xl">
                Dolore ea esse.
              </h6>
              <p className="mt-2 mb-4 text-gray-300">
                Quis tempor irure reprehenderit pariatur officia aliquip minim
                veniam.
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <FontAwesomeIcon icon={faLightbulb} />
              </div>
              <h6 className="text-white mt-5 font-semibold text-xl">
                Dolore ea esse.
              </h6>
              <p className="mt-2 mb-4 text-gray-300">
                Quis tempor irure reprehenderit pariatur officia aliquip minim
                veniam.
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <FontAwesomeIcon icon={faPoll} />
              </div>
              <h6 className="text-white mt-5 font-semibold text-xl">
                Dolore ea esse.
              </h6>
              <p className="mt-2 mb-4 text-gray-300">
                Quis tempor irure reprehenderit pariatur officia aliquip minim
                veniam.
              </p>
            </div>
          </div>
        </div>
      </DiagonalSeparator>
      <section className="bg-black relative block lg:px-24 lg:pt-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                <div className="flex-auto p-5 lg:p-10">
                  <h4 className="text-xl font-semibold">
                    Want To Work With Us?
                  </h4>
                  <p className="mt-1 mb-4 text-gray-600 leading-relaxed">
                    Complete this form and we will get back to you in 24 hours
                  </p>
                  <div className="relative w-full mb-3 mt-8">
                    <label
                      htmlFor="name"
                      className="block uppercase text-gray-700 font-bold"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-gray-400 w-full text-gray-700 bg-white rounded text-sm shadow"
                    ></input>
                  </div>
                  <div className="relative w-full mb-3 mt-8">
                    <label
                      htmlFor="email"
                      className="block uppercase text-gray-700 font-bold"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-gray-400 w-full text-gray-700 bg-white rounded text-sm shadow"
                    ></input>
                  </div>
                  <div className="relative w-full mb-3 mt-3">
                    <label
                      htmlFor="message"
                      className="block uppercase text-gray-700 font-bold"
                    >
                      Message
                    </label>
                    <textarea
                      type="text"
                      rows="10"
                      className="border-0 px-3 py-3 placeholder-gray-400 w-full text-gray-700 bg-white rounded text-sm shadow"
                    ></textarea>
                  </div>
                  <div className="text-center mt-6">
                    <button className="text-white active:bg-gray-700 bg-gray-800 text-sm font-bold uppercase px-6 py-3 rounded hover:shadow-lg shadow outline-none mb-1">Send Message</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
