import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-row justify-between bg-blue-800 px-8 py-5 sm:px-36 sm:py-32">
      <div>
        <h1 className="font-karla text-white text-3xl font-black">GooDev</h1>
        <p className="text-justify font-karla text-gray-200 max-w-80 mt-5">
          A descriptive paragraph that tells clients how good you are and proves
          that you are the best choice that they’ve made. This paragraph is also
          for those who are looking out for a reliable car repair.
        </p>
      </div>
      <div>
        <h1 className="font-karla text-white text-xl font-bold">Contact Us</h1>
        <p className="text-justify font-karla text-gray-200 max-w-80 mt-5">
          A descriptive paragraph that tells clients how good you are and proves
          that you are the best choice that they’ve made. This paragraph is also
          for those who are looking out for a reliable car repair.
        </p>
      </div>
      <div>
        <h1 className="font-karla text-white text-xl font-bold">Quick Links</h1>
        <div className="flex flex-col mt-5 gap-2">
          <Link
            href={"/services"}
            className="font-karla font-semibold text-white"
          >
            Our Services
          </Link>
          <Link href={"/about"} className="font-karla font-semibold text-white">
            About Us
          </Link>
          <Link
            href={"/contact"}
            className="font-karla font-semibold text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div>
        <h1 className="font-karla text-white text-xl font-bold">Follow Us</h1>
        <div className="flex flex-col mt-5 gap-5">
          <Instagram color="white" />
          <Facebook color="white" />
          <Linkedin color="white" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
