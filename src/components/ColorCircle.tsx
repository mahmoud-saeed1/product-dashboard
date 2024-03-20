import { HTMLAttributes } from "react";

interface IColorCircle extends HTMLAttributes<HTMLSpanElement> {
    color: string;
}

export const ColorCircle = ({ color, ...rest }: IColorCircle) => {
    return (
        <span className="block w-4 h-4 rounded-full cursor-pointer" style={{ backgroundColor: color }} {...rest}></span >
    )
}
