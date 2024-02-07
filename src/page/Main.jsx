import React from "react";
import Navbar from "../component/Navbar";
import Home from "../component/Home";
import Blog from "../component/Blog";
import About from "../component/About";
import Contact from "../component/Contact";
import Footer from "../component/Footer";

const Main = () => {
  return (
    <div className="h-[100%] w-[100vw] md:max-h-[3549px] md:min-w-[1366px] bg-black flex flex-col items-center">
      <Navbar />
      <Home />
      <Blog />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
