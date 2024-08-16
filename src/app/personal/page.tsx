"use client";
import Image from "next/image";
import React, { useState } from "react";
import "../../app/font.css";

const PersonalDetailsForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    displayName: "",
    contactNumber: "",
    maritalStatus: "",
    numberOfChildren: "",
    description: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log("Form data:", formData);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#007EAF] px-5 md:px-20 lg:px-40 3xl:px-60">
     <Image
            src="/logowhite.png"
            width={400}
            height={500}
            alt="Wedlock Logo"
            className="w-72 h-24 mx-auto  mb-2 "
          />

      <div className="mt-5 w-full  flex-grow xl:mt-20 2xl:mt-10">
        <div className="mb-4 text-center text-white md:mb-10">
          <h1
            className="text-2xl md:mb-2 md:text-3xl 2xl:text-5xl"
            style={{ fontFamily: "Proxima-Nova-Bold, sans-serif" }}
          >
            Add your personal details
          </h1>
          <p className="text-sm leading-6 xl:text-xl">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="md:px-30 mt-5  grid grid-cols-1 md:grid-cols-2 md:gap-2  xl:px-40 2xl:px-60 3xl:mt-20 3xl:px-60"
        >
          <div className="col-span-2 mt-2">
            <label className="block text-white">Your name*</label>
            <div className="flex flex-col md:flex-row">
              <div className="mt-2 w-full md:mt-0 md:w-1/2 md:pr-2">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full rounded bg-[#F9F5FFE5] p-2"
                  required
                />
              </div>
              <div className="mt-2 w-full md:mt-0 md:w-1/2 md:pl-2">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full rounded border border-gray-300 bg-[#F9F5FFE5] p-2"
                  required
                />
              </div>
            </div>
          </div>

          <div className="col-span-2 mt-2">
            <label className="block text-white">Display name</label>
            <input
              type="text"
              name="displayName"
              placeholder="Display name"
              value={formData.displayName}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 bg-[#F9F5FFE5] p-2"
            />
          </div>

          <div className="col-span-2 mt-2">
            <label className="block text-white">Contact number*</label>
            <input
              type="text"
              name="contactNumber"
              placeholder="Contact number"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full rounded border-none bg-[#F9F5FFE5] p-2"
              required
            />
          </div>
          <div className="col-span-2 mt-2 grid gap-4 md:grid-cols-2">
            <div className="col-span-1">
              <label className="block text-white">Marital status*</label>
              <select
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
                className="w-full rounded border bg-[#F9F5FFE5] p-2 text-[#838E9E]"
                required
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="col-span-1">
              <label className="block text-white">Number of children</label>
              <select
                name="numberOfChildren"
                value={formData.numberOfChildren}
                onChange={handleChange}
                className="w-full rounded border bg-[#F9F5FFE5] p-2 text-[#838E9E]"
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>

          <div className="col-span-2 mt-2">
            <label className="block text-white">
              Description about yourself*
            </label>
            <textarea
              name="description"
              placeholder="Description"
              rows={4}
              value={formData.description}
              onChange={handleChange}
              className="w-full resize-none rounded border border-gray-300 bg-[#F9F5FFE5] p-2"
              required
            ></textarea>
          </div>
        </form>
      </div>

      <div className="mb-5 flex w-full justify-end py-8 pb-4 xl:px-10 2xl:mb-4 2xl:px-0 3xl:mb-20 3xl:px-0">
        <button
          type="submit"
          className="w-full rounded bg-[#F9F5FFE5] px-4 py-2 text-[#007EAF] md:w-20 2xl:w-32"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default PersonalDetailsForm;
