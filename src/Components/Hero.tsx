"use client";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import '../app/globals.css';
import heroImg from './bg.png';

function Hero() {



  return (
    <div className="relative hero_section bg-cover  bg-no-repeat bg-black  overflow-hidden 7xl:h-[100vh]   top-0 py-0   sm:py-0 3xl:h-[100vh]  xl:h-[100vh]   5xl:h-[100vh]   4xl:h-[100vh]  " style={{
      backgroundImage: `url(${heroImg.src})`, width: '100%',  // Zoom effect (adjust percentage as needed)
    }}
    >




      <div className="absolute inset-0 ">

        {/*  
        <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 gap-1 md:gap-2 rotate-12 sm:rotate-12 h-full scale-[1.39] bg-black">
          {imagePaths.map((path, index) => (
            <div key={index} className="relative w-full h-full bg-black">
              <Image src={path} layout="fill" objectFit="cover" alt={`Image ${index + 1}`}  />
            </div>
          ))}
        </div>

        */}
      </div>


      <div className="relative 3xl:pl-30   bg-black bg-opacity-50 text-white h-full md:pl-16 md:flex md:pt-32 md:px-10 gap-80 ">
        <div className="  2xl:px-20   xl:w-[100%] flex justify-center items-center">
          <div className=" text-center  xl:w-[100%]  hero_content  " >
            <h1
              className="text-[123px] text-[#FFFFFF]"
              style={{ fontFamily: 'Proxima-Nova-bold,', lineHeight: '149.81px', letterSpacing: '2%', fontWeight:'700' }}
            >
              Love At First Swipe
            </h1>
            <p
              className="  text-[#FFFFFF] text-[28px] xl:pt-8"
              style={{ fontFamily: 'Proxima-Nova-Regular,', lineHeight: '42px', letterSpacing: '2%', fontWeight:'400' }}
            >
              Australia's most trusted Matrimony  Website and  <br />Mobile
              Application
            </p>

            <Link
              href={"/questions"}
              className="flex items-center justify-center link xl:mt-16 bg-[#009BDA] rounded-full w-[249px] h-[64.46px]  text-[20px] xl:m-auto text-white-700" style={{ fontFamily: 'Proxima-Nova-Regular,', lineHeight: '48px', }}
            >
              <div className=" text-center link_btn  text-white-700 font-bold">
                <span >Start free today</span>
               
              </div>
            </Link>
          </div>

          {/* mobile card in hero section 
          <div className="absolute top-[60px] right-[130px] backdrop-blur backdrop-brightness-125 rounded-3xl w-[25%] h-[73%]   border-8 border-white-2 flex items-center justify-center hidden  md:block 3xl:mr-[5%] lg:hidden" ></div>
         */}


        </div>
        <div
          className="absolute bottom-0 right-0 sm:pt-40 md:bottom-0 xl:bottom-40 xl:left-[70rem] 2xl:left-[80rem] hidden md:block 3xl:ml-[18%]  "
          style={{ transform: 'translateY(50%)' }}
        >
          <div className="flex flex-col items-center gap-2 w-100   ">

{/*
            <Image src="/veri.png" width={50} height={50} alt="logo" />
            <p
              className="text-center md:text-[14px]"
              style={{ fontFamily: 'Proxima-Nova-Bold, sans-serif' }}
            >
              #1 matrimony <br /> website and mobile <br /> app
            </p>

            */}

            <p
              className="text-[18px]  mt-1"
              style={{ fontFamily: 'Proxima-Nova-Thin, sans-serif' }}
            >
              All photos are used for illustrative purposes only.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
