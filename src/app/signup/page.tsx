"use client";
import axiosInstance from "@/utils/axios";
import { Button, Checkbox, PasswordInput, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUp = () => {
  const [username, setUsername] = useState<string>("");
  const [usernameError, setUsernameError] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [confirmpassword, setConfirmPassword] = useState<string>("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [visible, { toggle }] = useDisclosure(false);
  const router = useRouter();

  async function createUser() {
    try {
      const res = await axiosInstance.post("/users/register", {
        email: email,
        password: password,
        name: username,
        role: role,
      });
      if (res.data.success) {
        router.push("/");
      }
    } catch {}
  }

  function handleForm(e: React.ChangeEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (username.includes(" ") || !username) {
      setUsernameError("Ad boş ola bilməz.");
      return;
    } else setUsernameError("");
    if (
      !String(email)
        .toLowerCase()
        .match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/)
    ) {
      setEmailError("Email düzgün deyil.");
      return;
    } else setEmailError("");
    if (password.length < 6) {
      setPasswordError("Şifrə 6 simvoldan az ola bilməz.");
      return;
    } else setPasswordError("");
    if (password !== confirmpassword) {
      setConfirmPasswordError("Şifrələr uyğun gəlmir.");
      return;
    } else setConfirmPasswordError("");
    createUser();
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="flex flex-col gap-4" onSubmit={handleForm}>
        <h1 className="text-center text-3xl font-medium">İMTAHAN.DEV</h1>
        <TextInput
          label="Ad"
          size="lg"
          placeholder="Ad"
          onChange={(e) => setUsername(e.currentTarget.value)}
          value={username}
          error={usernameError}
        />
        <TextInput
          label="Email"
          size="lg"
          placeholder="Email"
          onChange={(e) => setEmail(e.currentTarget.value)}
          value={email}
          error={emailError}
        />
        <PasswordInput
          label="Şifrə"
          size="lg"
          placeholder="Şifrə"
          onChange={(e) => setPassword(e.currentTarget.value)}
          value={password}
          error={passwordError}
          className="w-full"
          visible={visible}
          onVisibilityChange={toggle}
        />
        <PasswordInput
          label="Şifrə təkrarı"
          size="lg"
          placeholder="Şifrə təkrarı"
          onChange={(e) => setConfirmPassword(e.currentTarget.value)}
          value={confirmpassword}
          error={confirmPasswordError}
          className="w-full"
          visible={visible}
          onVisibilityChange={toggle}
        />
        <Checkbox
          label="Müəllim"
          value={role}
          onChange={(event) =>
            setRole(event.currentTarget.checked ? "teacher" : "student")
          }
        />
        <Button size="lg" fullWidth type="submit">
          QEYDİYYAT
        </Button>
        <Button
          size="lg"
          fullWidth
          variant="default"
          onClick={() => router.push("/login")}>
          Giriş et
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
