import { ButtonHTMLAttributes, ReactNode } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className: string;
}

const Button = ({ children, className, ...rest }: IButton) => {
  return (
    <button
      className={`w-1/2 py-1 rounded-md text-white font-bold tracking-wide capitalize ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
