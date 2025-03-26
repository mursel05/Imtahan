"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Button, Select } from "@mantine/core";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ExamCard from "@/components/ExamCard";
import { useRouter } from "next/navigation";
import axiosInstance from "@/utils/axios";
import { ExamType } from "@/models/exam";
import ExamCardLoading from "@/components/ExamCardLoading";
const Exams = () => {
  // subject
  // search
  // sort
  const router = useRouter();
  const [exams, setExams] = useState<ExamType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getExams() {
      const res = await axiosInstance.get("/exams/writer");
      if (res.data.success) {
        setExams(res.data.data);
        setLoading(false);
      }
    }
    getExams();
  }, []);

  return (
    <div className="bg-[#f5f5f5]">
      <Navbar />
      <div className="flex min-h-[calc(100vh-5.1rem)]">
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
                placeholder="Axtar.."
                className="outline-none"
              />
            </div>
            <Select
              data={["React", "Angular", "Vue", "Svelte"]}
              defaultValue="React"
              clearable
              searchable
              nothingFoundMessage="Tapılmadı"
            />
            <Select
              data={["React", "Angular", "Vue", "Svelte"]}
              defaultValue="React"
              clearable
              searchable
              nothingFoundMessage="Tapılmadı"
            />
          </div>
          <div className="bg-white p-4 m-4 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                İmtahanlar
              </h2>
              <Button
                size="md"
                variant="default"
                onClick={() => router.push("/exams/add")}>
                Əlavə et
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {loading
                ? Array(8)
                    .fill(0)
                    .map((_, i) => <ExamCardLoading key={i} />)
                : exams.map((exam) => <ExamCard key={exam.id} exam={exam} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exams;
