"use client";

import { FileUpload } from "@/libs/types/fileUpload";
import toBase64 from "@/utils/toBase64";
import validationUploadFile from "@/utils/validationUploadFile";
import { ChangeEvent, ReactNode, useRef } from "react";
type Props = {
  children?: ReactNode;
  accept?: string;
  mutiple?: boolean;
  maxSize?: number;
  maxLength?: number;
  onChange?: (files: FileUpload[]) => void;
};

export default function Upload({
  children,
  accept = ".png,.jpg",
  mutiple = false,
  maxSize,
  maxLength = 10,
  onChange,
}: Props) {
  const ref = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (ref.current) ref.current.click();
  };

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = Array.from(e.target.files || []);
    const allow = validationUploadFile(fileList, maxSize, mutiple, maxLength);
    if (!allow) return;

    const promisses = fileList.map(async (file) => {
      const base64 = await toBase64(file);
      return {
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified,
        webkitRelativePath: file.webkitRelativePath,
        base64: String(base64),
      };
    });
    const files: FileUpload[] = await Promise.all(promisses);
    if (onChange) onChange(files);
  };

  return (
    <div className="">
      <input
        ref={ref}
        type="file"
        multiple={mutiple}
        accept={accept}
        onChange={handleChange}
        className="hidden"
      />
      <p className="" onClick={handleClick}>
        {children || "Upload file"}
      </p>
    </div>
  );
}
