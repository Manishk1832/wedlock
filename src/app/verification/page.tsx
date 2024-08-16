"use client";
import React, { useState } from "react";
import Input from "../../Components/Input";
import Image from "next/image";
import Cookies from "js-cookie";
import {useVerifyOtpMutation} from "../../Redux/Api/user.api";
import { useDispatch } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from "next/navigation";
import { z } from 'zod';
import { toast } from 'sonner'


const fieldNames = ['code0', 'code1', 'code2', 'code3'] as const;


// Define Zod schema
const verificationSchema = z.object({
  code0: z.string().min(1, "Required").length(1, "Must be 1 character"),
  code1: z.string().min(1, "Required").length(1, "Must be 1 character"),
  code2: z.string().min(1, "Required").length(1, "Must be 1 character"),
  code3: z.string().min(1, "Required").length(1, "Must be 1 character"),
});

type VerificationInputs = z.infer<typeof verificationSchema>;

const Verification = () => {
  const router = useRouter();
  const [ verifyOtp, {isLoading}] = useVerifyOtpMutation();
  

  const { register, handleSubmit, formState: { errors } } = useForm<VerificationInputs>({
    resolver: zodResolver(verificationSchema),
  });


  type ApiResponse = {
    success: boolean;
    message: string;
  };

  type FetchBaseQueryErrorWithData = FetchBaseQueryError & {
    data: ApiResponse;
  };
  
  const onSubmit: SubmitHandler<VerificationInputs> = async (data) => {


    const activationCode = data.code0 + data.code1 + data.code2 + data.code3;
   const activationToken = Cookies.get('activationToken');

   const res = await verifyOtp({activationCode,activationToken});

   if ('error' in res && res.error) {
    const errorData = res.error as FetchBaseQueryErrorWithData;

    if (errorData.data?.success === false) {
      toast.error(errorData.data.message); 
      return;
    }
  }
  const successData = res.data as ApiResponse;
  toast.success(successData.message);
   Cookies.remove("activationToken")
    router.push("/createpassword");
  };

  return (
    <div className="min-w-screen min-h-screen flex flex-col items-center justify-center  bg-[#007EAF] ">
      <div className="flex items-center justify-center mb-14 ">
        <Image src="/logowhite.png" alt="" width={268} height={90} />
      </div>
      <div className="flex flex-col items-center justify-center mt-8 mb-2">
        <div className="bg-white flex items-center justify-center rounded-md w-12 h-12  ">
          <Image src="/lock.png" alt="Star" width={16} height={18} />
        </div>

        <div className="flex flex-col items-center justify-center text-white mt-4">
          <h1 className="text-4xl font-bold">Verification code</h1>
          <p className="mt-4 md:text-lg text-center">
            Enter verification code which is sent to your email <br /> address
            and you verify
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-4">
              {[0, 1, 2, 3].map((index) => (
                <div key={index}>
                  <Input
                    label=""
                    {...register(fieldNames[index] as typeof fieldNames[number])}                    className={`w-16 h-16 text-center rounded-xl text-3xl text-[#007EAF] placeholder-[#007EAF] outline-gray-400 ${errors[fieldNames[index] as typeof fieldNames[number]] ? 'border-red-500' : ''}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    placeholder="0"
                  />
                  {errors[fieldNames[index] as typeof fieldNames[number]] && (
                    <p className="text-red-500 text-sm">
                      {errors[fieldNames[index] as typeof fieldNames[number]]?.message}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center mt-8 text-[#F9F5FF] gap-1 text-lg">
              <p>Did you not receive code? </p>
              <button type="button"> Click to resend.</button>
            </div>
            <button className="bg-white text-[#007EAF] w-full h-12 rounded-xl mt-6">
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Verification;
 