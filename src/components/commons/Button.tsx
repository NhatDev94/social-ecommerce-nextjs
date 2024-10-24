import { Button as MuiButton } from "@mui/material";
import { ReactNode } from "react";

type Variant = "text" | "contained" | "outlined";

type Props = {
  children: ReactNode;
  variant?: Variant;
  disabled?: boolean;
  [key: string]: any;
};

export default function Button({
  variant = "contained",
  children,
  disabled,
  ...props
}: Props) {
  return (
    <MuiButton variant={variant} disabled={disabled} {...props}>
      {children}
    </MuiButton>
  );
}
