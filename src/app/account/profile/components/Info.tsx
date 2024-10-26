"use client";

import { useAppContext } from "@/app/context";
import { useState } from "react";

export default function Info() {
  const { user } = useAppContext();
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);

  return (
    <div className="w-full h-fit">
      <div className="cover w-full h-60 bg-violet-300"></div>
      <div className="w-full relative -top-24 px-10 flex items-end">
        <div
          className=" w-40 h-40 rounded-full border-2 border-white bg-red-200 z-50 relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* <img
          src={user?.avatar}
          alt="avatar"
          className="w-full h-full object-cover"
        /> */}
          {isHover && (
            <div className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center bg-black/40">
              <p className=" cursor-pointer text-sm font-semibold text-white select-none">
                Edit
              </p>
            </div>
          )}
        </div>
        <h4 className="text-3xl text-black font-bold">{user?.name}</h4>
      </div>
    </div>
  );
}
