"use client";
import React from "react";
import examImage from "../../public/exam-image.jpg";
import Image from "next/image";
import { Button } from "@mantine/core";

interface Exam {
  id: string;
  name: string;
  description: string;
  price?: string;
}

const ExamCard: React.FC<{ exam: Exam }> = ({ exam }) => {
  return (
    <div className="group relative bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col gap-4 justify-between h-full">
      <div className="flex flex-col gap-4">
        <Image
          src={examImage}
          alt={exam.name}
          className="w-full h-[10rem] rounded-md object-cover"
        />
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl text-gray-700 font-semibold">{exam.name}</h3>
          <p className="text-sm text-gray-500">{exam.description}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <Button size="md" variant="default">
          Redaktə et
        </Button>
        <Button size="md">Aktiv et</Button>
      </div>
    </div>
  );
};

export default ExamCard;
