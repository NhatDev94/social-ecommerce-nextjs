"use client";

import { useState } from "react";
import QuickCreateMenu from "./QuickCreateMenu";

export default function QuickCreate() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="w-14 h-14 rounded-full shadow-lg border border-black/10 flex items-center justify-center bg-white text-black text-xl font-bold cursor-pointer hover:opacity-60 select-none"
        onClick={() => setOpen(true)}
      >
        +
      </div>

      <QuickCreateMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
