import { TextField as MuiTextField } from "@mui/material";
type Variant = "standard" | "filled" | "outlined";

type Props = {
  label?: string;
  variant?: Variant;
  [key: string]: any;
  register?: any;
  name?: string;
  options?: any;
};

export default function Input({
  label = "",
  variant = "standard",
  register = () => {},
  name = "",
  options = {},
  ...props
}: Props) {
  return (
    <MuiTextField
      label={label}
      variant={variant}
      {...register(name, options)}
      {...props}
    />
  );
}
