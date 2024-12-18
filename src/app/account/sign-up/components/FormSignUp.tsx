"use client";

import accountService from "@/apis/account";
import Form from "@/components/commons/Form";
import Loading from "@/components/commons/Loading";
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
  {
    label: "Name",
    name: "name",
    required: "Please enter name",
  },
];

export default function FormSignUp() {
  const form = useForm();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const goSignIn = () => {
    router.push("/account/sign-in");
  };

  const handleSubmit = async (value: any) => {
    setIsLoading(true);
    const res = await accountService.signUp(value);
    setIsLoading(false);
    if (res.status === "success") {
      goSignIn();
      return;
    }
    // Message
  };

  return (
    <div className="w-full h-fit">
      <Loading open={isLoading} />
      <Form items={formItems} form={form} onSubmit={handleSubmit} />
      <p className="mt-8 text-sm font-normal text-black w-full text-center">
        Already have an account?{" "}
        <span
          className="text-blue-500 hover:underline cursor-pointer"
          onClick={goSignIn}
        >
          Sign In
        </span>
      </p>
    </div>
  );
}
