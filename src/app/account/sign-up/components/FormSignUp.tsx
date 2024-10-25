"use client";

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

  const handleSubmit = (value: any) => {
    setIsLoading(true);
    console.log(value);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  const goSignIn = () => {
    router.push("/account/sign-in");
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
