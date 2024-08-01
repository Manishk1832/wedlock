import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FiMic } from "react-icons/fi";
import { PiChatsBold } from "react-icons/pi";
import { IoMdArrowForward } from "react-icons/io";
import '../app/font.css';
const Matching = () => {
  return (
    <div className="bg-[#DCD1E8] bg-gradient-to-bl from-[white] to-[#DCD1E8]  px-6 pt-12  relative w-100 sm:pb-16 pb-12 sm:py-16 3xl:px-28 2xl:px-24">
     
     
      <div className="bg-[url('/shadow.png')] -rotate-342 absolute w-[80rem] h-[100%]  top-0 right-0  sm:hidden hidden "></div>
      <Image
    src="/curve.png"
    alt="arw"
    width={100}
    height={100}
    className="absolute w-[50%] left-[50%] "
  />



      <div className="text-[#60457E]   sm:px-20 z-20 matchmaking container w-100 3xl:px-28 4xl:px-24">
        <h1 className="text-[64px]    text-[#4E3A63]  " style={{ fontFamily: 'Proxima-Nova-Bold,', fontWeight: 700, lineHeight:'83px'}}>Exclusive matchmaking</h1>
        <p className="text-[28px]  pt-[21px] text-[#475467] ">
          Cras at pellentesque eros. Nullam vitae sapienet felis eleifend
          luctus. Nam ac dui
        </p>
      </div>
      <div className="md:flex container m-auto  mt-6  justify-between items-center  sm:w-[87%] w-100 gap-40   bg-[#60457E] rounded-3xl px-6 sm:px-10 py-5 opacity-95	sm:mt-12">
      
      <div className="relative w-full h-full flex justify-center items-center">
        <Image
          src="/matching.svg"
          width={800}
          height={600}
          alt="couple"
          className="max-w-full max-h-full object-contain"
        />
      </div>
        <div className="space-y-5 relative right-[55px] top_rating">
          <p className="w-[100%] text-white pt-6 sm:pt-0 text-[12px] sm:text-[16px]">
            Aenean interdum arcu sit amet nulla lacinia <br /> suscipit. Vivamus at
            laoreet mi. Fusce pulvinar commodo
          </p>
          <div className="space-y-2 ">
            <div className="flex items-center gap-5 rounded-xl bg-[#FFFFFF80] md:w-96 h-10 px-5">
              <FaStar className="text-2xl text-yellow-400 " />
              <h1 className="md:text-xl " style={{ fontFamily: 'Proxima-Nova-Bold, sans-serif' }}>Top Rated Consultants</h1>
            </div>
            <div className="flex items-center gap-5 rounded-xl bg-[#FFFFFF80] md:w-96 h-10 px-5">
              <FiMic className="text-2xl text-[#007EAF] " />
              <h1 className="md:text-xl " style={{ fontFamily: 'Proxima-Nova-Bold, sans-serif' }}>100% Privacy</h1>
            </div>
            <div className="flex items-center gap-5 rounded-xl bg-[#FFFFFF80] md:w-96 h-10 px-5">
              <PiChatsBold className="md:text-2xl text-lg text-[#008435] " />
              <h1 className="md:text-xl text-sm " style={{ fontFamily: 'Proxima-Nova-Bold, sans-serif' }}>
                5 times higher success rates
              </h1>
            </div>
            <div className="flex items-center gap-5 rounded-xl bg-[#FFFFFF80] md:w-96 h-10 px-5">
              <PiChatsBold className="md:text-2xl text-lg text-[#008435] " />
              <h1 className="md:text-xl text-sm " style={{ fontFamily: 'Proxima-Nova-SemiBold, sans-serif' }}>
                5 times higher success rates
              </h1>
            </div>
            <div className="flex items-center gap-5 rounded-xl bg-[#FFFFFF80] md:w-96 h-10 px-5">
              <PiChatsBold className="md:text-2xl text-lg text-[#008435] " />
              <h1 className="md:text-xl text-sm " style={{ fontFamily: 'Proxima-Nova-SemiBold, sans-serif' }}> 
                5 times higher success rates
              </h1>
            </div>
            
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center px-4 text-white bg-[#3C2C4C] rounded-full md:w-60 md:h-16 h-10 ">
              <button className=" font-bold">Check your Eligibility </button>

            </div>
            <div className="text-white text-[0.7rem] md:text-lg cursor-pointer  ">Read more</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Matching;
