import { SelectInputType } from "@/types/adminType";
import React from "react";
import InputError from "./InputError";

interface SelectInputProps {
  name: string;
  title: string;
  options: SelectInputType[];
  formik: any;
}

const SelectInput: React.FC<SelectInputProps> = ({
  name,
  title,
  options = [],
  formik,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="ml-1 text-sm" htmlFor={name}>
        {title}
      </label>
      <select
        id={name}
        name={name}
        onChange={formik.handleChange}
        className="rounded-md bg-primary-bg px-3 py-1.5 text-sm text-dark"
      >
        <option value="">সিলেক্ট</option>
        {options.map((option) => (
          <option key={option.name} className="text-dark" value={option.title}>
            {option.title}
          </option>
        ))}
      </select>
      <InputError formik={formik} name={name} />
    </div>
  );
};

export default SelectInput;
