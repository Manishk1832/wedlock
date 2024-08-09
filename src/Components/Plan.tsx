"use client";
import React from "react";
import { MdDone } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import FAQ from "./FAQs3";
import "../app/font.css";

const Plan = () => {
  return (
    <div className="space-y-20 xl:space-y-32 mt-24">
      <div className="px-5">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="mt-4 text-lg text-[#061C3D] md:mt-0">
            Donec ligula ligula, porta at urna non, faucibus congue urna.
            Nullamb <br className="hidden xl:block" />
            nulla purus, facilisis vitae odio ac, tempus aliquet dolor.
          </p>
          <div className="mt-5 flex h-16 w-60 items-center gap-8 rounded-full bg-[#FFF9EE] p-3 xl:mt-0">
            <div className="flex h-10 w-32 items-center justify-center rounded-full bg-[#FFC759] p-2">
              <h1 className="font-semibold text-[#061C3D]">Monthly</h1>
            </div>
            <div>
              <h1 className="text-center font-semibold text-[#42526B]">
                Yearly
              </h1>
            </div>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3 md:px-5 lg:gap-8 xl:mt-4 xl:gap-24 2xl:gap-32 3xl:gap-36 3xl:px-60">
          <div className="space-y-4 rounded-3xl bg-white p-4">
            <div className="space-y-4 text-[#007EAF]">
              <h1 className="font-semibold">Standard</h1>
              <h1 className="text-4xl font-bold">Free</h1>
            </div>
            <div className="text-[#42526B]">
              <p>
                Upgrade your social portfolio with a <br /> stunning profile &
                enhanced shots.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F0F5FF] text-[#007EAF]">
                  <MdDone />
                </div>
                <h1 className="text-[#42526B]">Send unlimited Messages</h1>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F0F5FF] text-[#007EAF]">
                  <MdDone />
                </div>
                <h1 className="text-[#42526B]">View upto 75 Contact Numbers</h1>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F0F5FF] text-[#007EAF]">
                  <MdDone />
                </div>
                <h1 className="text-[#42526B]">
                  3 Shaadi Live passes worth ₹1500
                </h1>
              </div>
              <div className="flex items-center gap-3 text-[#0000004D]">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F0F5FF]">
                  <MdDone />
                </div>
                <h1 className="">Standout from other Profiles</h1>
              </div>
              <div className="flex items-center gap-3 text-[#0000004D]">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F0F5FF]">
                  <MdDone />
                </div>
                <h1 className="">Let Matches contact you directly</h1>
              </div>
            </div>
            <div className="flex w-40 items-center justify-center gap-4 rounded-lg border-2 border-[#007EAF] p-2 text-[#007EAF]">
              <h1 className="font-bold">Get Started</h1>
              <FaArrowRightLong className="text-xl" />
            </div>
          </div>
          <div className="space-y-4 rounded-3xl bg-[#007EAF] p-4 text-white">
            <div className="space-y-4">
              <h1 className="font-semibold">Premium</h1>
              <h1 className="text-4xl font-bold">
                ₹1,625{" "}
                <span className="text-base font-normal text-[#FFFFFF33]">
                  /Per Month
                </span>
              </h1>
            </div>
            <div>
              <p>
                Upgrade your social portfolio with a <br /> stunning profile &
                enhanced shots.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFFFFF33] text-[#DDDDDD]">
                  <MdDone />
                </div>
                <h1>Send unlimited Messages</h1>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFFFFF33] text-[#DDDDDD]">
                  <MdDone />
                </div>
                <h1>View upto 75 Contact Numbers</h1>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFFFFF33] text-[#DDDDDD]">
                  <MdDone />
                </div>
                <h1>4 Shaadi Live passes worth ₹1500</h1>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFFFFF33] text-[#DDDDDD]">
                  <MdDone />
                </div>
                <h1>Standout from other Profiles</h1>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFFFFF33] text-[#DDDDDD]">
                  <MdDone />
                </div>
                <h1>Let Matches contact you directly</h1>
              </div>
            </div>
            <div className="flex w-40 items-center justify-center gap-4 rounded-lg border-2 border-[#007EAF] bg-white p-2 text-[#007EAF]">
              <h1 className="font-bold">Get Started</h1>
              <FaArrowRightLong className="text-xl" />
            </div>
          </div>
          <div className="space-y-4 rounded-3xl bg-[#8E69B4] p-4 text-white">
            <div className="space-y-4">
              <h1 className="font-semibold">Exclusive</h1>
              <h1 className="text-4xl font-bold">
                ₹1,752{" "}
                <span className="text-base font-normal text-[#FFFFFF33]">
                  /Per Month
                </span>
              </h1>
            </div>
            <div>
              <p>
                Upgrade your social portfolio with a <br /> stunning profile &
                enhanced shots.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFFFFF33] text-[#DDDDDD]">
                  <MdDone />
                </div>
                <h1>Send unlimited Messages</h1>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFFFFF33] text-[#DDDDDD]">
                  <MdDone />
                </div>
                <h1>View upto 75 Contact Numbers</h1>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFFFFF33] text-[#DDDDDD]">
                  <MdDone />
                </div>
                <h1>4 Shaadi Live passes worth ₹1500</h1>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFFFFF33] text-[#DDDDDD]">
                  <MdDone />
                </div>
                <h1>Standout from other Profiles</h1>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFFFFF33] text-[#DDDDDD]">
                  <MdDone />
                </div>
                <h1>Let Matches contact you directly</h1>
              </div>
            </div>
            <div className="flex w-40 items-center justify-center gap-4 rounded-lg border-2 border-white bg-white p-2 text-[#007EAF]">
              <h1 className="font-bold">Get Started</h1>
              <FaArrowRightLong className="text-xl" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <FAQ />
      </div>
    </div>
  );
};

export default Plan;
