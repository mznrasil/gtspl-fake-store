import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps<T extends React.ElementType> {
  as?: T;
}

export function Button<T extends React.ElementType = "button">({
  as,
  ...props
}: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) {
  const Component = as || "button";

  return (
    <Component
      {...props}
      className={twMerge(
        "flex items-center justify-center gap-2 rounded bg-primary px-6 py-2 text-white transition-colors duration-200 ease-in-out hover:bg-primary/80 active:bg-primary/95 disabled:cursor-not-allowed disabled:bg-primary/50",
        props.className,
      )}
    />
  );
}
