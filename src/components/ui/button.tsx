import * as React from "react"
import { VariantProps, cva } from "class-variance-authority"
import { cn } from "~/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center text-sm rounded-md font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-slate12 text-slate2 hover:text-slate1 hover:bg-slate11",
        destructive: "bg-red9 hover:bg-red10",
        outline: "border border-slate7 hover:bg-slate4 hover:border-slate8",
        secondary:
          "bg-slate3 hover:bg-slate4 border border-slate7 hover:border-slate8",
        ghost: "hover:bg-slate4",
        link: "underline-offset-4 hover:underline",
      },
      size: {
        default: "py-2 px-4",
        sm: "py-1 px-2",
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
