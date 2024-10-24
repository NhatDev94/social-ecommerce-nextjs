import { ChangeEvent } from "react";
type PropsType = {
  onChange?: (value: string) => void;
  placeholder?: string;
  onSubmit?: () => void;
  defaultValue?: string;
  props: any;
};

const Input = ({ onChange, placeholder, defaultValue, props }: PropsType) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!onChange) return;
    const value = e.target.value || "";
    if (!value) return;
    onChange(value);
  };
  return (
    <input
      className="w-full px-4 py-3 outline-none border border-gray-300 rounded-lg text-sm font-normal"
      onChange={handleChange}
      placeholder={placeholder || "Input..."}
      defaultValue={defaultValue || ""}
      {...props}
    />
  );
};

export default Input;
