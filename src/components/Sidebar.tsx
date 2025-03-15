"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-2 py-4 bg-[#F7F9FB] w-[20rem] h-full">
      <div
        className="flex items-center gap-3 hover:bg-[#d3e8fe] p-3 px-5 cursor-pointer"
        onClick={() => router.push("/dashboard")}>
        <Image
          src="/icons/dashboard.svg"
          alt="dashboard"
          width={20}
          height={20}
          className="w-[1.25rem] h-[1.25rem]"
        />
        <p>Dashboard</p>
      </div>
      <div
        className="flex items-center gap-3 hover:bg-[#d3e8fe] p-3 px-5 cursor-pointer"
        onClick={() => router.push("/exams")}>
        <Image
          src="/icons/exam.svg"
          alt="exam"
          width={20}
          height={20}
          className="w-[1.25rem] h-[1.25rem]"
        />
        <p>Exams</p>
      </div>
      <div
        className="flex items-center gap-3 hover:bg-[#d3e8fe] p-3 px-5 cursor-pointer"
        onClick={() => router.push("/questions")}>
        <Image
          src="/icons/question.svg"
          alt="question"
          width={20}
          height={20}
          className="w-[1.25rem] h-[1.25rem]"
        />
        <p>Questions</p>
      </div>
    </div>
  );
};

export default Sidebar;
