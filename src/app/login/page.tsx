"use client";
import axiosInstance from "@/utils/axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";
import { Button, PasswordInput, TextInput } from "@mantine/core";

const Login = () => {
  const [email, setEmail] = useState<string>("mursal.haqverdiyev05@gmail.com");
  const [emailError, setEmailError] = useState<string>("");
  const [password, setPassword] = useState<string>("123456");
  const [passwordError, setPasswordError] = useState<string>("");
  const router = useRouter();

  async function signInWithEmail() {
    try {
      const res = await axiosInstance.post("/users/login", {
        email: email,
        password: password,
      });
      if (res.data.success) {
        router.push("/");
      }
    } catch {}
  }

  function handleForm(e: React.ChangeEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (
      !String(email)
        .toLowerCase()
        .match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/)
    ) {
      setEmailError("Email düzgün deyil");
      return;
    } else setEmailError("");
    if (password.length < 6) {
      setPasswordError("Şifrə 6 simvoldan az ola bilməz.");
      return;
    } else setPasswordError("");
    signInWithEmail();
  }

  async function forgotPassword() {
    if (
      !String(email)
        .toLowerCase()
        .match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/)
    ) {
      setEmailError("Email düzgün deyil.");
      return;
    } else setEmailError("");
    try {
      Swal.fire({
        title: "Email göndərilir...",
        html: "Zəhmət olmasa gözləyin.",
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      await axiosInstance.post("/users/forgot-password", {
        email: email,
      });
    } catch {}
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="flex flex-col gap-4" onSubmit={handleForm}>
        <h1 className="text-center text-3xl font-medium">İMTAHAN.DEV</h1>
        <TextInput
          label="Email"
          size="lg"
          placeholder="Email"
          onChange={(e) => setEmail(e.currentTarget.value)}
          value={email}
          error={emailError}
        />
        <div className="flex items-end gap-1 flex-col">
          <PasswordInput
            label="Şifrə"
            size="lg"
            placeholder="Password"
            onChange={(e) => setPassword(e.currentTarget.value)}
            value={password}
            error={passwordError}
            className="w-full"
          />
          <p className="cursor-pointer" onClick={forgotPassword}>
            Şifrəni unutmusunuz?
          </p>
        </div>
        <Button size="lg" fullWidth type="submit">
          GİRİŞ
        </Button>
        <Button
          size="lg"
          fullWidth
          variant="default"
          onClick={() => router.push("/signup")}>
          Qeydiyyatdan keç
        </Button>
      </form>
    </div>
  );
};

export default Login;
