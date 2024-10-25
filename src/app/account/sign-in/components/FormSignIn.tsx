"use client";

import accountService from "@/apis/account";
import { useAppContext } from "@/app/context";
import Form from "@/components/commons/Form";
import Loading from "@/components/commons/Loading";
import Message from "@/components/commons/Message";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
const formItems = [
  {
    label: "Username",
    name: "username",
    required: "Please enter username",
  },
  {
    label: "Password",
    name: "password",
    required: "Please enter password",
    type: "password",
  },
];
export default function FormSignIn() {
  const form = useForm();
  const router = useRouter();
  const { setUser } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (value: any) => {
    setIsLoading(true);
    const res = await accountService.signIn(value);
    setIsLoading(false);

    if (res.status === "success") {
      setUser(res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", JSON.stringify(res.data.token));
      router.push("/");
      return;
    }
    setMessage(res.message);
  };

  const goSignUp = () => {
    router.push("/account/sign-up");
  };
  // Customize message
  return (
    <div className="w-full h-fit">
      <Loading open={isLoading} />
      <Message
        severity="warning"
        open={!!message}
        message={message}
        onClose={() => setMessage("")}
      />
      <Form items={formItems} form={form} onSubmit={handleSubmit} />
      <p className="mt-8 text-sm font-normal text-black w-full text-center">
        You do not have an account{" "}
        <span
          className="text-blue-500 hover:underline cursor-pointer"
          onClick={goSignUp}
        >
          Sign Up
        </span>
      </p>
    </div>
  );
}
