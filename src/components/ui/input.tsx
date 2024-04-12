import * as React from "react";
import { cn } from "../../utils/ui/classNameConcat";



export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          " block w-full px-3 py-2 bg-white border-[1px] border-[rgba(0,0,0,0.10)] rounded-md text-[14px] shadow-sm placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-none focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
