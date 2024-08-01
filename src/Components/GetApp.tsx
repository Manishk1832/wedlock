import React from "react";
import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import './getapp.css';
import '../app/font.css';

const GetApp = () => {
  return (
    
    
    <div className="w-100 h-auto  bg-[#007EAF]  8xl:px-32 py-5 pb-12 7xl:px-32    sm:py-0 sm:pb-0 3xl:px-36 xl:px-10">

<div className=" text-white  overflow-hidden container m-auto">
      <div className="flex flex-col lg:flex-row justify-between lg:justify-between flex-wrap">
        <div className="bg-container flex flex-col lg:flex-row justify-between w-full px-6 md:px-16  md:py-12">
          <div className="">
            <div className="  3xl:pt-12 get_app">
              <h1 className=" text-[64px]" style={{ fontFamily: 'Proxima-Nova-Bold,', fontWeight: 700, lineHeight: '89.6px' }}>Get the app!</h1>
              <p className="text-[28px] pt-[21px]  text-start" style={{ fontFamily: 'Proxima-Nova-Regular,', lineHeight: '32px sm:42px lg:42px' }}>
                Lorem ipsum dolor sit amet consectetur. <br /> Dui mauris dictum ultrices rutrum nec arcu <br />vel. Viverra egestas vitae aenean placerat <br />faucibus pharetra.
              </p>
            </div>
            <div className="flex flex-row    lg:space-x-5 space-y-1  sm:space-y-0 gap-2 mt-16" >
              <button className="rounded-2xl bg-[#FFFFFF] border-2 border-[#0000004D] text-black text-lg p-3 cursor-pointer h-auto">
                <div className="flex items-center gap-4 ">
                  <FaApple className="text-4xl sm:text-4xl md:text-5xl" />
                  <div className="text-start">
                    <p className="text-[#231F20B2] text-sm font-bold" style={{ fontFamily: 'Proxima-Nova-Thin, sans-serif' }}>Download from</p>
                    <p className="text-[1.2rem] text-[#231F20E5] ">Apple Store</p>
                  </div>
                </div>
              </button> 
              <button className="rounded-2xl bg-[#FFFFFF] border-2 border-[#0000004D] text-black text-lg p-3 px-5  h-auto">
                <div className="flex items-center gap-2">
                  <FaGooglePlay className="text-4xl sm:text-4xl md:text-5xl text-[#231F20E5]" />
                  <div className="text-start">
                    <p className="text-[#231F20B2] text-sm" style={{ fontFamily: 'Proxima-Nova-Thin, sans-serif' }}>Download from</p>
                    <p className=" text-[1.2rem] text-[#231F20E5] ">Google Store</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 relative flex justify-center lg:justify-end w-full lg:w-1/2">
          <div className="mt-8 lg:mt-0 relative flex justify-center lg:justify-end w-full lg:w-1/2">
          <div className="  w-[100%] h-[100%] p-0 m-0">
            <Image src="/qr.svg" width={200} height={200} alt="QR code" className="absolute w-[80%] sm:w-[90%] p-0 h-[100%] m-0 sm:right-48 z-20" />
            <Image src="/ph.svg" width={150} height={300} alt="Phone" className="w-[80%] sm:w-[90%] p-0 h-[100%] m-0 relative  left-14 sm:left-2" />
          </div>
          </div>

    
  </div>
</div>

        </div>
      <div className="absolute hidden lg:block top-0 right-0 bg-[url('/topcircle.png')] bg-cover bg-center h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px] w-20 sm:w-40 md:w-60 lg:w-80">
        {/* <Image src="/topcircle.png" alt=""  width={500} height={500}/> */}
      </div>
      </div>

    </div>
   
    
  );
};

export default GetApp;
