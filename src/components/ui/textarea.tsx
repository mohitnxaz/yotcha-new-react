import * as React from "react";
import { cn } from "../../utils/ui/classNameConcat";



export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full  border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground bg-white border-[1px] border-[rgba(0,0,0,0.10)] rounded-md text-[14px] shadow-sm placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-none focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
