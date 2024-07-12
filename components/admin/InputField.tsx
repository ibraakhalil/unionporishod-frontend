import { cn } from "@/lib/cn";
import InputError from "./InputError";

interface InputFieldProps {
  formik: any;
  name: string;
  title?: string;
  placeholder?: string;
  className?: string;
}

const InputField = ({ formik, name, ...props }: InputFieldProps) => {
  return (
    <div className={cn("flex flex-col", props.className)}>
      <div className="flex flex-col gap-1">
        {props.title && (
          <label className="ml-1 text-sm" htmlFor={name}>
            {props.title}
          </label>
        )}
        <input
          id={name}
          name={name}
          type="text"
          onChange={formik.handleChange}
          value={formik.values[name]}
          placeholder={props.placeholder && props.placeholder}
          className="min-h-9 rounded-md px-3 text-sm placeholder:text-sm"
        />
      </div>
      <InputError formik={formik} name={name} />
    </div>
  );
};

export default InputField;
