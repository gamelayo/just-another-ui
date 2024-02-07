import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav className=" w-[100vw] md:w-[1152px] h-[100px]  flex items-center justify-between px-3 md-px-0">
      <h2 className="font-bold text-xl leading-[24.2px] text-slate-50">
        JustAnotherUIKit
      </h2>
      {/* menu */}
      <ul className="w-[272px] h-[19px] hidden md:flex justify-between items-center text-slate-300 font-extralight text-base leading-[19.36px] ">
        <li className="hover:text-xl hover:text-slate-50 cursor-pointer">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-xl hover:text-slate-50 cursor-pointer">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-xl hover:text-slate-50 cursor-pointer">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li className="hover:text-xl hover:text-slate-50 cursor-pointer">
          <Link to="blog" smooth={true} duration={500}>
            Blog
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div
        onClick={handleClick}
        className="md:hidden z-10 text-white cursor-pointer "
      >
        {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen  flex flex-col justify-center items-center bg-black text-white"
        }
      >
        <li className="py-6 text-4xl cursor-pointer">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl cursor-pointer">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl cursor-pointer">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li className="py-6 text-4xl cursor-pointer">
          <Link onClick={handleClick} to="blog" smooth={true} duration={500}>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
