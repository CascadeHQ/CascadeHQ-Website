import { cva, type VariantProps } from "class-variance-authority";
import React from "react";




const button = cva("button", {
  variants: {
    intent: {
      primary: [
        "bg-brandBlue1x text-brandWhite1x text-xs rounded-full shadow-md drop-shadow-navItem py-3 px-5 transition ease-in-out delay-150 md:text-md lg:text-base hover:bg-brandBlue3x"
      ],
      neutral: [
        "bg-brandWhite1x text-brandBlue3x text-xs rounded-full shadow-md drop-shadow-navItem py-3 px-5 transition ease-in-out delay-150 md:text-md lg:text-base hover:bg-brandBlue3x"
      ],
      outline: [
        "bg-white",
        "text-gray-800",
        "border-gray-400",
        "hover:bg-gray-100",
      ],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-md", "py-2", "px-4"],
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium", class: "normal-case" }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => <button className={button({ intent, size, className })} {...props} />;



// type Props ={
//     content:string,
// }

// const Button = ({content}:Props) => {
//   return (
//     <>
//     <button type="button" className={`bg-brandBlue1x text-brandWhite1x text-xs rounded-full shadow-md drop-shadow-navItem py-3 px-5 transition ease-in-out delay-150 md:text-md lg:text-base hover:bg-brandBlue3x`}>{content}</button>
//     </>
//   )
// }

