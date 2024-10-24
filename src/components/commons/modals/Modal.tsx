import { ReactNode } from "react";
import { functionType } from "@/libs/types/function";
import { Modal as MuiModal } from "@mui/material";
type Props = {
  open: boolean;
  onClose: functionType;
  children: ReactNode;
};
export default function Modal({ open, onClose, children }: Props) {
  return (
    <MuiModal open={open} onClose={onClose}>
      <div className="min-w-40 min-h-20 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {children}
      </div>
    </MuiModal>
  );
}
