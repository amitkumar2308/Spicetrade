import React from "react";
import image from "../assets/image.png";
import spicesboardlogo from '../assets/image 10.png'
const Home = () => {
  return (
    <div className="relative">
      <div className="absolute p-4 text-white font-medium text-[1vmax] z-30">
        <h1>Home / Commodity Focus /Spices / <span className="font-semibold">Exporting Spices from India</span></h1>
      </div>
      <div className="absolute w-11/12 md:w-1/3 lg:w-1/3 h-4/6 lg:h-auto z-30 bg-white top-1/4 left-2/4 lg:left-1/3 md:left-1/3 -translate-x-1/2 p-6 md:p-8 flex flex-col border-t-8 border-yellow-500">
  <h2 className="font-semibold text-yellow-400 text-sm md:text-[1.5vmax]">SPICES</h2>
  <img className="absolute w-[4vmax] md:w-[5vmax] right-2 top-2" src={spicesboardlogo} alt="boardlogo"/>
  <h2 className="font-semibold text-black text-lg md:text-[2vmax]">Exporting Spices from India</h2>
  <h3 className="font-normal text-black mt-2 md:mt-4 text-xs md:text-[0.9vmax]">
    The Spices Board of India promotes spice cultivation, export, and research through various initiatives and regulations.
  </h3>
</div>

      {/* Image */}
      <img className="w-screen h-56 lg:h-auto" src={image} alt="spices" />

      {/* Vignette Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,_rgba(0,0,0,0)_60%,_rgba(0,0,0,1)_100%)]"></div>

      
    </div>
  );
};

export default Home;
