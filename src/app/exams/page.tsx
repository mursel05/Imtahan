"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Select } from "@mantine/core";
import Image from "next/image";
import React, { useState } from "react";
import ExamCard from "@/components/ExamCard";
const Exams = () => {
  // subject
  // search
  // sort
  const exams = [
    {
      id: "1",
      name: "Buraxilis sinagi",
      description:
        "Bu sinaqda buraxilis fenleri uzre - azerbaycandili riyaziyyat ve ing dili uzre imtahan vereceksiniz ",
    },
    {
      id: "2",
      name: "Qebul sinagi",
      description:
        "Bu sinaqda qebul fenleri uzre-fizika kimya riyaziyyat uzre  imtahan vereceksiniz ",
      price: "$45",
    },
    {
      id: "3",
      name: "Umumi sinaq",
      description:
        "Bu sinaq sizin umumi biliklerinizi yoxlamaq ucun nezerde tutulub",
      price: "$55",
    },
    {
      id: "4",
      name: "Riyaziyyat sinagi",
      description:
        "Bu sinaq sizin riyaziyyat biliklerinizi yoxlamaq ucun nezerde tutulub",
      price: "$65",
    },
  ];
  return (
    <div>
      <div className="bg-[#f5f5f5]">
        <Navbar />
        <div className="flex h-screen w-full">
          <Sidebar />
          <div className="bg-white rounded-xl p-4 m-4 w-full">
            <div className="flex gap-4 justify-center">
              <div className="flex gap-2 border border-[#e5e7eb] py-[0.3rem] px-2 rounded-md items-center">
                <Image
                  src="/icons/search.svg"
                  width={24}
                  height={24}
                  alt="search"
                  className="w-6 h-6"
                />
                <input
                  type="text"
                  placeholder="Search.."
                  className="outline-none"
                />
              </div>
              <Select
                placeholder="Pick value"
                data={["React", "Angular", "Vue", "Svelte"]}
                defaultValue="React"
                clearable
                searchable
                nothingFoundMessage="Nothing found"
              />
              <Select
                placeholder="Pick value"
                data={["React", "Angular", "Vue", "Svelte"]}
                defaultValue="React"
                clearable
                searchable
                nothingFoundMessage="Nothing found"
              />
            </div>
            <div className="bg-white p-4 m-4 rounded-xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                Exams
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {exams.map((exam) => (
                  <ExamCard key={exam.id} exam={exam} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exams;
