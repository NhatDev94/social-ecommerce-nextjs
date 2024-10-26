"use client";

import accountService from "@/apis/account";
import { useAppContext } from "@/app/context";
import Loading from "@/components/commons/Loading";
import Upload from "@/components/commons/Upload";
import { FileUpload } from "@/libs/types/fileUpload";
import { useState } from "react";
import defaultAvatar from "@/assets/images/defaultAvatar.jpg";

export default function Info() {
  const { user, setUser } = useAppContext();
  const [isHover, setIsHover] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);

  const handleChange = async (files: FileUpload[]) => {
    if (!user?.username || !files[0]?.base64) return;
    setIsLoading(true);
    const res = await accountService.updateAvatar(
      user?.username,
      files[0]?.base64
    );
    setIsLoading(false);
    if (res.status === "success") {
      setUser({ ...user, avatar: res.data.avatar });
      localStorage.setItem(
        "user",
        JSON.stringify({ ...user, avatar: res.data.avatar })
      );
      return;
    }
    // handle message error
  };

  return (
    <div className="w-full h-fit">
      <Loading open={isLoading} />
      <div className="cover w-full h-60 bg-violet-300"></div>
      <div className="w-full relative -top-24 px-10 flex items-end">
        <div
          className=" w-40 h-40 rounded-full border-2 border-whitez-50 relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={user?.avatar || defaultAvatar}
            alt="avatar"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = defaultAvatar;
            }}
          />
          {isHover && (
            <div className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center bg-black/40">
              <p className=" cursor-pointer text-sm font-semibold text-white select-none">
                <Upload onChange={handleChange}>Update Avatar</Upload>
              </p>
            </div>
          )}
        </div>
        <h4 className="text-3xl text-black font-bold">{user?.name}</h4>
      </div>
    </div>
  );
}
