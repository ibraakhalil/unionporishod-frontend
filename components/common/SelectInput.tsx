import { SelectInputType } from "@/types/adminType";
import React, { forwardRef } from "react";

interface SelectInputProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  title: string;
  options: SelectInputType[];
}

const SelectInput = forwardRef<HTMLSelectElement, SelectInputProps>(
  ({ name, title, options = [], className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <label className="ml-1 text-sm" htmlFor={name}>
          {title}
        </label>
        <select
          ref={ref}
          id={name}
          name={name}
          className={`rounded-md bg-primary-bg px-3 py-1.5 text-sm text-dark ${className}`}
          {...props}
        >
          <option value="">--Select--</option>
          {options.map((option) => (
            <option key={option.name} className="text-dark" value={option.name}>
              {option.title}
            </option>
          ))}
        </select>
      </div>
    );
  },
);

SelectInput.displayName = "SelectInput";

export default SelectInput;
