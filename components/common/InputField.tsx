import { cn } from "@/lib/cn";
import React, { forwardRef } from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ title, className, ...props }, ref) => {
    return (
      <div className={cn("flex flex-col", className)}>
        <div className="flex flex-col gap-1">
          {title && <label className="ml-1 text-sm">{title}</label>}
          <input
            ref={ref}
            type="text"
            className="min-h-9 rounded-md px-3 text-sm placeholder:text-sm"
            {...props}
          />
        </div>
      </div>
    );
  },
);

InputField.displayName = "InputField";

export default InputField;
