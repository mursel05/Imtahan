"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { DataContext } from "@/context/ApiContext";
import axiosInstance from "@/utils/axios";
import { useContext, useEffect } from "react";

const Home = () => {
  const { setUser } = useContext(DataContext);

  useEffect(() => {
    async function getUser() {
      try {
        const res = await axiosInstance.get("/users");
        if (res.data.success) {
          setUser(res.data.data);
        }
      } catch {}
    }
    getUser();
  }, []);

  return (
    <div className="bg-[#f5f5f5] h-screen">
      <Navbar />
      <div className="flex h-screen">
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
