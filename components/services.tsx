import React from "react";
import Service from "./service";

const Services = () => {
  return (
    <div className="flex flex-wrap max-w-6xl gap-5 items-center justify-center mt-20">
      <Service
        image="softwareDev.svg"
        title="Software Development"
        description="asdf"
      />
      <Service
        image="webDev.svg"
        title="Website Development"
        description="asdf"
      />
      <Service
        image="mobileApp.svg"
        title="Mobile Application Development"
        description="asdf"
      />
      <Service
        image="maintenance.svg"
        title="Website Maintenance"
        description="asdf"
      />
      <Service
        image="domain.svg"
        title="Hosting and Domain Service"
        description="asdf"
      />
      <Service image="" title="Website Development" description="asdf" />
    </div>
  );
};

export default Services;
