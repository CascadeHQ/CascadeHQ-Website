import { React, ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva("button", {
  variants: {
    intent: {
      primary: [
        "bg-brandBlue1x text-brandWhite1x text-xs flex items-center justify-center rounded-full shadow-md drop-shadow-navItem py-3 px-4 transition ease-in-out delay-150 lg:px8 hover:bg-brandYellow1x font-madeTommyMedium",
      ],
      neutral: [
        "bg-brandWhite1x text-brandBlue3x text-xs flex items-center justify center gap-2 rounded-full shadow-md drop-shadow-navItem py-3 px-8 transition ease-in-out delay-150   lg:px-8 hover:bg-brandYellow1x font-madeTommyMedium",
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

  defaultVariants: {
    intent: "primary",
  },
});

type buttonType = VariantProps<typeof buttonVariants> &
  ComponentProps<"button">;

const Button = ({ intent, size, className, ...props }: buttonType) => {
  return (
    <button
      {...props}
      className={twMerge(buttonVariants({ intent, size }), className)}
    />
  );
};

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//     VariantProps<typeof button> {}

// export const Button: React.FC<ButtonProps> = ({
//   className,
//   intent,
//   size,
//   ...props
// }) => <button className={button({ intent, size, className })} {...props} />;

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

export default Button;
