"use client";
import React, { useState } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import Image from "next/image";

const questions = [
  {
    id: 1,
    text: "I am a",
    options: ["Men", "Women", "Non-binary"],
    text2: "I am looking for a",
    options1: ["Men", "Women", "Non-binary"],
    type: "checkbox",
  },

  {
    id: 2,
    text: "Have you tried looking for your life partner online before?",
    summary:
      "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.",
    options: ["I am new to it", "Sometimes", "Prefer not to say"],
    type: "checkbox",
  },

  {
    id: 3,
    text: "What are your wedding goals?",
    summary:
      "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.",
    options: [
      "Serious to get married soon",
      "Should understand each other first",
      "Not sure, just browsing",
    ],
    type: "checkbox",
  },
  {
    id: 4,
    text: "How long have you been looking for?",
    summary:
      "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.",
    options: [
      "Just started",
      "It's been a while",
      "My friend or family were looking for me before",
    ],
    type: "checkbox",
  },
  {
    id: 5,
    text: "For whom are you looking?",
    summary:
      "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.",
    options: ["Child", "Myself", "Sibling", "Friend", "Relative"],
    type: "checkbox",
  },
  {
    id: 6,
    text: "I am age",
    summary:
      "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.",
    options: ["18", "19", "20", "21", "22", "23"],
    type: "Dropdown",
  },
  {
    id: 7,
    text: "I am looking for a partner of age",
    summary:
      "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.",
    options: ["18", "19", "20", "21", "22", "23"],
    text2: "to",
    options1: ["18", "19", "20", "21", "22", "23"],
    type: "Dropdown",
  },
  {
    id: 8,
    text: "Are you looking for a partner living in Australia?",
    summary:
      "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.",
    options: ["Yes", "No", "Doesn't matter"],
    type: "checkbox",
  },
  {
    id: 9,
    text: "Do you believe in horoscope match?",
    summary:
      "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.",
    options: ["It's must", "Doesn't matter", "Prefer not to say"],
    type: "checkbox",
  },
  {
    id: 10,
    text: "Does religion and caste matter for your preferred partner?",
    summary:
      "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.",
    options: ["It's must", "Doesn't matter", "Prefer not to say"],
    type: "checkbox",
  },
  {
    id: 11,
    text: "What are your interests and hobbies?",
    summary:
      "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.",
    options: [
      "Sports",
      "Photography",
      "Dancing",
      "Theater",
      "Literature",
      "Art",
      "Music",
      "Cooking",
      "Cinema",
      "History",
      "Craft",
      "Pottery",
      "Carpentry",
      "Collecting",
      "None",
    ], // this is should be multiple choice
    type: "checkbox",
  },
];

