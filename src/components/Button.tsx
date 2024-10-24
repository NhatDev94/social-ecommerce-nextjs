import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  props?: any;
};

const Button = ({ children, onClick, className = "", props }: Props) => {
  return (
    <button
      className={`bg-green-200 w-full h-11 rounded-lg text-sm font-semibold hover:shadow-lg hover:bg-green-300 ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
