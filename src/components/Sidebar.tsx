"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-2 py-4 bg-[#F7F9FB] h-full">
      <div className="hover:bg-[#d3e8fe] cursor-pointer">
        <Link href="/">
          <div className="flex items-center gap-3 p-3 pl-[1.5rem] pr-[8rem] w-max">
            <Image
              src="/icons/dashboard.svg"
              alt="dashboard"
              width={20}
              height={20}
              className="w-[1.25rem] h-[1.25rem]"
            />
            <p>Fəaliyyət</p>
          </div>
        </Link>
      </div>
      <div className="hover:bg-[#d3e8fe] cursor-pointer">
        <Link href="/exams">
          <div className="flex items-center gap-3 p-3 pl-[1.5rem] pr-[8rem] w-max">
            <Image
              src="/icons/exam.svg"
              alt="exam"
              width={20}
              height={20}
              className="w-[1.25rem] h-[1.25rem]"
            />
            <p>Imtahanlar</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
