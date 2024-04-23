import React from "react";
import Trait from "./trait";
import { HiLightBulb } from "react-icons/hi";
const Traits = () => {
  return (
    <div className="px-8 py-3 sm:px-36 sm:py-5 flex flex-wrap gap-5">
      <Trait
        Icon={HiLightBulb}
        color={"text-yellow-400"}
        title="Creative Idea"
        description="A descriptive paragraph that tells clients how good you are and proves
        that you are the best choice that they’ve made."
      />
      <Trait
        Icon={HiLightBulb}
        color={"text-yellow-400"}
        title="Creative Idea"
        description="A descriptive paragraph that tells clients how good you are and proves
        that you are the best choice that they’ve made."
      />
      <Trait
        Icon={HiLightBulb}
        color={"text-yellow-400"}
        title="Creative Idea"
        description="A descriptive paragraph that tells clients how good you are and proves
        that you are the best choice that they’ve made."
      />
      <Trait
        Icon={HiLightBulb}
        color={"text-yellow-400"}
        title="Creative Idea"
        description="A descriptive paragraph that tells clients how good you are and proves
        that you are"
      />
    </div>
  );
};

export default Traits;
