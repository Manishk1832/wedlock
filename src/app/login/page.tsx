'use client'
import React, { useEffect } from "react";
import Input from "../../Components/Input";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from "next/navigation";
import {useLoginMutation} from "@/Redux/Api/user.api";
import {setUser} from "@/Redux/Reducers/user.reducer";
import { useDispatch, useSelector } from "react-redux";
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { toast } from 'sonner'
import { RootState } from "@/Redux/store";
import { z } from 'zod'
import { LoadingOutlined } from '@ant-design/icons';
import ProtectedRoute from "@/Components/ProtectedRoute";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, "Password is required"),
});

type FormData = z.infer<typeof loginSchema>;


const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { isLocationFormFilled,isOtherFormFilled,isQualificationFormFilled,isPersonalFormFilled,isImageFormFilled,accessToken } = useSelector((state: RootState) => state.userReducer);


  const [login, { isLoading }] = useLoginMutation();

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  type ApiResponse = {
    success: boolean;
    message: string;
  };

  type FetchBaseQueryErrorWithData = FetchBaseQueryError & {
    data: ApiResponse;
  };
  

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const res = await login(data);

      if ('error' in res && res.error) {
        const errorData = res.error as FetchBaseQueryErrorWithData;
  
        if (errorData.data?.success === false) {
          toast.error(errorData.data.message); 
          return;
        }
      }

      dispatch(setUser(res.data));

     
      const successData = res.data as ApiResponse;
      toast.success(successData.message);

     
      

      if(accessToken){
        router.push("/profile");
      }

     
    } catch (error) {
      toast.error("An error occurred");

    }

  }

  useEffect(() => {

    if (accessToken) {
      if (!isPersonalFormFilled) {
        router.push("/personal");
        return;
      }
      if (!isLocationFormFilled) {
        router.push("/location");
        return;
      }
      if (!isImageFormFilled) {
        router.push("/photoupload");
        return;
      }
      if (!isOtherFormFilled) {
        router.push("/otherdetails");
        return;
      }
      if (!isQualificationFormFilled) {
        router.push("/qualification");
        return;
      }

      router.push("/user/");
    }
  }, [
    isPersonalFormFilled,
    isLocationFormFilled,
    isImageFormFilled,
    isOtherFormFilled,
    isQualificationFormFilled,
    accessToken,
    router, 
  ]);





  return (
    <div className="min-w-screen h-screen flex flex-col items-center justify-center  bg-[#007EAF] ">
      <div className="flex items-center justify-center mb-10  ">
        <Image src="/logowhite.png" alt="" width={268} height={90} className='w-72 h-24 fixed top-4' />
      </div>

      <div className="flex flex-col items-center justify-center  mt-20">
        <div className="bg-white flex items-center justify-center rounded-md w-12 h-12">
          <Image src="/login.png" alt="login" width={20} height={20} />
        </div>
      </div>

       <div className="flex flex-col items-center justify-center text-white mt-5">
          <h1 className="text-2xl md:text-4xl font-bold">Log in to your account</h1>
          <p className="mt-4 md:text-lg text-center"> Welcome back! Please enter your details. </p>
        </div>

        <div  className="w-full max-w-md px-2   py-2 mt-4">
          <form  onSubmit={handleSubmit(onSubmit)}>
            <div className="rounder-[8px]">
              <Input
              {...register("email")}
              placeholder="Enter your email" label="Email"  
              />
            {errors.email && <p className="text-orange-200">{errors.email.message}</p>}

              <Input
              {...register("password")}
              placeholder="Enter your password" label="Password"
  
              />
            {errors.password && <p className="text-orange-200">{errors.password.message}</p>}

            
            </div>
            <div className="flex items-center justify-end mb-8  text-[#F9F5FF] gap-1 text-lg">
                <button>Forgot password</button>

            </div>

            
              <button type="submit" className="bg-white text-[#007EAF] w-full h-12 rounded-md">
                 
                {isLoading ? <LoadingOutlined className="text-[#007EAF] animate-spin" /> : 'Confirm'}

              </button>

            </form>
              <button  className=" bg-transparent border  text-[#ffffff] mt-2 w-full h-12 rounded-md" onClick={() => router.push("/questions/")} >
                Create an account
              </button>

            </div>

    </div> 
  );
};

export default Login;
