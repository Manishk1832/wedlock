"use client";

import Image from "next/image";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { Switch } from "antd";
import { CiMap } from "react-icons/ci";
import { IoLanguage } from "react-icons/io5";
import { FaSmoking } from "react-icons/fa";
import { FaWineGlassAlt } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import "../app/font.css";
import '../app/globals.css'

const Match = () => {
  return (
    <div className="min-w-screen flex min-h-screen flex-col md:gap-10 lg:flex-row">
      <div className="flex w-[100%] items-center justify-center md:flex-none md:items-start lg:w-[25%]">
        <Image
          src="/userImage.png"
          width={200}
          height={200}
          alt="user"
          className="h-50 w-full md:h-auto md:w-auto xl:h-80 xl:w-80"
        />
      </div>

      <div className="col-span-1 grid w-[100%] gap-4 md:col-span-2">
        <div className="col-span-1 w-[100%] rounded-xl bg-white p-6 md:col-span-2 md:w-auto xl:h-[23rem]">
          <div
            className="self-start text-sm font-semibold  leading-5 text-zinc-900"
          >
            <h1>Basic & Lifestyle</h1>
            
          </div>
          <div className="mt-2.5 flex flex-wrap items-center gap-2.5 self-start text-base font-medium leading-4 text-slate-900">
            <div className="self-stretch text-xl font-bold leading-10 text-cyan-600 lg:text-3xl">
              <h1>Pranav Sachaniya </h1>
            </div>
            <div className="text-md my-auto justify-center  self-stretch whitespace-nowrap rounded-[100px] bg-orange-100 px-1 py-1.5 text-center capitalize tracking-normal md:px-3 ">
              <p>Male</p>
              
            </div>
            <div className=" my-auto text-md justify-center self-stretch whitespace-nowrap rounded-[100px] bg-orange-100 px-1 py-1.5 text-center capitalize trackingl md:px-3">
              25
            </div>
          </div>
          <div className="mt-6 flex flex-col rounded-xl bg-cyan-600 bg-opacity-20 px-6 py-3 max-md:max-w-full max-md:px-5">
            <div className="text-base font-bold leading-6 tracking-wide text-gray-900 text-opacity-90 max-md:max-w-full">
              <h1>About Pranav</h1>
              
            </div>
            <div className="mt-4 text-sm leading-7 tracking-wide text-slate-600 max-md:max-w-full md:text-lg">
              <p> Lorem ipsum dolor sit amet consectetur. In sodales ut potenti nec
              est at proin. Semper pharetra neque quis donec ut. Vitae quisque
              elementum eleifend sed molestie fusce arcu ut</p>
             
            </div>
          </div>
          <div className="mt-4 flex flex-col max-md:max-w-full md:px-5">
            <div className="flex justify-between gap-0 max-md:flex-wrap">
              <div
                className="text-md flex-1 font-normal leading-8 tracking-wide text-gray-900 text-opacity-90 max-md:max-w-full md:text-lg"
                style={{ fontFamily: "Proxima-Nova-Semibold, sans-serif" }}
              >
                Religion
              </div>
              <div className="justify-center self-start whitespace-nowrap rounded-[100px] bg-blue-50 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-blue-600">
                Hindu
              </div>
            </div>
            <div className="mt-2 flex justify-between gap-0 font-normal max-md:flex-wrap">
              <div
                className="text-md flex-1 leading-8 tracking-wide text-gray-900 text-opacity-90 max-md:max-w-full md:text-lg"
                style={{ fontFamily: "Proxima-Nova-Semibold, sans-serif" }}
              >
                Marital status
              </div>
              <div className="justify-center self-start rounded-[100px] bg-orange-100 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-slate-900">
                Not married
              </div>
            </div>
            <div className="mt-2 flex justify-between gap-0 max-md:flex-wrap">
              <div
                className="text-md flex-1 font-normal leading-8 tracking-wide text-gray-900 text-opacity-90 max-md:max-w-full md:text-lg"
                style={{ fontFamily: "Proxima-Nova-Semibold, sans-serif" }}
              >
                Posted by{" "}
              </div>
              <div className="justify-center self-start rounded-[100px] bg-purple-100 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-violet-600">
                Self
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white pb-4 xl:h-[18rem]">
          {/* <div className="flex flex-col pb-6 bg-white rounded-xl shadow-sm max-md:max-w-full"> */}
          <div
            className="w-full justify-center border-b border-solid border-zinc-300 px-6 py-4 text-lg leading-6 tracking-wide text-cyan-600 max-md:max-w-full max-md:px-5 md:text-xl"
            style={{ fontFamily: "Proxima-Nova-Bold, sans-serif" }}
          >
            Family details
          </div>
          <div className="mt-6 flex flex-col px-6 max-md:max-w-full max-md:px-5 md:mb-0">
            <div className="flex justify-between gap-0 max-md:flex-wrap">
              <div className="text-md flex-1 font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                Father occupation
              </div>
              <div className="justify-center self-start whitespace-nowrap rounded-[100px] bg-blue-50 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-blue-600">
                Hindu
              </div>
            </div>
            <div className="mt-4 flex justify-between gap-0 max-md:flex-wrap">
              <div className="text-md flex-1 font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                Mother occupation
              </div>
              <div className="justify-center self-start rounded-[100px] bg-neutral-100 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-slate-900">
                Not Specified
              </div>
            </div>
            <div className="mt-4 flex justify-between gap-0 max-md:flex-wrap">
              <div className="text-md flex-1 font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                Number of siblings
              </div>
              <div className="justify-center self-start rounded-[100px] bg-orange-100 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-slate-900">
                Suthar
              </div>
            </div>
            <div className="mt-4 flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
              <div className="text-md font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                Living with family
              </div>
              <div className="justify-center self-start rounded-[100px] bg-purple-100 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-violet-600">
                Not Specified
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>

        <div className="row-span-3 h-[60rem] rounded-xl bg-white">
          <div className="flex h-[60rem] flex-col rounded-xl bg-white pb-6 shadow-sm">
            <div
              className="justify-center border-b border-solid border-zinc-300 px-6 py-4 text-lg leading-6 tracking-wide text-cyan-600 max-md:px-5 md:text-xl"
              style={{ fontFamily: "Proxima-Nova-Bold, sans-serif" }}
            >
              Personal Background
            </div>
            <div className="mt-6 flex flex-col px-6 max-md:px-5">
              <div className="flex items-center gap-1 whitespace-nowrap">
                <div className="text-xl leading-8 text-cyan-600 md:text-3xl">
                  <CiMap />
                </div>
                <div className="text-lg leading-8 text-slate-600 md:text-xl">
                  Height
                </div>
              </div>

              <div className="text-md ml-8 mt-2 justify-center self-start rounded-[100px] bg-blue-50 px-3 py-1.5 text-center font-medium capitalize leading-7 text-cyan-600 max-md:ml-2.5 md:text-xl">
                5’ 66’’
              </div>
              <div className="mt-6 flex items-center gap-1 whitespace-nowrap">
                <div className="text-xl leading-8 text-cyan-600 md:text-3xl">
                  <CiMap />
                </div>
                <div className="text-lg leading-8 tracking-wide text-slate-600 md:text-xl">
                  Weight
                </div>
              </div>
              <div className="text-md ml-8 mt-2 justify-center self-start rounded-[100px] bg-blue-50 px-3 py-1.5 text-center font-medium capitalize leading-7 text-cyan-600 max-md:ml-2.5 md:text-xl">
                70 KG
              </div>
              <div className="mt-6 flex items-center gap-1">
                <div className="text-xl leading-8 text-cyan-600 md:text-3xl">
                  <CiMap />
                </div>
                <div className="text-lg leading-8 tracking-wide text-slate-600 md:text-xl">
                  Body Type
                </div>
              </div>
              <div className="text-md ml-8 mt-2 flex justify-center gap-1.5 self-start rounded-[100px] border border-solid border-gray-200 bg-blue-50 bg-opacity-50 px-5 py-2 font-medium capitalize leading-7 text-cyan-600 max-md:ml-2.5 md:py-4 md:text-xl">
                <select className="rounded-[100px] bg-blue-50 bg-opacity-50 max-md:ml-2.5">
                  <option>Mesomorph</option>
                  <option>Endomorph</option>
                  <option>Ectomorph</option>
                </select>
              </div>
              <div className="mt-6 flex items-center gap-1 whitespace-nowrap text-xl leading-8 tracking-wide text-slate-600">
                <div className="text-xl leading-8 text-cyan-600 md:text-3xl">
                  <IoLanguage />
                </div>

                <div className="text-lg leading-8 text-slate-600 md:text-xl">
                  Language
                </div>
              </div>
              <div className="text-md ml-8 mt-2 justify-center self-start rounded-[100px] bg-pink-50 px-3 py-1.5 text-center font-medium capitalize leading-7 text-pink-400 max-md:ml-2.5 md:text-xl">
                Gujarati, Hindi, English
              </div>
              <div className="mt-6 flex items-center gap-1 text-xl leading-8 tracking-wide text-slate-600">
                <div className="text-xl leading-8 text-cyan-600 md:text-3xl">
                  {" "}
                  <FaSmoking />
                </div>
                <div className="text-lg leading-8 text-slate-600 md:text-xl">
                  Smoking habbits
                </div>
              </div>
              <div className="text-md ml-9 mt-2 justify-center self-start rounded-[100px] bg-green-100 px-3 py-1.5 text-center font-medium capitalize leading-7 text-green-700 max-md:ml-2.5 md:text-xl">
                Non - Smoker
              </div>
              <div className="mt-6 flex items-center gap-1 text-xl leading-8 tracking-wide text-slate-600">
                <div className="text-xl leading-8 text-cyan-600 md:text-3xl">
                  {" "}
                  <FaWineGlassAlt />{" "}
                </div>

                <div className="text-lg leading-8 text-slate-600 md:text-xl">
                  Drinking habbit
                </div>
              </div>
              <div className="text-md ml-7 mt-2 justify-center self-start rounded-[100px] bg-gray-200 px-3 py-1.5 text-center font-medium capitalize leading-7 text-slate-900 max-md:ml-2.5 md:text-xl">
                Non - alcoholic
              </div>
              <div className="mt-6 flex items-center gap-1 whitespace-nowrap">
                <div className="text-xl leading-8 text-cyan-600 md:text-3xl">
                  <CiMap />
                </div>
                <div className="text-lg leading-8 tracking-wide text-slate-600 md:text-xl">
                  Diet
                </div>
              </div>
              <div className="text-md ml-8 mt-2 justify-center self-start whitespace-nowrap rounded-[100px] bg-neutral-100 px-3 py-1.5 text-center font-medium capitalize leading-7 text-slate-900 max-md:ml-2.5 md:text-xl">
                Veg
              </div>
              <div className="mt-6 flex items-center gap-2 whitespace-nowrap">
                <div className="text-xl leading-8 text-cyan-600 md:text-3xl">
                  <CiMap />
                </div>
                <div className="text-lg leading-8 tracking-wide text-slate-600 md:text-xl">
                  Complexion
                </div>
              </div>
              <div className="text-md ml-8 mt-2 justify-center self-start rounded-[100px] bg-neutral-100 px-3 py-1.5 text-center font-medium capitalize leading-7 text-slate-900 max-md:ml-2.5 md:text-xl">
                Dark Light
              </div>
            </div>
          </div>
        </div>

        <div className="h-[20rem] rounded-xl bg-white">
          <div className="flex h-[20rem] flex-col rounded-xl bg-white pb-6 shadow-sm max-md:max-w-full">
            <div
              className="justify-center border-b border-solid border-zinc-300 px-6 py-4 text-lg leading-6 tracking-wide text-cyan-600 max-md:max-w-full max-md:px-5 md:text-xl"
              style={{ fontFamily: "Proxima-Nova-Bold, sans-serif" }}
            >
              Religious Background
            </div>
            <div className="mt-6 flex flex-col px-6 max-md:max-w-full max-md:px-5">
              <div className="flex justify-between gap-0 max-md:flex-wrap">
                <div className="text-md flex-1 font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                  Religion
                </div>
                <div className="justify-center self-start whitespace-nowrap rounded-[100px] bg-blue-50 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-blue-600">
                  Hindu
                </div>
              </div>
              <div className="mt-4 flex justify-between gap-0 max-md:flex-wrap">
                <div className="text-md flex-1 font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                  Sub community
                </div>
                <div className="justify-center self-start rounded-[100px] bg-orange-100 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-slate-900">
                  Not Specified
                </div>
              </div>
              <div className="mt-4 flex justify-between gap-0 font-normal max-md:flex-wrap">
                <div className="text-md flex-1 leading-8 tracking-wide text-slate-600 md:text-xl">
                  Community
                </div>
                <div className="justify-center self-start rounded-[100px] bg-purple-100 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-violet-600">
                  Suthar
                </div>
              </div>
              <div className="mt-4 flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
                <div className="text-md font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                  Gothra / Gothram
                </div>
                <div className="justify-center self-start rounded-[100px] bg-pink-50 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-pink-400">
                  Not Specified
                </div>
              </div>
              <div className="mt-4 flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
                <div className="text-md font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                  Mother Tongue
                </div>
                <div className="justify-center self-start whitespace-nowrap rounded-[100px] bg-green-100 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-green-700">
                  Gujarati
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[20rem] rounded-xl bg-white">
          <div
            className="justify-center border-b border-solid border-zinc-300 px-6 py-4 text-lg leading-6 tracking-wide text-cyan-600 max-md:max-w-full max-md:px-5 md:text-xl"
            style={{ fontFamily: "Proxima-Nova-Bold, sans-serif" }}
          >
            Location Background
          </div>
          <div className="mt-6 flex flex-col px-6 max-md:max-w-full max-md:px-5">
            <div className="flex justify-between gap-0 max-md:flex-wrap">
              <div className="text-md flex-1 font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                Current location
              </div>
              <div className="justify-center self-start whitespace-nowrap rounded-[100px] bg-blue-50 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-blue-600">
                Hindu
              </div>
            </div>
            <div className="mt-4 flex justify-between gap-0 max-md:flex-wrap">
              <div className="text-md flex-1 font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                City of residence
              </div>
              <div className="justify-center self-start rounded-[100px] bg-purple-100 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-violet-600">
                Suthar
              </div>
            </div>
            <div className="mt-4 flex justify-between gap-0 max-md:flex-wrap">
              <div className="text-md flex-1 font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                Nationality
              </div>
              <div className="justify-center self-start rounded-[100px] bg-orange-100 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-slate-900">
                Not Specified
              </div>
            </div>
            <div className="mt-4 flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
              <div className="text-md font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                Citizenship
              </div>
              <div className="justify-center self-start rounded-[100px] bg-pink-50 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-pink-400">
                Not Specified
              </div>
            </div>
            <div className="mt-4 flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
              <div className="text-md font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                Residency visa status
              </div>
              <div className="justify-center self-start whitespace-nowrap rounded-[100px] bg-green-100 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-green-700">
                Gujarati
              </div>
            </div>
          </div>
        </div>
        <div className="h-[12rem] rounded-xl">
          <div className="mb-10 flex max-w-[499px] flex-col pb-9 leading-8 text-slate-900">
            <div className="w-full text-lg font-semibold leading-[110%] text-cyan-600 max-md:max-w-full md:text-xl">
              Interest and hobbies
            </div>
            <div className="mt-4 flex gap-2.5 whitespace-nowrap text-center capitalize tracking-wide max-md:pr-5 md:flex-wrap">
              <div className="justify-center rounded-[100px] bg-gray-200 px-3 py-1.5">
                Photographie
              </div>
              <div className="justify-center rounded-[100px] bg-gray-200 px-3 py-1.5">
                Cinema
              </div>
              <div className="justify-center rounded-[100px] bg-gray-200 px-3 py-1.5">
                Technologie
              </div>
            </div>
            <div className="mt-2.5 flex items-start gap-2.5 whitespace-nowrap text-center capitalize tracking-wide max-md:pr-5 md:flex-wrap">
              <div className="flex flex-col self-stretch">
                <div className="flex gap-2.5">
                  <div className="justify-center rounded-[100px] bg-gray-200 px-3 py-1.5">
                    Musique
                  </div>
                  <div className="justify-center rounded-[100px] bg-gray-200 px-3 py-1.5">
                    Sport
                  </div>
                </div>
                <div className="mt-2.5 justify-center rounded-[100px] bg-gray-200 px-3 py-1.5">
                  Théâtre
                </div>
              </div>
              <div className="justify-center rounded-[100px] bg-gray-200 px-3 py-1.5">
                Voyages
              </div>
              <div className="justify-center rounded-[100px] bg-gray-200 px-3 py-1.5">
                Lecture
              </div>
            </div>
          </div>
        </div>
        <div className="h-58 rounded-xl bg-white">
          <div className="flex flex-col rounded-xl border border-solid border-gray-200 bg-white pb-6 shadow-sm">
            <div
              className="justify-center border-b border-solid border-zinc-300 px-6 py-4 text-lg leading-6 tracking-wide text-cyan-600 max-md:px-5 md:text-xl"
              style={{ fontFamily: "Proxima-Nova-Bold, sans-serif" }}
            >
              Education and financial
            </div>
            <div className="mt-6 flex flex-col px-6 max-md:px-5">
              <div className="flex justify-between gap-2 whitespace-nowrap pr-8 max-md:pr-5">
                <div className="text-md flex items-center justify-between gap-2 self-start leading-8 tracking-wide text-slate-600 md:text-xl">
                  <span className="text-[#007EAF]">
                    <FaUserGraduate />
                  </span>
                  <div>Occupation</div>
                </div>
                <div className="justify-center rounded-[100px] bg-orange-100 px-3 py-1.5 text-center text-sm font-medium capitalize leading-7 text-slate-900 md:text-lg">
                  MBA
                </div>
              </div>
              <div className="mt-4 flex justify-between gap-2 whitespace-nowrap pr-8 max-md:pr-5">
                <div className="text-md flex items-center justify-between gap-2 self-start leading-8 tracking-wide text-slate-600 md:text-xl">
                  <span className="text-[#007EAF]">
                    <FaUserGraduate />
                  </span>
                  <div>Education</div>
                </div>
                <div className="justify-center rounded-[100px] bg-orange-100 px-3 py-1.5 text-center text-sm font-medium capitalize leading-7 text-slate-900 md:text-lg">
                  MBA
                </div>
              </div>
              <div className="mt-4 flex justify-between gap-2 pr-8 max-md:pr-5">
                <div className="text-md flex items-center justify-around gap-2 self-start whitespace-nowrap leading-8 tracking-wide text-slate-600 md:text-xl">
                  <span className="text-[#007EAF]">
                    <FaUserGraduate />
                  </span>
                  <div>Income</div>
                </div>
                <div className="justify-center rounded-[100px] bg-orange-100 px-3 py-1.5 text-center text-sm font-medium capitalize leading-7 text-slate-900 md:text-lg">
                  $ <span className="">80k - 100k</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Match;
