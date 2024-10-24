import toBase64 from "@/helpers/toBase64";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  accept?: string;
  onUpload?: (value: any) => void;
};

export function Upload({ children, accept, onUpload }: Props) {
  const handleChange = async (e: any) => {
    if (e.target.files && onUpload) {
      const promises = [...e.target.files].map(async (file: any) => ({
        base64: await toBase64(file),
        name: file.name,
        size: file.size,
        type: file.type,
        file,
      }));

      onUpload(await Promise.all(promises));
    }
  };
  return (
    <div className="">
      <div className="w-full h-full">{children}</div>
      <input
        type="file"
        className="w-full h-full inline-block z-10 relative"
        accept={accept || ""}
        onChange={handleChange}
      />
    </div>
  );
}
