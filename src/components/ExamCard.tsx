"use client";
import React, { useState } from "react";
import examImage from "../../public/exam-image.jpg";
import Image from "next/image";

interface Exam {
  id: string;
  name: string;
  description: string;
  price?: string;
}

const ExamCard: React.FC<{ exam: Exam }> = ({ exam }) => {
  const [activeItems, setActiveItems] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleActive = (id: string) => {
    setActiveItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div
      key={exam.id}
      className="group relative bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col justify-between min-h-[400px] h-full"
    >
      <div>
        <Image
          src={examImage}
          alt={exam.name}
          className="w-full h-[180px] rounded-md object-cover"
        />
        <div className="mt-6">
          <h3 className="text-2xl text-gray-700 font-semibold mb-2">
            {exam.name}
          </h3>
          <p className="text-sm text-gray-500">{exam.description}</p>
        </div>
      </div>
      <div className="flex gap-2 mt-auto">
        <button className="w-1/2 px-4 py-2.5 cursor-pointer bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Redaktə et
        </button>
        <button
          className={`w-1/2 px-4 py-2.5 cursor-pointer rounded-lg text-white ${
            activeItems[exam.id]
              ? "bg-red-500 hover:bg-red-600"
              : "bg-green-500 hover:bg-green-600"
          }`}
          onClick={() => toggleActive(exam.id)}
        >
          {activeItems[exam.id] ? "Deaktiv et" : "Aktiv et"}
        </button>
      </div>
    </div>
  );
};

export default ExamCard;
