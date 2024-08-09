"use client";
import React, { useState } from "react";
import Image from "next/image";
import "../../app/font.css";

const Page = () => {
  const caste = [
    {
      Varna: "Brahmins",
      Jatis: ["Saraswat", "Gaur", "Iyer", "Iyengar"],
    },
    {
      Varna: "Kshatriyas",
      Jatis: ["Rajput", "Maratha", "Nair"],
    },
    {
      Varna: "Vaishyas",
      Jatis: ["Agrawal", "Khandelwal", "Reddy"],
    },
    {
      Varna: "Shudras",
      Jatis: ["Yadav", "Jat", "Kurmi", "Teli"],
    },
    {
      Group: "Dalits",
      Jatis: ["Chamar", "Mahar", "Matang"],
    },
    {
      Group: "Adivasis",
      Tribes: ["Gond", "Santhal", "Bhil"],
    },
  ];

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
            Other Details
          </h1>
          <p className="text-sm leading-6 xl:text-xl">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <form
          action=""
          className="md:px-30 mt-5 grid grid-cols-1 md:grid-cols-2 md:gap-2 md:px-20 xl:px-40 2xl:px-60 3xl:mt-20 3xl:px-60"
        >
          <div>
            <label className="block text-white">Caste</label>
            <div className="mb-4">
              <select
                name="caste"
                className="h-10 w-full rounded border bg-[#F9F5FFE5] p-2 text-[#838E9E]"
              >
                <option value="" disabled selected>
                  Caste
                </option>
                {caste.map((caste, i) => {
                  return (
                    <option key={i} value={caste.Varna}>
                      {caste.Varna}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-white">Community</label>
            <div className="mb-4">
              <select
                name="subcaste"
                className="h-10 w-full rounded border bg-[#F9F5FFE5] p-2 text-[#838E9E]"
              >
                <option value="" disabled selected>
                  Community
                </option>
                {caste?.map((community) => {
                  return community.Jatis?.map((jati) => {
                    return (
                      <option value={jati} key={jati}>
                        {jati}
                      </option>
                    );
                  });
                })}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-white">Date of Birth</label>
            <div className="mb-4">
              <input
                type="string"
                name="dob"
                placeholder="Date"
                className="h-10 w-full rounded border bg-[#F9F5FFE5] p-2 text-[#838E9E]"
              />
            </div>
          </div>

          <div>
            <label className="block text-white">Time of Birth</label>
            <div className="mb-4">
              <input
                type="string"
                name="time"
                placeholder="Time"
                className="h-10 w-full rounded border bg-[#F9F5FFE5] p-2 text-[#838E9E]"
              />
            </div>
          </div>

          <div>
            <label className="block text-white">Religion</label>
            <div className="mb-4">
              <select
                name="religion"
                className="h-10 w-full rounded border bg-[#F9F5FFE5] p-2 text-[#838E9E]"
              >
                <option value="" disabled selected>
                  Religion
                </option>
                <option value="Hindu">Hindu</option>
                <option value="Muslim">Muslim</option>
                <option value="Christian">Christian</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-white">Place of Birth</label>
            <div className="mb-4">
              <input
                type="text"
                name="place"
                placeholder="Place"
                className="h-10 w-full rounded border bg-[#F9F5FFE5] p-2 text-[#838E9E]"
              />
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

export default Page;
