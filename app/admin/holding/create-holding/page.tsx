"use client";
import SelectInput from "@/components/common/SelectInput";
import InputError from "@/components/common/InputError";
import InputField from "@/components/common/InputField";
import Loading from "@/components/svg/Loading";
import { CREATE_HOLDING } from "@/constants/allApiRoutes";
import {
  addressInputData,
  genderOptions,
  homeInputData,
  newHoldingInitialValues,
  occupationOptions,
  personalInputData,
  religionOptions,
  wardOptions,
} from "@/constants/inputItems";
import { holdingSchema } from "@/utils/validation/holdingSchema";
import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: newHoldingInitialValues,
    validationSchema: holdingSchema,
    onSubmit: (values: any) => {
      setLoading(true);
      axios
        .post(CREATE_HOLDING, values)
        .then((res) => {
          setLoading(false);
          toast.success("নতুন হোল্ডিং সদস্য সফলভাবে  নিবন্ধিত হয়েছে");
          router.push("/admin");
        })
        .catch((err) => console.error(err));
    },
  });

  return (
    <div className="my-container">
      <h1 className="mb-6 mt-10 text-center text-3xl font-medium">
        নতুন হোল্ডিং নিবন্ধন
      </h1>
      <form
        onSubmit={formik.handleSubmit}
        className="rounded-lg bg-secondary-bg p-8"
      >
        <div>
          <h2 className="mb-4 border-b text-xl">ব্যাক্তিগত তথ্য</h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2">
            <div className="flex flex-col justify-start gap-4">
              {personalInputData.map((data, i) => (
                <div key={i} className="flex flex-col">
                  <InputField
                    onChange={formik.handleChange}
                    value={formik.values[data.name]}
                    name={data.name}
                    title={data.title}
                  />
                  {formik.errors[data.name] && formik.touched[data.name] && (
                    <InputError message={formik.errors[data.name]} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <SelectInput
                name="religion"
                title="ধর্ম"
                options={religionOptions}
                onChange={formik.handleChange}
              />
              <SelectInput
                name="occupation"
                title="পেশা"
                options={occupationOptions}
                onChange={formik.handleChange}
              />
              <SelectInput
                name="ward"
                title="ওয়ার্ড"
                options={wardOptions}
                onChange={formik.handleChange}
              />
              <SelectInput
                name="gender"
                title="লিংগ"
                options={genderOptions}
                onChange={formik.handleChange}
              />
              <div>
                <label htmlFor="totalMember" className="ml-1 text-sm">
                  খানার সদস্য
                </label>
                <div className="mt-1 flex items-start gap-2">
                  <InputField
                    onChange={formik.handleChange}
                    value={formik.values["totalMember"]}
                    name="totalMember"
                    placeholder="মোট সদস্য"
                  />
                  <InputField
                    onChange={formik.handleChange}
                    value={formik.values["maleMember"]}
                    name="maleMember"
                    placeholder="পুরুষ"
                  />
                  <InputField
                    onChange={formik.handleChange}
                    value={formik.values["femaleMember"]}
                    name="femaleMember"
                    placeholder="মহিলা"
                  />
                </div>
              </div>
              <div className="w-full">
                <label htmlFor="totalChildren" className="ml-1 text-sm">
                  সন্তান সংখ্যা
                </label>
                <div className="mt-1 flex items-start gap-2">
                  <InputField
                    onChange={formik.handleChange}
                    value={formik.values["maleChildren"]}
                    name="maleChildren"
                    placeholder="ছেলে"
                  />
                  <InputField
                    onChange={formik.handleChange}
                    value={formik.values["femaleChildren"]}
                    name="femaleChildren"
                    placeholder="মেয়ে"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-8">
          <div>
            <h2 className="mb-4 border-b text-xl">ঠিকানা</h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              <div className="flex flex-col gap-4">
                {addressInputData.map((data, i) => (
                  <div key={i} className="flex flex-col">
                    <InputField
                      onChange={formik.handleChange}
                      value={formik.values[data.name]}
                      name={data.name}
                      title={data.title}
                    />
                    <InputError message={formik.errors[data.name]} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h2 className="mb-4 border-b text-xl">অবকাঠামোর ধরন</h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              <div className="flex flex-col gap-4">
                {homeInputData.map((data, i) => (
                  <div key={i} className="flex flex-col">
                    <InputField
                      onChange={formik.handleChange}
                      value={formik.values[data.name]}
                      name={data.name}
                      title={data.title}
                    />
                    <InputError message={formik.errors[data.name]} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="mb-4 border-b text-xl">বার্ষিক আয়</h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <InputField
                  key={1}
                  onChange={formik.handleChange}
                  value={formik.values.yearlyIncome}
                  name="yearlyIncome"
                  title="বাৎসরিক আয়"
                />
                <InputError message={formik.errors.yearlyIncome} />
              </div>
              <div className="flex flex-col">
                <InputField
                  key={1}
                  onChange={formik.handleChange}
                  value={formik.values.tax}
                  name="tax"
                  title="করের পরিমান"
                />
                <InputError message={formik.errors.yearlyIncome} />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="comment" className="ml-1 text-sm">
                মন্তব্য
              </label>
              <textarea
                id="comment"
                name="comment"
                onChange={formik.handleChange}
                rows={3}
                className="mt-1 w-full rounded-md p-2 outline-none"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <button
            className="flex h-[40px] min-w-[100px] items-center justify-center rounded-md bg-primary px-6 py-2 text-pure"
            type="submit"
          >
            {loading ? <Loading className="size-6" /> : "নিবন্ধন করুন"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
