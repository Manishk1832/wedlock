"use client";
import Image from "next/image";
import React, { useState } from "react";

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
    <div className="font-lato flex min-h-screen items-center justify-center bg-[#007EAF]">
      <div className="w-full max-w-md">
        <div className="relative left-16 py-6">
          <Image
            src="/logo2white.svg"
            width={300}
            height={150}
            alt="logo"
            className=""
          />
        </div>
        <h1 className="text-center text-4xl font-bold text-white">
          Your location details
        </h1>
        <p className="mb-5 text-center text-white">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <div>
          <div className="mb-4">
            <label className="block text-white">Citizenship*</label>
            <select
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
              className="w-full rounded-[0.5rem] border bg-[#F9F5FFE5] p-2 text-[#838E9E]"
              required
            >
              <option value="Qualification">Select one option</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-white">Current location*</label>
            <div className="flex space-x-4">
              <select
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
                className="w-full rounded-[0.5rem] border bg-[#F9F5FFE5] p-2 text-[#838E9E]"
                required
              >
                <option value="Yes">Country</option>
                <option value="No">No</option>
              </select>
              <select
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
                className="w-full rounded-[0.5rem] border bg-[#F9F5FFE5] p-2 text-[#838E9E]"
                required
              >
                <option value="Yes">State</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-white">
              Australian visa status (if applicable)
            </label>
            <select
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
              className="w-full rounded-[0.5rem] border bg-[#F9F5FFE5] p-2 text-[#838E9E]"
              required
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="relative -right-[50rem]">
            <button
              type="submit"
              className="rounded-[0.5rem] bg-[#F9F5FFE5] px-4 py-2 text-[#007EAF]"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsForm;
