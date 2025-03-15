"use client";
import axiosInstance from "@/utils/axios";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ResetPassword = () => {
  const params = useParams();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showShowPassword, setShowShowPassword] = useState<string>("invisible");
  const [passwordType, setPasswordType] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("invisible");
  const router = useRouter();

  function changeShowPassword(par: boolean) {
    setShowPassword(par);
    setPasswordType(!passwordType);
  }

  useEffect(() => {
    if (password) setShowShowPassword("");
    else setShowShowPassword("invisible");
  }, [password]);

  async function resetPassword() {
    try {
      const res = await axiosInstance.post("/users/reset-password", {
        token: params.token,
        password: password,
      });
      if (res.data.success) {
        Swal.getConfirmButton()?.addEventListener("click", () => {
          router.push("/login");
        });
      }
    } catch (error) {}
  }

  function handleForm(e: React.ChangeEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (password.length < 6) {
      setPasswordError("visible");
      return;
    } else setPasswordError("invisible");
    resetPassword();
  }

  return <div></div>;
};

export default ResetPassword;
