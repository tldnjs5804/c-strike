import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-mono font-semibold tracking-wide transition-all disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-defend/30",
  {
    variants: {
      variant: {
        default:
          "bg-attack text-white hover:-translate-y-px hover:bg-attack-dark hover:shadow-[0_0_28px_rgba(255,70,85,0.35)]",
        outline:
          "border border-border-strong bg-transparent text-text-primary hover:border-defend hover:text-defend",
        ghost: "text-text-secondary hover:bg-bg-surface-alt hover:text-text-primary",
      },
      size: {
        default: "px-6 py-3 text-[14.5px]",
        sm: "px-4 py-2 text-[13px]",
        lg: "px-7 py-[15px] text-[15px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
