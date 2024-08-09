"use client";
import React, { useState } from "react";
import Image from "next/image";
import "../../app/font.css";

const page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#007EAF] px-5 md:px-20 lg:px-40 3xl:px-60">
      <Image
        src="/logoau.png"
        alt="logo"
        width={150}
        height={150}
        className="mb-5 mt-10 h-auto w-40 md:w-52 lg:w-60 2xl:w-80 3xl:mt-20"
      />

      <div className="mt-5 w-full flex-grow xl:mt-20 2xl:mt-10">
        <div className="mb-6 text-center text-white md:mb-20">
          <h1
            className="text-xl md:mb-2 md:text-3xl 2xl:text-5xl"
            style={{ fontFamily: "Proxima-Nova-Bold, sans-serif" }}
          >
            {" "}
            Your Location details
          </h1>
          <p className="text-sm leading-6 xl:text-xl">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>

        <form className="md:px-30 mt-5 flex flex-col md:px-20 xl:px-40 2xl:px-60 3xl:mt-20 3xl:px-60">
          <div className="mb-4">
            <label className="block text-white">Citizenship*</label>
            <div className="">
              <select
                name="citizenship"
                className="w-full rounded-[0.5rem] border bg-[#F9F5FFE5] p-2 text-[#838E9E]"
                required
              >
                <option value="" disabled selected>
                  Select your Citizenship
                </option>
                <option value="Indian">Indian</option>
                <option value="australian">Australian</option>
                <option value="american">American</option>
                <option value="japanese">Japanese</option>
                <option value="chinese">Chinese</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-white">Current Location*</label>
            <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
              <select
                name="country"
                className="w-full rounded-[0.5rem] border bg-[#F9F5FFE5] p-2 text-[#838E9E]"
              >
                <option value="" disabled selected>
                  Country
                </option>
                <option value={"India"}>India</option>
                <option value={"Australia"}>Australia</option>
                <option value={"United States"}>United States</option>
                <option value={"Japan"}>Japan</option>
                <option value={"China"}>China</option>
                <option value={"Canada"}>Canada</option>
                <option value={"United Kingdom"}>United Kingdom</option>
                <option value={"Philippines"}>Philippines</option>
                <option value={"South Africa"}>South Africa</option>
                <option value={"South Korea"}>South Korea</option>
                <option value={"Singapore"}>Singapore</option>
                <option value={"Taiwan"}>Taiwan</option>
                <option value={"Thailand"}>Thailand</option>
                <option value={"Vietnam"}>Vietnam</option>
                <option value={"Malaysia"}>Malaysia</option>
                <option value={"Hong Kong"}>Hong Kong</option>
              </select>

              <select
                name="occupation"
                className="w-full rounded-[0.5rem] border bg-[#F9F5FFE5] p-2 text-[#838E9E]"
                required
              >
                <option value="" disabled selected>
                  State
                </option>
                <option value="uttarPradesh">Uttar Pradesh</option>
                <option value="maharashtra"> Maharashtra</option>
                <option value="nagaland">Nagaland</option>
                <option value="karnataka">Karnataka</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-white">
              Australian visa status (if applicable)*
            </label>
            <div className="mb-4">
              <select
                name="visastatus"
                className="w-full rounded-[0.5rem] border bg-[#F9F5FFE5] p-2 text-[#838E9E]"
              >
                <option value="" disabled selected>
                  Select your visa status
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
        </form>
      </div>
      <div className="mb-5 flex w-full justify-end py-8 pb-4 xl:px-10 2xl:mb-4 2xl:px-0 3xl:mb-20 3xl:px-0">
        <button
          type="submit"
          className="w-full rounded-[0.5rem] bg-[#F9F5FFE5] px-4 py-2 text-[#007EAF] md:w-20 2xl:w-32"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default page;
