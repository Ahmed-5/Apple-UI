import React from "react";

export default function DiagonalSeparator({ color, id, children }) {
  console.log(children);
  return (
    <section id={id} className={`relative py-20 bg-${color}`}>
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute overflow-hidden -mt-20"
        style={{ height: "80px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className={`text-${color} fill-current`}
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      {children}
    </section>
  );
}
