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
      className={`py-2 rounded-md text-lg text-white font-bold tracking-wider uppercase ${width} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
