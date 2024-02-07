import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="h-[100%] w-[100vw] md:w-[1152px] md:h-[687px] text-white flex justify-center flex-col items-center px-3 py-6 md:px-0 md:py-0"
    >
      <div className="md:w-[770px] md:h-[233px] flex justify-center flex-col items-center ">
        <h1 className="font-bold text-[50px] text-center md:leading-[60.51px]">
          It doesn’t matter what{" "}
          <span className="text-yellow-400">JS Framework</span> you work with.
        </h1>
        <p className="font-normal text-2xl text-center leading-[24.05px] py-2">
          Our boilerplates works with it{" "}
          <span className="text-blue-400">out-of-the-box</span> .
        </p>
        <div className="w-[70%] md:w-[331px] md:h-[37px] flex pt-4 justify-around">
          <button className="border border-black flex items-center bg-yellow-400 w-[45%] md:w-[150px] h-[37px] justify-center hover:bg-white hover:text-black">
            <span className="pr-1 md:pr-2">Get started</span>
            <FaLongArrowAltRight />
          </button>
          <button className="border border-yellow-400 flex items-center text-yellow-400 w-[45%] md:w-[150px] h-[37px] justify-center hover:bg-white hover:text-black">
            <span className="pr-2">See repo</span>
            <FaGithub />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
