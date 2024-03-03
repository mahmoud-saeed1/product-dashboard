import { ButtonHTMLAttributes, ReactNode } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
}

const Button = ({
  children,
  className,
  width = "w-full",
  ...rest
}: IButton) => {
  return (
    <button
      className={`py-1 rounded-md text-white font-bold tracking-wide capitalize ${width} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
