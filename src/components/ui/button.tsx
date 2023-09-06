import * as React from "react"
import { type VariantProps, cva } from "class-variance-authority"
import { cn } from "~/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center text-sm rounded-md font-medium transition-all duration-200 ease-in disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-gray12 hover:bg-gray11 text-gray1",
        destructive: "bg-red9 hover:bg-red10",
        outline: "border border-gray7 hover:bg-gray4 hover:border-gray8",
        secondary:
          "bg-gray3 hover:bg-gray4 border border-gray7 hover:border-gray8",
        ghost: "hover:bg-gray4",
        link: "text-gray11 underline underline-offset-2 decoration-gray7 hover:text-gray12 hover:decoration-gray8",
      },
      size: {
        default: "py-2 px-4",
        sm: "py-1 px-2",
        noPad: "p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
