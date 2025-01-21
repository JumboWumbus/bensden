import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow group-hover/badge:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground group-hover/badge:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow group-hover/badge:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const counterVariants = cva(
  "px-2  text-xs font-semibold rounded-r-md flex items-center justify-center transition-all group-hover/badge:brightness-[85%]",
  {
    variants: {
      variant: {
        default: "bg-primary  brightness-[80%] text-primary-foreground",
        secondary: "bg-secondary brightness-[80%] text-secondary-foreground ",
        destructive:
          "bg-destructive brightness-[80%] text-destructive-foreground",
        outline: "bg-gray-300 text-gray-900",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className="group/badge">
      <div className={cn(badgeVariants({ variant }), className)} {...props} />
    </div>
  );
}

export interface BadgeCounterProps extends BadgeProps {
  counter: number;
}

function BadgeCounter({ variant, counter, ...props }: BadgeCounterProps) {
  return (
    <div className="flex group/badge">
      <div
        className={cn(badgeVariants({ variant }), "rounded-r-none pr-1.5")}
        {...props}
      />
      <div className={cn(counterVariants({ variant }))}>{counter}</div>
    </div>
  );
}

export { Badge, BadgeCounter, badgeVariants };
