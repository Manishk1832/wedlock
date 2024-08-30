"use client";
import React from "react";
import Image from "next/image";
import "../../app/font.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useOtherDetailsMutation } from "@/Redux/Api/form.api";
import { RootState } from "@/Redux/store";
import { useSelector } from 'react-redux';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import {toast} from 'sonner'
import ProtectedRoute from "@/Components/ProtectedRoute";

import { useRouter } from "next/navigation";
// caste, community, dateOfBirth, timeOfBirth, religion, placeOfBirth

const otherDetailsSchema = z.object({
  caste: z.string().min(1, "Caste is required"),
  community: z.string().min(1, "Community is required"),
  dateOfBirth: z.string().min(1, "Date of Birth is required"),
  timeOfBirth: z.string().min(1, "Time of Birth is required"),
  religion: z.string().min(1, "Religion is required"),
  placeOfBirth: z.string().min(1, "Place of Birth is required"),
});

const OtherDetailsForm = () => {
  const casteOptions = [
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

  const [otherDetails] = useOtherDetailsMutation();
  const Router = useRouter();

  const accessToken = useSelector((state:RootState) => state.userReducer.accessToken);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(otherDetailsSchema),
  });


  type ApiResponse = {
    success: boolean;
    message: string;
  };
  type FetchBaseQueryErrorWithData = FetchBaseQueryError & {
    data: ApiResponse;
  };

  const onSubmit =  async(data:any) => {
    try{

      const res = await otherDetails(data);
      
      if ('error' in res && res.error) {
        const errorData = res.error as FetchBaseQueryErrorWithData;
  
        if (errorData.data?.success === false) {
          toast.error(errorData.data.message); 
          return;
        }
      }
      
      const successData = res.data as ApiResponse;
      toast.success(successData.message);

      Router.push("/")
      
    } catch(error){
      
    }
    console.log(data);
  };

  return (

    <div className="flex min-h-screen flex-col items-center justify-center bg-[#007EAF] px-5 md:px-20 lg:px-40 3xl:px-60">
      <Image
        src="/logowhite.png"
        width={400}
        height={500}
        alt="Wedlock Logo"
        className="w-72 h-24 mx-auto mb-2"
      />
      <div className="mt-5 w-full flex-grow xl:mt-20 2xl:mt-10">
        <div className="mb-6 text-center text-white md:mb-20">
          <h1
            className="text-2xl md:mb-2 md:text-3xl 2xl:text-5xl"
            style={{ fontFamily: "Proxima-Nova-Bold, sans-serif" }}
          >
            Other Details
          </h1>
          <p className="text-sm leading-6 xl:text-xl">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:px-30 mt-5 grid grid-cols-1 md:grid-cols-2 md:gap-2 md:px-20 xl:px-40 2xl:px-60 3xl:mt-20 3xl:px-60"
        >
          <div>
            <label className="block text-white">Caste</label>
            <div className="mb-4">
              <select
                {...register("caste")}
                className="h-10 w-full rounded border bg-[#F9F5FFE5] p-2 text-[#838E9E]"
              >
                <option value="" disabled selected>
                  Caste
                </option>
                {casteOptions.map((caste, i) => (
                  <option key={i} value={caste.Varna}>
                    {caste.Varna}
                  </option>
                ))}
              </select>
              {errors.caste && (
                <span className="text-orange-200">
                  {errors.caste.message?.toString()}
                </span>
              )}
            </div>
          </div>

          <div>
            <label className="block text-white">Community</label>
            <div className="mb-4 ">
              <select
                {...register("community")}
                className="h-10 w-full rounded border bg-[#F9F5FFE5] p-2 text-[#838E9E]"
              >
                <option value="" disabled selected>
                  Community
                </option>
                {casteOptions.flatMap((community) =>
                  community.Jatis?.map((jati) => (
                    <option value={jati} key={jati}>
                      {jati}
                    </option>
                  ))
                )}
              </select>
              {errors.community && (
                <span className="text-orange-200">
                  {errors.community.message?.toString()}
                </span>
              )}
            </div>
          </div>

          <div>
            <label className="block text-white">Date of Birth</label>
            <div className="mb-4">
              <input
                type="text"
                {...register("dateOfBirth")}
                placeholder="Date"
                className="h-10 w-full rounded border bg-[#F9F5FFE5] p-2 text-[#838E9E]"
              />
              {errors.dateOfBirth && (
                <span className="text-orange-200">
                  {errors.dateOfBirth.message?.toString()}
                </span>
              )}
            </div>
          </div>

          <div>
            <label className="block text-white">Time of Birth</label>
            <div className="mb-4">
              <input
                type="text"
                {...register("timeOfBirth")}
                placeholder="Time"
                className="h-10 w-full rounded border bg-[#F9F5FFE5] p-2 text-[#838E9E]"
              />
              {errors.timeOfBirth && (
                <span className="text-orange-200">
                  {errors.timeOfBirth.message?.toString()}
                </span>
              )}
            </div>
          </div>

          <div>
            <label className="block text-white">Religion</label>
            <div className="mb-4">
              <select
                {...register("religion")}
                className="h-10 w-full rounded border bg-[#F9F5FFE5] p-2 text-[#838E9E]"
              >
                <option value="" disabled selected>
                  Religion
                </option>
                <option value="Hindu">Hindu</option>
                <option value="Muslim">Muslim</option>
                <option value="Christian">Christian</option>
              </select>
              {errors.religion && (
                <span className="text-orange-200">
                  {errors.religion.message?.toString()}
                </span>
              )}
            </div>
          </div>

          <div>
            <label className="block text-white">Place of Birth</label>
            <div className="mb-4">
              <input
                type="text"
                {...register("placeOfBirth")}
                placeholder="Place"
                className="h-10 w-full rounded border bg-[#F9F5FFE5] p-2 text-[#838E9E]"
              />
              {errors.placeOfBirth && (
                <span className="text-orange-200">
                  {errors.placeOfBirth.message?.toString()}
                </span>
              )}
            </div>
          </div>
          
          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="w-full rounded-[0.5rem] bg-[#F9F5FFE5] px-4 py-2 text-[#007EAF] md:w-20 2xl:w-32"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OtherDetailsForm;
