import { ButtonHTMLAttributes, ReactNode } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  title?: string;
  className?: string;
  width?: "w-full" | "w-fit";
}

const Button = ({
  children,
  title,
  className,
  width = "w-full",
  ...rest
}: IButton) => {
  return (
    <button
      className={`py-2 px-4 rounded-md text-lg text-white font-bold tracking-wider uppercase ${width} ${className}`}
      {...rest}
    >
      {children ? children : title}
    </button>
  );
};

export default Button;
