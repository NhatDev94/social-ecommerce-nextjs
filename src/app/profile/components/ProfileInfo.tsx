"use client";

import { authService } from "@/apis/auth";
import { useAppContext } from "@/app/context";
import { Upload } from "@/components/Upload";
import { useState } from "react";

const avatarDefault =
  "https://images.pexels.com/photos/28759661/pexels-photo-28759661.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";

export function ProfileInfo() {
  const { user, setUser } = useAppContext();
  const [showEditAvatar, setShowEditAvatar] = useState(false);

  const handleMouseEnter = () => {
    setShowEditAvatar(true);
  };
  const handleMouseLeave = () => {
    setShowEditAvatar(false);
  };

  const handleUpload = async (files: any) => {
    if (!user?.username) return;
    const data = await authService.changeAvatar(files[0], user.username);
    if (data) {
      const value = await authService.getUser(user.username);
      setUser(value.user);
      localStorage.setItem("user", JSON.stringify(value.user));
    }
  };
  console.log("===", user?.avatar);
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <div
          className="w-60 h-60 rounded-full overflow-hidden flex items-center justify-center mt-20 mb-10 relative border-2 border-white"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={user ? user.avatar : avatarDefault}
            className="w-full h-full object-cover"
            alt="avatar"
          />

          {showEditAvatar && (
            <div className="absolute top-0 left-0 z-10 text-red-500 font-semibold w-full h-full flex items-center justify-center bg-black/20">
              <Upload accept=".png" onUpload={handleUpload}>
                Edit
              </Upload>
            </div>
          )}
        </div>
      </div>

      <h4 className="font-semibold text-3xl text-white capitalize w-full text-center">
        {user?.username}
      </h4>
    </>
  );
}
