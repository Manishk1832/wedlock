import Image from 'next/image'
import React from 'react'
import '../app/font.css';

const Feature = () => {
  return (
    <div className='w-full bg-[#007EAF] pt-6 sm:pt-0 px-8 md:px-20 lg:px-32 xl:px-48'>
      <div className='flex flex-col md:flex-row'>
        {/* Left Side */}
        <div className='flex flex-col space-y-6 md:w-1/2 p-4'>
          <h1 className='text-[64px] leading-[83.2px]' style={{ fontFamily: 'Proxima-Nova-Bold', fontWeight: '700' }}>
            Connect with matches <br /> the way you like
          </h1>
          <p className='text-[28px] sm:leading-[42px]' style={{ fontFamily: 'Proxima-Nova-Regular', fontWeight: '400', lineHeight: '42px' }}>
            Cras at pellentesque eros. Nullam vitae <br /> sapien et felis eleifend luctus. Nam ac dui
          </p>
          <div className="flex flex-col space-y-6">
            {/* Card 1 */}
            <div className="flex flex-col p-8 rounded-3xl backdrop-blur-[4.6px] bg-white bg-opacity-80">
              <div className="flex items-start gap-5">
                <Image
                  loading="lazy"
                  alt='Video call'
                  width={40}
                  height={40}
                  src="/curvewhite.svg"
                  className="w-10 aspect-square"
                />
                <div className="flex flex-col">
                  <div className="text-[28px] text-gray-900 text-opacity-90" style={{ fontFamily: 'Proxima-Nova-Bold', lineHeight: '28px' }}>
                    Video call
                  </div>
                  <div className="mt-1 text-[20px] leading-7 text-slate-600" style={{ fontFamily: 'Proxima-Nova-Regular', lineHeight: '28px' }}>
                    Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignissim tortor in tellus dictum pellentesque.
                  </div>
                </div>
              </div>
              <div className="my-6 h-px border border-solid bg-[#061C3D] opacity-15" />
              {/* Card 2 */}
              <div className="flex items-start gap-5">
                <Image
                  loading="lazy"
                  alt='Message'
                  width={40}
                  height={40}
                  src="/curvewhite.svg"
                  className="w-10 aspect-square"
                />
                <div className="flex flex-col">
                  <div className="text-[28px] text-gray-900 text-opacity-90" style={{ fontFamily: 'Proxima-Nova-Bold', lineHeight: '28px' }}>
                    Message
                  </div>
                  <div className="mt-1 text-xl leading-7 text-slate-600" style={{ fontFamily: 'Proxima-Nova-Regular', lineHeight: '28px' }}>
                    Vivamus dignissim tortor in tellus dictum pellentesque. Praesent mauris metus, dictum quis velit non.
                  </div>
                </div>
              </div>
              <div className="my-6 h-px border border-solid bg-[#061C3D] opacity-15" />
              {/* Card 3 */}
              <div className="flex items-start gap-5">
                <Image
                  loading="lazy"
                  alt='Voice call'
                  width={40}
                  height={40}
                  src="/curvewhite.svg"
                  className="w-10 aspect-square"
                />
                <div className="flex flex-col">
                  <div className="text-[24px] text-gray-900 text-opacity-90" style={{ fontFamily: 'Proxima-Nova-Bold', lineHeight: '28px' }}>
                    Voice call
                  </div>
                  <div className="mt-1 text-xl leading-7 text-slate-600" style={{ fontFamily: 'Proxima-Nova-Regular', lineHeight: '28px' }}>
                    Vivamus dignissim tortor in tellus dictum pellentesque. Praesent mauris metus, dictum quis velit non.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className='relative md:w-1/2 h-[60rem]'>
          <Image
            src="/main.svg"
            alt="Main visual"
            layout="fill"
            objectFit="initial"
            className="absolute inset-0"
          />
        </div>
      </div>
    </div>
  )
}

export default Feature
