import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex flex-row sm:justify-between mb-16 sm:mb-20 items-center">
      <div className="">
        <Link href="/">
          <h1 className="text-3xl font-karla">GooDev</h1>
        </Link>
      </div>
      <div className="hidden sm:block">
        <ul className=" flex flex-row gap-10">
          <li className="text-lg hover:text-purple-600 font-karla">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="text-lg hover:text-purple-600 font-karla">
            <Link href={"/services"}>Services</Link>
          </li>
          <li className="text-lg hover:text-purple-600 font-karla">
            <Link href={"/about"}>About</Link>
          </li>
          <li className="text-lg hover:text-purple-600 font-karla">
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
