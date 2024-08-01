import Image from "next/image";
import React from "react";

const Ai = () => {
  return (
   
   <div className="w-100 h-auto 8xl:px-32 bg-[#009BDA] 3xl:px-52 xl:px-10 7xl:px-36" >

<div className="relative container m-auto">
      <Image
        src="/curvewhite.svg" width={400} height={310}
        alt="arw"
        className="absolute  w-[40rem] rotate-12 -right-10 -top-32"
      />
      <div className=" md:space-y-20 md:px-20 md:pt-20 p-10  ">
        <div className="relative text-white space-y-10 ai_driven">
          <h1 className="text-[64px]   w-[60%] sm:w-auto" style={{ fontFamily: 'Proxima-Nova-bold,', fontWeight: 700,lineHeight:'83.2px' }}>
            AI-driven match <br /> recommendations to suit your <br />
            preferences
          </h1>
          <Image
            src="/thunder.svg"
            alt=""
            width={100}
            height={100}
            className="absolute md:top-0 -top-10  right-0 w-16 md:w-auto
        "
          />
        </div>
        <div className="">
          <div className="bg-[#D3D3D380] border-[#FFFFFF] rounded-t-3xl md:w-[50rem] md:h-[34.5rem] h-52 relative md:left-52 -bottom-10 ">
            <div>
              <Image
                src="/Ai.svg"
                alt=""
                width={100}
                height={100}
                className="relative md:left-40 left-20 md:-top-10 -top-5 w-52  md:w-auto "
              />
            </div>
            <div className="absolute md:top-20 -top-10  -right-32 w-16 md:w-auto">
              <Image
                src="/recomended.png"
                alt=""
                width={400}
                height={300}
                className=""
              />
            </div>
           
          </div>
        </div>
      </div>
    </div>

   </div>
 
  );
};

export default Ai;
