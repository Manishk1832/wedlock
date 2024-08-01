import Image from 'next/image'
import React from 'react'
import '../app/font.css';

const YouTube = () => {
  return (
  
  
  <div className='w-100 h-auto bg-[#E6F2F7] 3xl:pl-[8%] xl:px-8 7xl:px-32 8xl:px-32'>
 <div className='relative overflow-hidden container m-auto sm:px-6 px-6 w-100' >
       <Image
        src="/curvesm.svg"
        alt="arw"
        className="absolute  w-[52rem] -right-56 top-2 z-10" width={40} height={40}
      />
    <div className='py-10 sm:py-20  sm:px-14 youtube'>
       
        <h1 className='text-[64px]  text-[#007EAF]  ' style={{fontFamily: 'Proxima-Nova-bold,',fontWeight: 700,lineHeight:'83.2px'}}>Introducing: A new wedlock experience
        </h1>
        <p className='text-[28px]  pt-[42px] text-[#475467] sm:leading-[42px] ' style={{fontFamily: 'Proxima-Nova,'}}>Your search for a great relationship has never been easier with groundbreaking overhaul of the eharmony you know and trust.
        </p>
        <h4 className='xl:text-[28px] text-[#007EAF] pt-10 text-[1.5rem]' style={{fontFamily: 'Proxima-Nova-ExtraBold, sans-serif',letterSpacing:'3%', lineHeight: '39.2px'}}>Get a sneek peek:</h4>
        <Image src="/YT.svg" width={1224} height={500} alt='yt' className='relative  sm:left-2 z-0 mt-8 sm:h-[20%] 3xl:w-[98%] 5xl:w-[100%] '/>

    </div>
    
    
    </div>

  </div>
 
  )
}

export default YouTube