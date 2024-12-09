import * as React from "react"
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Using CVA to create a utility for conditional class names
const buttonStyles = cva(
  "px-4 py-2 rounded-lg", // default classes
  {
    variants: {
      color: {
        primary: "bg-blue-500 text-white",
        secondary: "bg-gray-500 text-white",
      },
      size: {
        small: "text-sm",
        large: "text-lg",
      },
    },
    defaultVariants: {
      color: "primary", // Default color variant
      size: "small", // Default size variant
    },
  }
);

// Define the props for the button component
interface ButtonProps extends VariantProps<typeof buttonStyles> {
  asChild?: boolean;
  children: React.ReactNode;
}

const Button = ({ asChild, children,  }: ButtonProps) => {
  const Component = asChild ? Slot : "button"; // Use Slot if asChild is true

  return (
    <Component className={cn(buttonStyles({ color, size }))}>
      {children}
    </Component>
  );
};

export default Button;