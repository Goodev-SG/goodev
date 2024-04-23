import React from "react";
import { IconType } from "react-icons";

interface Trait {
  Icon: IconType;
  title: string;
  color: string;
  description: string;
}
const Trait = ({ Icon, title, color, description }: Trait) => {
  return (
    <div className="flex flex-col gap-3 min-w-64 max-w-64">
      <div className="flex flex-row gap-3 items-start">
        <Icon size={30} className={color} />
        <h3 className="text-lg font-bold font-karla">{title}</h3>
      </div>
      <p className="font-karla text-justify text-gray-400">{description}</p>
    </div>
  );
};

export default Trait;
