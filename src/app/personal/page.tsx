"use client";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {usePersonalDetialsMutation} from "../../Redux/Api/form.api";
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import Router from "next/router";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import "../../app/font.css";
import { toast } from 'sonner'
import { RootState } from "@/Redux/store";
import withAuth from "@/Components/WithAuth/WithAuth";
import { useSelector } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';




const personalDetailsSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  displayName: z.string().min(1, { message: "Display name is required" }),
  maritalStatus: z.enum(["Yes", "No"], { message: "Marital status is required" }), 
  numberOfChildren: z.enum(["0", "1", "2", "3", "4", "5"], { message: "Number of children is required" }),
  contactNumber: z
    .string()
    .min(1, { message: "Contact number is required" })
    .length(10, { message: "Contact number must be 10 digits" })
    .regex(/^\d+$/, { message: "Contact number must contain only digits" }),
    aboutYourSelf: z.string().min(1, { message: "Description is required" }),

   
  });


 


const PersonalDetailsForm  = () => {

  const [personalDetials, { isLoading }] = usePersonalDetialsMutation();

  const accessToken = useSelector((state:RootState) => state.userReducer.accessToken);




  const Router = useRouter();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(personalDetailsSchema),
  });


  
  type ApiResponse = {
    success: boolean;
    message: string;
  };
  type FetchBaseQueryErrorWithData = FetchBaseQueryError & {
    data: ApiResponse;
  };

  const onSubmit = async (data: any) => {
    try {
      const res = await personalDetials(data);
  
      if (res?.error) {
        const errorData = res.error as FetchBaseQueryErrorWithData;
  
        if (errorData.data?.success === false) {
          toast.error(errorData.data.message);
          return;
        }
      }
  
      if (res?.data) {
        const successData = res.data as ApiResponse;
        toast.success(successData.message);
        Router.push("/qualification");
      }
      
    } catch (error) {
      toast.error("An unexpected error occurred.");
    }
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
          onSubmit={handleSubmit(onSubmit)}
          className="md:px-30 mt-5 grid grid-cols-1 md:grid-cols-2 md:gap-2 xl:px-40 2xl:px-60 3xl:mt-20 3xl:px-60"
        >
          <div className="col-span-2 mt-2">
            <label className="block text-white">Your name*</label>
            <div className="flex flex-col md:flex-row">
              <div className="mt-2 w-full md:mt-0 md:w-1/2 md:pr-2">
                <input
                  type="text"
                  {...register("firstName")}
                  placeholder="First name"
                  className="w-full rounded bg-[#F9F5FFE5] p-2"
                />
                {errors.firstName && (
                  <p className="text-orange-200 text-sm mt-1">
                    {errors?.firstName?.message?.toString()}
                  </p>
                )}
              </div>
              <div className="mt-2 w-full md:mt-0 md:w-1/2 md:pl-2">
                <input
                  type="text"
                  {...register("lastName")}
                  placeholder="Last name"
                  className="w-full rounded border border-gray-300 bg-[#F9F5FFE5] p-2"
                />
                {errors.lastName && (
                  <p className="text-orange-200 text-sm mt-1">
                    {errors?.lastName?.message?.toString()}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="col-span-2 mt-2">
            <label className="block text-white">Display name</label>
            <input
              type="text"
              {...register("displayName")}
              placeholder="Display name"
              className="w-full rounded border border-gray-300 bg-[#F9F5FFE5] p-2"
            />
          </div>
          {errors.displayName && (
            <p className="text-orange-200 text-sm mt-1">
              {errors?.displayName?.message?.toString()}
            </p>
          )}

          <div className="col-span-2 mt-2">
            <label className="block text-white">Contact number*</label>
            <input
              type="text"
              {...register("contactNumber")}
              placeholder="Contact number"
              className="w-full rounded border-none bg-[#F9F5FFE5] p-2"
            />
            {errors.contactNumber && (
              <p className="text-orange-200 text-sm mt-1">
                {errors?.contactNumber?.message?.toString()}
              </p>
            )}
          </div>

          <div className="col-span-2 mt-2 grid gap-4 md:grid-cols-2">
            <div className="col-span-1">
              <label className="block text-white">Marital status*</label>
              <select
                {...register("maritalStatus")}
                className="w-full rounded border bg-[#F9F5FFE5] p-2 text-[#838E9E]"
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              {errors.maritalStatus && (
                <p className="text-orange-200 text-sm mt-1">
                  {errors?.maritalStatus?.message?.toString()}
                </p>
              )}
            </div>

            <div className="col-span-1">
              <label className="block text-white">Number of children</label>
              <select
                {...register("numberOfChildren")}
                className="w-full rounded border bg-[#F9F5FFE5] p-2 text-[#838E9E]"
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              {errors.numberOfChildren && (
                <p className="text-orange-200 text-sm mt-1">
                  {errors?.numberOfChildren?.message?.toString()}
                </p>
              )}
            </div>
          </div>

          <div className="col-span-2 mt-2">
            <label className="block text-white">
              Description about yourself*
            </label>
            <textarea
             {...register("aboutYourSelf")}             
               placeholder="Description"
              rows={4}
              className="w-full resize-none rounded border border-gray-300 bg-[#F9F5FFE5] p-2"
            ></textarea>
            {errors.aboutYourSelf && (
              <p className="text-orange-200 text-sm mt-1">
                {errors?.aboutYourSelf?.message?.toString()}
              </p>
            )}
          </div>

          <div className="col-span-2 mt-2 mb-4 flex justify-end">
            <button
              type="submit"
              className="w-full md:w-32 rounded bg-[#F9F5FFE5] px-4 py-2 text-[#007EAF]"
            >
                {isLoading ? <LoadingOutlined className="text-[#007EAF] animate-spin" /> : 'Save'}
                </button>
          </div>
        </form>
      </div>
    </div>
  );
  
};

export default withAuth(PersonalDetailsForm);
