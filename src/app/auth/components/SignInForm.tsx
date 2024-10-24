"use client";

import { authService } from "@/apis/auth";
import { useAppContext } from "@/app/context";
import Form from "@/components/Form";
import { useRouter } from "next/navigation";

export default function SignInForm() {
  const router = useRouter();

  const { setUser } = useAppContext();

  const items = [
    {
      title: "Username",
      name: "username",
      placeholder: "Enter username...",
      required: true,
    },
    {
      title: "Password",
      name: "password",
      placeholder: "Enter password...",
    },
  ];

  const handleSubmit = async (value: any) => {
    const data = await authService.signIn(value);
    if (data.user.token) {
      localStorage.setItem("token", JSON.stringify(data.user.token));
      localStorage.setItem("user", JSON.stringify(data.user));

      setUser(data.user);
      router.push("/");
      return;
    }
    // handle error
  };

  return (
    <div className="">
      <Form onSubmit={handleSubmit} items={items} />
    </div>
  );
}
