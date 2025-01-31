"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Cookies from "js-cookie";

import { useRouter } from "next/navigation";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Question4 from "./Question4";
import Question5 from "./Question5";
import Question8 from "./Question8";
import Question9 from "./Question9";
import Question10 from "./Question10";
import Question6 from "./Question6";
import Question7 from "./Question7";
import Question11 from "./Question11";

const Multistep = () => {
  type SelectedOption = {
    questionId: number;
    answerValue: string | string[];
  };


  const [selectedOptions, setSelectedOptions] = useState<
    { questionId: number; answerValue: string }[]
  >([]);
  

  console.log(selectedOptions,"selected")

  const [page, setPage] = useState(0);
  const router = useRouter();

  const PageTitles = [
    "Question 1/11",
    "Question 2/11",
    "Question 3/11",
    "Question 4/11",
    "Question 5/11",
    "Question 6/11",
    "Question 7/11",
    "Question 8/11",
    "Question 9/11",
    "Question 10/11",
    "Question 11/11",
  ];

  

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return (
          <Question1
            selectedOptions={selectedOptions}
            handleOptionChange={handleOptionChange}
          />
        );
      case 1:
        return (
          <Question2
            selectedOptions={selectedOptions}
            handleOptionChange={handleOptionChange}
          />
        );
      case 2:
        return (
          <Question3
            selectedOptions={selectedOptions}
            handleOptionChange={handleOptionChange}
          />
        );
      case 3:
        return (
          <Question4
            selectedOptions={selectedOptions}
            handleOptionChange={handleOptionChange}
          />
        );
      case 4:
        return (
          <Question5
            selectedOptions={selectedOptions}
            handleOptionChange={handleOptionChange}
          />
        );
      case 5:
        return (
          <Question6
            selectedOptions={selectedOptions}
            handleOptionChange={handleOptionChange}
          />
        );
      case 6:
        return (
          <Question7
            selectedOptions={selectedOptions}
            handleOptionChange={handleOptionChange}
          />
        );
      case 7:
        return (
          <Question8
            selectedOptions={selectedOptions}
            handleOptionChange={handleOptionChange}
          />
        );
      case 8:
        return (
          <Question9
            selectedOptions={selectedOptions}
            handleOptionChange={handleOptionChange}
          />
        );
      case 9:
        return (
          <Question10
            selectedOptions={selectedOptions}
            handleOptionChange={handleOptionChange}
          />
        );
      case 10:
        return (
          <Question11
            selectedOptions={selectedOptions}
            handleOptionChange={handleOptionChange}
          />
        );

      default:
        return null;
    }
  };

  const handlePrevious = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleOptionChange = (questionId: number, answerValue: string | string[]) => {
    setSelectedOptions((prev) => {

      const updatedOptions = prev.filter(
        (option) => option.questionId !== questionId
      );
      return [...updatedOptions, { questionId, answerValue }];
    });
  };

  const handleNext = () => {
    if (page < PageTitles.length - 1) {
      setPage(page + 1);
    }
    if(page === PageTitles.length - 1){
      Cookies.set("answers", JSON.stringify(selectedOptions))
      router.push("/register")
      
    }

  };


  return (
    <div className="min-w-screen relative flex min-h-screen flex-col items-center bg-[#007EAF] px-4 text-white md:px-28 lg:px-60 3xl:px-60">
      <div className="mt-5 flex w-full items-center justify-between md:mt-10">
        <Image
          src="/logowhite.png"
          width={400}
          height={500}
          alt="Wedlock Logo"
          className="w-72 h-24 mx-auto mb-2"
        />
      </div>

      <div className="mt-10 w-full text-center xl:w-[40vw]">
        <h2 className="text-2xl" style={{ fontFamily: "Proxima-Nova-Bold, sans-serif" }}>
          {PageTitles[page]}
        </h2>
        <div className="mb-6 mt-1 h-2.5 rounded-full bg-[#E0ECFF]">
          <div
            className="h-2.5 rounded-full bg-[#31F7C8]"
            style={{
              width: `${((page + 1) / PageTitles.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      <div className="form-container">
        <div className="form-body max-w-xl">{PageDisplay()}</div>

        <div className="form-footer">
          <div className="bottom-20 flex w-full flex-col items-center justify-end px-2 md:absolute md:right-20 md:flex-row lg:right-40 xl:mt-6 3xl:right-60">
            <div className="flex w-full items-end justify-between md:justify-end md:gap-10">
              {page > 0 ? (
                <button
                  type="button"
                  className="h-[48px] gap-2 text-xl text-white"
                  onClick={handlePrevious}
                >
                  Back
                </button>
              ) : (
                <button
                  type="button"
                  className="h-[48px] gap-2 text-xl text-white"
                  onClick={() => router.push("/")}
                >
                  Back
                </button>
              )}

              <button
                type="button"
                className="flex h-[48px] w-full items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-[#007EAF] md:w-auto xl:mt-20 md:mt-0"
                onClick={handleNext}
              >
                Continue <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Multistep;