const MultiStepForm: React.FC = () => {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<any[]>([]);
  const [selectedOption, setSelectedOption] = useState<any>({});
  
  console.log(selectedOption);

  const handleOptionChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;

      setSelectedOption((prev: any) => {
        // const updatedOptions = prev[name] || [];
        if (checked) {
          return {
            ...prev,
            [name]: [ value],
          };
        } else {
          return {
            ...prev,
            // [name]: updatedOptions.filter((option: string) => option !== value),
          };
        }
      });
    } else {
      setSelectedOption((prev: any) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedAnswers = [...answers, selectedOption];
    console.log(updatedAnswers);
    setAnswers(updatedAnswers);
    setSelectedOption({});
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      console.log("Form completed", updatedAnswers);
      router.push("/register");
    }
  };

  

  const handlePrevious = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const renderOptions = (question: any) => {
    if (question.type === "checkbox") {
      return (
        <>
          <div>
            <h2 className="w-full text-left text-2xl font-bold md:text-center md:text-4xl">
              {questions[currentQuestion].text &&
                questions[currentQuestion].text}
            </h2>

            <p className="text-left text-[#FFFFFF90] md:text-center">
              {questions[currentQuestion].summary}
            </p>
          </div>
          <div
            className={`grid ${
              question.options && question.options1
                ? "grid-cols-1 gap-4 md:w-auto md:grid-cols-3"
                : "w-[30%] grid-cols-1 gap-2"
            } ${
              question.options && question.options.length > 5
                ? "w-full grid-cols-3 gap-2 md:w-auto md:grid-cols-5 md:gap-4"
                : "mt-4 w-full grid-cols-1 gap-2 text-sm xl:px-60"
            } mb-2 mt-4`}
          >
            {question.options.map((option: string, index: number) => (
              <button
                className={`flex items-center justify-between rounded-xl px-1 text-sm ${
                  selectedOption[`question-${currentQuestion}`]?.includes(
                    option,
                  )
                    ? "h-12 bg-[#F9F5FF] text-[#007EAF]"
                    : "h-10 bg-[#FFFFFF80] text-white"
                } md:px-2`}
                key={index}
              >
                <label
                  htmlFor={`option-${index}`}
                  className="ml-1 block md:ml-5"
                >
                  {option}
                </label>
                <input
                  id={`option-${index}`}
                  name={`question-${currentQuestion}`}
                  type="checkbox"
                  value={option}
                  checked={
                    selectedOption[`question-${currentQuestion}`]?.includes(
                      option,
                    ) 
                  }
                  onChange={handleOptionChange}
                  className="ml-0.5 h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </button>
            ))}
          </div>

          {question.options1 && (
            <>
              <h2 className="w-full text-left text-2xl font-bold md:text-center">
                {question.text2}
              </h2>
              <div
                className={`grid ${
                  question.options1.length > 2
                    ? "w-full grid-cols-1 gap-4 px-2 md:w-auto md:grid-cols-3"
                    : "w-[30%] grid-cols-1 gap-2"
                } mb-4`}
              >
                {question.options1.map((option: string, index: number) => (
                  <button
                    className={`flex items-center justify-between rounded-xl px-1 text-sm ${
                      selectedOption[`question-${currentQuestion}-1`]?.includes(
                        option,
                      )
                        ? "h-12 bg-[#F9F5FF] text-[#007EAF]"
                        : "h-10 bg-[#FFFFFF80] text-white"
                    } md:px-2`}
                    key={index}
                  >
                    <label
                      htmlFor={`option1-${index}`}
                      className="ml-1 block md:ml-5"
                    >
                      {option}
                    </label>
                    <input
                      id={`option1-${index}`}
                      name={`question-${currentQuestion}-1`}
                      type="checkbox"
                      value={option}
                      checked={selectedOption[
                        `question-${currentQuestion}-1`
                      ]?.includes(option)}
                      onChange={handleOptionChange}
                      className={`ml-0.5 h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500 ${question.Check} `}
                    />
                  </button>
                ))}
              </div>
            </>
          )}
        </>
      );
    } else if (question.type === "Dropdown") {
      return (
        <>
          <div>
            <h2 className="my-4 text-left text-xl font-bold md:text-center md:text-4xl">
              {questions[currentQuestion].text &&
                questions[currentQuestion].text}
            </h2>
            <p className="text-[#FFFFFF90]">
              {questions[currentQuestion].summary}
            </p>
          </div>
          <div className="mt-10 flex w-full flex-col items-center justify-center px-2 md:flex-row xl:w-[40%] xl:px-0">
            {question.options && (
              <select
                name={`question-${currentQuestion}-1`}
                value={selectedOption[`question-${currentQuestion}-1`] || ""}
                onChange={handleOptionChange}
                className="h-10 w-full rounded-md bg-[#7DB9D1] px-0 text-white xl:px-5"
              >
                <option value="">Select an option</option>
                {question.options.map((option: string, index: number) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
            {question.options1 && (
              <>
                <span className="ml-2 mr-2 mt-4">{question.text2}</span>
                <select
                  name={`question-${currentQuestion}-2`}
                  value={selectedOption[`question-${currentQuestion}-2`] || ""}
                  onChange={handleOptionChange}
                  className="mt-2 h-10 w-full rounded-md bg-[#7DB9D1] px-0 text-white xl:px-5"
                >
                  <option value="">Select an option</option>
                  {question.options1.map((option: string, index: number) => (
                    <option key={index} value={option} className="">
                      {option}
                    </option>
                  ))}
                </select>
              </>
            )}
          </div>
        </>
      );
    }
  };

  return (
    <div className="min-w-screen relative flex min-h-screen flex-col items-center bg-[#007EAF] px-4 text-white md:px-28 lg:px-60 3xl:px-60">
      <div className="mt-10 flex w-full items-center justify-between md:mt-20">
      
              <Image
            src="/logowhite.png"
            width={400}
            height={500}
            alt="Wedlock Logo"
            className="w-72 h-24 mx-auto  mb-2 "
          />
      </div>

      <div className="mt-10 w-full text-center xl:w-[40vw]">
        <h2
          className="text-2xl"
          style={{ fontFamily: "Proxima-Nova-Bold, sans-serif" }}
        >
          Question {currentQuestion + 1}/{questions.length}
        </h2>
        <div className="mb-6 mt-1 h-2.5 w-full rounded-full bg-[#E0ECFF]">
          <div
            className="h-2.5 rounded-full bg-[#31F7C8]"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      <div className="w-full space-y-4">
        <form
          className="flex flex-col items-center justify-center gap-2"
          onSubmit={handleSubmit}
        >
          {renderOptions(questions[currentQuestion])}

          {/* <div className="bottom-20 flex w-full flex-col items-center justify-end px-2 md:absolute md:right-20 md:flex-row lg:right-40 xl:mt-6 3xl:right-60">
  <div>
    {currentQuestion > 0 ? (
      <button
        type="button"
        className="h-[48px] gap-2 text-xl text-white"
        onClick={handlePrevious}
      >
        back
      </button>
    ) : (
      <button
        type="button"
        className="h-[48px] gap-2 text-xl text-white"
        onClick={() => router.push("/")}
      >
        back
      </button>
    )}
  </div>

  <button
    type="submit"
    className="flex h-[48px] w-full items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-[#007EAF] md:mb-10 md:w-auto xl:mb-0 xl:mt-20"
  >
    Continue <FaArrowRightLong />
  </button>
</div> */}
<div className="bottom-20 flex w-full flex-col items-center  justify-end px-2 md:absolute md:right-20 md:flex-row  lg:right-40 xl:mt-6 3xl:right-60">
  <div className="flex w-full items-end justify-between md:justify-end md:gap-10">
    {currentQuestion > 0 ? (
      <button
        type="button"
        className="h-[48px] gap-2  text-xl text-white"
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
      type="submit"
      className="flex h-[48px] w-full items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-[#007EAF] md:w-auto xl:mt-20 md:mt-0"
    >
      Continue <FaArrowRightLong />
    </button>
      </div>
       </div>
        </form>
      </div>
    </div>
  );
};

export default MultiStepForm;
