import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Select } from "@mantine/core";
import Image from "next/image";
import React from "react";

const Exams = () => {
  // subject
  // search
  // sort
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
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exams;
