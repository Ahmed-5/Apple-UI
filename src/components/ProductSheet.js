import React from "react";

export default function ProductSheet({
  iconColor,
  title,
  subtitle,
  text,
  subtext,
  icon,
  className,
}) {
  return (
    <React.Fragment>
      <div className={className}>
        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
          <div className="text-gray-600 text-center p-3 inline-flex items-center justify-center w-16 h-16 m-6 shadow-lg rounded-full bg-gray-200">
            {icon}
          </div>
          <h3 className="text-3xl mb-2 font-semibold">{title}</h3>
          <p className="text-lg font-light leading-relaxed mt-4 text-gray-700 whitespace-pre-line">
            {text}
          </p>
        </div>
        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-black">
            <img
              src="https://www.apple.com/v/ipad-pro/ah/images/overview/experience/intro_summary_static__epib5tclp926_large.png"
              alt="New Ipad Pro"
              className="w-full align-middle rounded-t-lg"
            />
            <blockquote className="relative p-8 mb-4 bg-black text-white">
              <h4 className="text-lg font-bold text-white">{subtitle}</h4>
              <p className="text-base font-light mt-2 text-white">{subtext}</p>
            </blockquote>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
