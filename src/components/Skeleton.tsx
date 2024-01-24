import type { ComponentPropsWithRef } from "react";
import { cn } from "~/utils/cn";

export default function Skeleton({
  className,
  ...props
}: ComponentPropsWithRef<"div">) {
  return (
    <div
      className={cn("animate-[pulse_1s_infinite] bg-gray-3", className)}
      {...props}
    />
  );
}
