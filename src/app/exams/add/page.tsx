"use client";
import Navbar from "@/components/Navbar";
import {
  Button,
  NumberInput,
  Select,
  Textarea,
  TextInput,
} from "@mantine/core";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axiosInstance from "@/utils/axios";

const Add = () => {
  const [priceInfo, setPriceInfo] = useState(false);
  const [accessLevelInfo, setAccessLevelInfo] = useState(false);
  const router = useRouter();
  const [name, setName] = useState("");
  const [subject, setSubject] = useState<string | null>("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<string | number>("");
  const [freeQuestionCount, setFreeQuestionCount] = useState<string | number>(
    ""
  );

  async function createExam(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/exams", {
        name,
        description,
        subject,
        accessLevel: 0,
      });
      if (res.data.success) {
        router.push(`/exam/${res.data.data.id}`);
      }
    } catch (error) {}
  }
  return (
    <div className="bg-[#f5f5f5]">
      <Navbar />
      <div className="flex h-[calc(100vh-5.1rem)]">
        <div className="relative bg-white rounded-xl p-4 m-4 flex flex-col gap-4 w-full items-center justify-center">
          <div className="absolute left-4 top-4">
            <Button
              size="md"
              variant="default"
              onClick={() => router.push("/exams")}>
              Geri
            </Button>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Yeni İmtahan
          </h1>
          <form className="flex flex-col gap-4" onSubmit={createExam}>
            <div className="flex items-center gap-4">
              <TextInput
                label="Adı"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
                required
              />
              <Select
                label="Fənn"
                data={["React", "Angular", "Vue", "Svelte"]}
                clearable
                searchable
                nothingFoundMessage="Nothing found"
                value={subject}
                onChange={setSubject}
                required
              />
            </div>
            <Textarea
              label="Açıqlama"
              value={description}
              onChange={(e) => setDescription(e.currentTarget.value)}
              required
            />
            <div className="relative flex items-center gap-4">
              <NumberInput
                label="Qiymət"
                hideControls
                disabled
                value={price}
                onChange={setPrice}
              />
              <div className="flex items-center gap-2 mt-6">
                <Image
                  src="/icons/info.svg"
                  width={24}
                  height={24}
                  alt="info"
                  className="cursor-pointer w-6 h-6"
                  onMouseEnter={() => setPriceInfo(true)}
                  onMouseLeave={() => setPriceInfo(false)}
                />
                {priceInfo && (
                  <div className="absolute top-0 w-max bg-[#f5f5f5] px-1 rounded-md before:bg-[#f5f5f5] before:content-[''] before:absolute before:w-4 before:h-4 before:transform before:rotate-[45deg] before:bottom-0">
                    <span className="text-xs relative">
                      Yaxın zamanda əlavə olunacaq
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="relative flex items-center gap-4">
              <NumberInput
                label="Pulsuz sual sayı"
                hideControls
                disabled
                value={freeQuestionCount}
                onChange={setFreeQuestionCount}
              />
              <div className="flex items-center gap-2 mt-6">
                <Image
                  src="/icons/info.svg"
                  width={24}
                  height={24}
                  alt="info"
                  className="cursor-pointer w-6 h-6"
                  onMouseEnter={() => setAccessLevelInfo(true)}
                  onMouseLeave={() => setAccessLevelInfo(false)}
                />
                {accessLevelInfo && (
                  <div className="absolute top-0 w-max bg-[#f5f5f5] px-1 rounded-md before:bg-[#f5f5f5] before:content-[''] before:absolute before:w-4 before:h-4 before:transform before:rotate-[45deg] before:bottom-0">
                    <span className="text-xs relative">
                      Yaxın zamanda əlavə olunacaq
                    </span>
                  </div>
                )}
              </div>
            </div>
            <Button size="md" type="submit">
              Yarat
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
