import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function JobCard({ name, job, img }) {
  return (
    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
      <div className="px-6">
        <img
          className="shadow-lg rounded-full mx-auto w-32 h-32"
          alt={name}
          src={img}
        />
        <div className="pt-6 text-center">
          <h5 className="text-xl font-bold">{name}</h5>
          <p className="mt-1 text-sm uppercase font-semibold text-gray-600">
            {job}
          </p>
          <div className="mt-6">
            <button className="bg-blue-400 text-white outline-none w-8 h-8 rounded-full mr-1 mb-1">
              <FontAwesomeIcon icon={faTwitter} />
            </button>
            <button className="bg-blue-600 text-white outline-none w-8 h-8 rounded-full mr-1 mb-1">
              <FontAwesomeIcon icon={faFacebook} />
            </button>
            <button className="bg-purple-600 text-white outline-none w-8 h-8 rounded-full mr-1 mb-1">
              <FontAwesomeIcon icon={faInstagram} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
