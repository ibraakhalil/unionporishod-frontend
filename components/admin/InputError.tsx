interface InputErrorProps {
  formik: any;
  name: string;
}

const InputError = ({ formik, name }: InputErrorProps) => {
  return (
    <div>
      {formik.errors[name] && formik.touched[name] && (
        <div className="mt-2 text-sm text-red-600">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default InputError;
