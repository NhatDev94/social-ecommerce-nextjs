"use client";

import Button from "@/components/commons/Button";
import Input from "@/components/commons/Input";
import Loading from "@/components/commons/Loading";
import Menu from "@/components/commons/Menu";
import Message from "@/components/commons/Message";
import { useState } from "react";

import Modal from "@/components/commons/modals/Modal";
import Form from "@/components/commons/Form";
import { useForm } from "react-hook-form";
import useModal from "@/hooks/useModal";

export default function Home() {
  const form = useForm();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const { open: openModal, onOpen, onClose } = useModal();

  const items = [
    {
      name: "Profile",
      onClick: () => {
        console.log("profile");
      },
    },
    {
      name: "Account setting",
      onClick: () => {
        console.log("account setting");
      },
    },
    {
      name: "Sign Out",
      onClick: () => {
        console.log("sign out");
      },
    },
  ];

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
    },
  ];

  const handleSubmit = (value: { [key: string]: string | number }) => {
    console.log(value);
  };
  return (
    <div>
      Home Page
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Click Me
      </Button>
      <Input label="Enter..." />
      <Message
        open={open}
        message="Something went wrong"
        onClose={() => setOpen(false)}
      />
      <br />
      <Button
        onClick={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 3000);
        }}
      >
        Call Api
      </Button>
      <Loading open={loading} />
      {/* Menu */}
      <div className="mt-10 w-full flex items-center justify-center p-10">
        <Menu items={items} />
      </div>
      <div className="mt-4 p-2">
        <Button onClick={onOpen}>Open Modal</Button>
        <Modal open={openModal} onClose={onClose}>
          Day la modal content
        </Modal>
      </div>
      <div className="mt-4 p-2 bg-gray-200">
        <Form items={formItems} form={form} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
