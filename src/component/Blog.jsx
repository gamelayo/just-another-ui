import React from "react";

const Blog = () => {
  return (
    <section
      id="blog"
      className="h-[100%] w-[100vw] md:w-[1152px] md:h-[687px] text-white flex justify-center flex-col items-center px-3 py-6 md:px-0 md:py-0"
    >
      <div className="md:w-[853px] md:h-[330px] flex flex-col items-center justify-between">
        <p className="text-center leading-[19.36px] font-bold text-[16px]">
          Supported and backed by:
        </p>
        <ul className="flex flex-col md:h-[166px] md:w-[853px] justify-around text-[16px] md:text-[32px]">
          <div className="flex justify-evenly gap-4 py-4 md:py-0">
            <div className="flex flex-col md:flex-row justify-evenly gap-4 md:gap-12">
              <li className="bg-slate-100 md:w-[150px] py-2 text-black text-center font-bold">
                Lorem
              </li>
              <li className="bg-slate-100 md:w-[150px] py-2 text-black text-center font-bold">
                Ipsum{" "}
              </li>
            </div>

            <div className="flex flex-col md:flex-row justify-evenly gap-4 md:gap-12 ">
              <li className="bg-slate-100 md:w-[150px] py-2 text-black text-center font-bold">
                Dolor{" "}
              </li>
              <li className="bg-slate-100 md:w-[150px] py-2 text-black text-center font-bold">
                Sit
              </li>
            </div>
          </div>
          <div className="flex justify-evenly gap-4 pb-4 md:pb-4">
            <div className="flex flex-col md:flex-row justify-evenly  gap-4 md:gap-12">
              <li className="bg-slate-100 md:w-[150px] py-2 text-black text-center font-bold">
                Dolor{" "}
              </li>
              <li className="bg-slate-100 md:w-[150px] py-2 text-black text-center font-bold">
                Sit
              </li>
            </div>

            <div className="flex flex-col md:flex-row justify-evenly gap-4  md:gap-12">
              <li className="bg-slate-100 md:w-[150px] py-2 text-black text-center font-bold">
                Lorem{" "}
              </li>
              <li className="bg-slate-100 md:w-[150px] py-2 text-black text-center font-bold ">
                Ipsum{" "}
              </li>
            </div>
          </div>
        </ul>
        <h4 className="text-[32px] font-bold text-center leading-[38.73px]">
          Less code. More product.
        </h4>
        <p className="font-normal text-[16px] text-center md:w-[513px]">
          By using our UI Kit, we make sure you only get to{" "}
          <span className="text-yellow-400">focus more</span> on the other
          things that matter.
        </p>
      </div>
    </section>
  );
};

export default Blog;
