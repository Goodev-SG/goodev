import React from "react";
import Line from "./line";

interface ServiceInterface {
  image: string;
  title: string;
  description: string;
}
const Service = ({ image, title, description }: ServiceInterface) => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center min-w-80 mb-5">
      <div className="h-20 flex items-center">
        <img src={image} width={100} />
      </div>
      <div className="text-center sm:text-start">
        <h3 className="font-karla font-bold sm:text-2xl max-w-56">{title}</h3>
        <Line size={8} mb={0} />
      </div>
      <p className="font-karla text-gray-400">{description}</p>
      <button className="py-1 px-3 sm:py-3 sm:px-10 border-blue-800 hover:text-white hover:bg-blue-800 border-2 font-karla">
        Read More
      </button>
    </div>
  );
};

export default Service;
