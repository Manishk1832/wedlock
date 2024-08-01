import React, { useState } from 'react';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import '../app/font.css';
import Image from "next/image";



const Stories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const stories = [
    { src: '/story.svg', index: 0 },
    { src: '/story.svg', index: 1 },
    { src: '/story.svg', index: 2 },

  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === stories.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? stories.length - 1 : prevSlide - 1));
  };
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    
    <div className="w-full h-auto 8xl:px-32 bg-[#007EAF] pb-10 sm:pb-[80px] 3xl:px-48 xl:px-10 7xl:px-36" >


      
    
    <div className="container  m-auto md:space-y-16 md:px-20 md:py-5 px-4 space-y-5   overflow-hidden bg-[#007EAF] text-white relative">
       <Image
        src="/curvewhite.svg" width={40} height={40}
        alt="arw"
        className="absolute  w-[42rem] rotate-12 -right-10 -top-40 z-10"
      />
      <div className="md:space-y-10 space-y-5 happy_story">
        <div className="flex items-center justify-between gap-5">
          <h1 className="text-[64px] " style={{ fontFamily: 'Proxima-Nova-bold',fontWeight:700, lineHeight: '89.5px' }}>Happy Stories</h1>
          <div className="flex items-center gap-4 z-10">
            <IoArrowBack className="md:w-10 md:h-10 hover:bg-[#009BDA] rounded-full cursor-pointer" onClick={prevSlide} />
            <IoArrowForward className="md:w-10 md:h-10 hover:bg-[#009BDA] rounded-full cursor-pointer" onClick={nextSlide} />
          </div>
        </div>
        <p className="sm:w-[60%] w-full xl:w-full text-[28px] " style={{ fontFamily: 'Proxima-Nova-regular',lineHeight: '32px sm:42px lg:42px' }}>
          Dive into stories of unexpected friendships, love that blossoms in the most extraordinary places, and dreams that come true against all odds.
        </p>
      </div>
      <div className="flex items-center justify-between flex-col sm:flex-row gap-7 ">
        {stories.map((story, index) => (
          <div key={index} className={` relative ${index == currentSlide ? 'block' : '' }`}>
            <Image src={story.src} alt={`Story ${story.index}`} className="rounded-3xl w-[50rem]  h-[26rem] object-cover z-2 3xl:h-[30%] 5xl:h-[35%]"  width={40} height={40}/>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-5 gap-1">
        {stories.map((story, index) => (
          <div
            key={index}
            className={`w-4 h-2  rounded-xl cursor-pointer ${index === currentSlide ? 'bg-white w-8' : 'bg-[#00587b] '}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>

</div>
  );
};

export default Stories;
