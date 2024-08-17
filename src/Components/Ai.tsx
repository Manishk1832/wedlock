import Image from "next/image";
import React from "react";

const Ai = () => {
  return (
    <div className="w-full h-auto px-10 xl:px-20 2xl:px-32 3xl:px-52 bg-[#009BDA]">
      <div className="relative container mx-auto">
        <Image
          src="/curvewhite.svg"
          width={400}
          height={310}
          alt="Curve"
          className="absolute w-[40rem] rotate-12 -right-10 -top-32"
        />
        <div className="relative text-white md:space-y-20 md:px-20 ">
          <div className="relative space-y-10">
            <h1
              className="text-[64px] sm:text-[48px] w-full sm:w-auto"
              style={{ fontFamily: 'Proxima-Nova-bold', fontWeight: 700, lineHeight: '83.2px' }}
            >
              AI-driven match <br /> recommendations to suit your <br />
              preferences
            </h1>
            <Image
              src="/thunder.svg"
              alt="Thunder"
              width={100}
              height={100}
              className="absolute md:top-0 top-[-2.5rem] right-0 w-16 md:w-auto"
            />
          </div>
          <div className="relative mt-10">
            <div className="bg-[#D3D3D380] border-[#FFFFFF] border rounded-t-3xl md:w-[50rem] md:h-[34.5rem] h-52 relative mx-auto">
              <Image
                src="/Ai.svg"
                alt="AI"
                width={100}
                height={100}
                style={{ height: '37rem' }}
                className="absolute md:left-40 left-1/4 top-[-2.5rem] w-52 md:w-auto"
              />
              <div className="absolute top-1/4 right-[-10%] md:top-20 md:right--20 w-16 md:w-auto">
                <Image
                  src="/recomended.png"
                  alt="Recommended"
                  width={400}
                  height={300}
                  className="w-full h-auto"
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
