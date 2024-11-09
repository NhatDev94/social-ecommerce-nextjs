"use client";

import feedService from "@/apis/feed";
import { useAppContext } from "@/app/context";
import { InputPost } from "@/libs/types/feed";
import { FileUpload } from "@/libs/types/fileUpload";
import { useRef, useState } from "react";

export default function useCreatePost() {
  const { user } = useAppContext();
  const desRef = useRef<HTMLTextAreaElement | null>(null);
  const [media, setMedia] = useState<FileUpload[]>([]);
  const handleUpload = (files: FileUpload[]) => {
    setMedia(files);
  };

  const handleCreatePost = async () => {
    const description = desRef.current?.value;
    if (!description?.trim().length && !media.length) return;
    const input: InputPost = {
      username: user?.username || "",
      description: description || "",
      media,
    };

    const data = await feedService.createPost(input);
    console.log(data);
  };

  return {
    desRef,
    media,
    handleUpload,
    handleCreatePost,
  };
}
