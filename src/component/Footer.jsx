import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="h-[100%] w-[100vw] md:w-[1152px] md:h-[466px] flex flex-col text-white items-center px-6 md:px-o py-6 md:py-0">
      <section className="h-[405px] w-[100%] flex justify-center items-center">
        <div className="w-[100vw] md:w-[592px] md:h-[180px] flex justify-between">
          <ul>
            <li className="text-[20px] font-bold leading-[24.2px] cursor-pointer  hover:text-yellow-200">
              Lorem
            </li>
            <li className="text-[20px] font-light leading-[24.2px] cursor-pointer  hover:text-yellow-200">
              Ipsum
            </li>
            <li className="text-[20px] font-light leading-[24.2px] cursor-pointer  hover:text-yellow-200">
              Ipsum
            </li>
            <li className="text-[20px] font-light leading-[24.2px] cursor-pointer  hover:text-yellow-200">
              Ipsum
            </li>
            <li className="text-[20px] font-light leading-[24.2px] cursor-pointer  hover:text-yellow-200">
              Ipsum
            </li>
            <li className="text-[20px] font-light leading-[24.2px] cursor-pointer  hover:text-yellow-200">
              Ipsum
            </li>
          </ul>
          <div className="flex flex-col gap-4">
            <ul>
              <li className="text-[20px] font-bold leading-[24.2px] cursor-pointer  hover:text-yellow-200">
                Lorem
              </li>
              <li className="text-[20px] font-light leading-[24.2px] cursor-pointer  hover:text-yellow-200">
                Ipsum
              </li>
              <li className="text-[20px] font-light leading-[24.2px] cursor-pointer  hover:text-yellow-200">
                Ipsum
              </li>
            </ul>
            <ul>
              <li className="text-[20px] font-bold leading-[24.2px] cursor-pointer  hover:text-yellow-200">
                Lorem
              </li>
              <li className="text-[20px] font-light leading-[24.2px] cursor-pointer  hover:text-yellow-200">
                Ipsum
              </li>
              <li className="text-[20px] font-light leading-[24.2px] cursor-pointer  hover:text-yellow-200">
                Ipsum
              </li>
            </ul>
          </div>
          <ul>
            <li className="text-[20px] font-bold leading-[24.2px] cursor-pointer  hover:text-yellow-200">
              Lorem
            </li>
            <li className="text-[20px] font-light leading-[24.2px] cursor-pointer  hover:text-yellow-200">
              Ipsum
            </li>
            <li className="text-[20px] font-light leading-[24.2px] cursor-pointer  hover:text-yellow-200">
              Ipsum
            </li>
            <li className="text-[20px] font-light leading-[24.2px] cursor-pointer  hover:text-yellow-200">
              Ipsum
            </li>
            <li className="text-[20px] font-light leading-[24.2px] cursor-pointer  hover:text-yellow-200">
              Ipsum
            </li>
            <li className="text-[20px] font-light leading-[24.2px] cursor-pointer  hover:text-yellow-200">
              Ipsum
            </li>
          </ul>
          <div className="flex flex-col gap-4">
            <ul>
              <li className="text-[20px] font-bold leading-[24.2px] cursor-pointer  hover:text-yellow-200">
                Lorem
              </li>
              <li className="text-[20px] font-light leading-[24.2px] cursor-pointer  hover:text-yellow-200">
                Ipsum
              </li>
              <li className="text-[20px] font-light leading-[24.2px] cursor-pointer  hover:text-yellow-200">
                Ipsum
              </li>
            </ul>
            <ul>
              <li className="text-[20px] font-bold leading-[24.2px] cursor-pointer  hover:text-yellow-200">
                Lorem
              </li>
              <li className="text-[20px] font-light leading-[24.2px] cursor-pointer  hover:text-yellow-200">
                Ipsum
              </li>
              <li className="text-[20px] font-light leading-[24.2px] cursor-pointer  hover:text-yellow-200">
                Ipsum
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="h-[61px] w-[100%] flex justify-center items-center ">
        <div className="cursor-pointer  hover:text-yellow-200">
          {" "}
          &copy; {year}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
