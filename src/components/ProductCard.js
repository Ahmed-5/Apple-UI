import React from "react";

export default function ProductCard({ iconColor, title, text, icon, className }) {
  return (
    <React.Fragment>
      <div className={className}>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div
              className={
                "text-white p-3 text-center inline-flex items-center justify-center  w-12 h-12 mb-6 shadow-lg rounded-full " +
                iconColor
              }
            >
              {icon}
            </div>
            <h6 className="text-xl font-semibold">{title}</h6>
            <p className="text-justify mt-2 mb-4 text-gray-600">{text}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
