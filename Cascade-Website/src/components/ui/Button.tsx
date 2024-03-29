import {ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";


const buttonVariants = cva("button", {
  variants: {
    intent: {
      primary: [
        "bg-brandBlue1x text-brandWhite1x text-xs flex items-center justify-center rounded-full shadow-md drop-shadow-navItem py-3 px-4 transition ease-in-out delay-150 lg:px8 hover:bg-brandBlue4x hover:text-brandBlack1x font-madeTommyRegular",
      ],
      neutral: [
        "bg-brandWhite1x text-brandBlue3x text-xs flex items-center justify center gap-2 rounded-full shadow-md drop-shadow-navItem py-3 px-8 transition ease-in-out delay-150   lg:px-8 hover:bg-brandYellow1x font-madeTommyRegular",
      ],
      moreBtn:[
        "bg-brandWhite1x text-lg flex items-center justify center gap-2 w-1/2 rounded-full z-[999]  shadow-md drop-shadow-navItem py-3 px-8 transition ease-in-out delay-150   lg:px-8 hover:bg-brandYellow1x font-madeTommyRegular",
      ],
      outline: [
        "text-brandWhite1x font-valueBold text-sm flex items-center justify-center rounded-full border-brandBlue1x shadow-md drop-shadow-navItem py-3 px-4 transition ease-in delay-150 bg-brandBlue1x lg:text-md lg:px-10  hover:bg-brandBlue1x/80",
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
