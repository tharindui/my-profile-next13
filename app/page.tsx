import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

function page() {
  return (
    <div className="flex">
      <div className="flex-1">
        <h1 className="text-3xl font-bold  ">Hello Im Tharindu!</h1>
      </div>
      <div>
        <img
          className="rounded-full"
          alt="tharindu"
          height={200}
          width={500}
          src={"/1568477642811.jpg"}
        ></img>
      </div>
    </div>
  );
}

export default page;
