"use client";
import InputError from "@/components/admin/InputError";
import InputField from "@/components/admin/InputField";
import SelectInput from "@/components/admin/SelectInput";
import {
  addressInputData,
  genderOptions,
  homeInputData,
  occupationOptions,
  personalInputData,
  religionOptions,
  wardOptions,
} from "@/constants/inputItems";
import { holdingSchema } from "@/utils/validation/holdingSchema";
import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: "",
      guardianName: "",
      motherName: "",
      nid: "",
      mobile: "",
      yearlyIncome: "",
      religion: "",
      occupation: "",
      gender: "",
      ward: "",
      totalMember: "",
      maleMember: "",
      femaleMember: "",
      maleChildren: "",
      femaleChildren: "",
      multibuilding: "",
      building: "",
      halfbuilding: "",
      rawhouse: "",
      village: "",
      postoffice: "",
      thana: "",
      district: "",
      tax: "",
      yearlyincome: "",
      comment: "",
    },

    validationSchema: holdingSchema,
    onSubmit: (values: any) => {
      console.log(values);
      alert(values);
      // axios
      //   .post("http://localhost:5500/holding/create", values)
      //   .then((res) => router.push("/admin"))
      //   .catch((err) => console.error(err));
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
                <InputField
                  key={i}
                  formik={formik}
                  name={data.name}
                  title={data.title}
                />
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <SelectInput
                name="religion"
                title="ধর্ম"
                options={religionOptions}
                formik={formik}
              />
              <SelectInput
                name="occupation"
                title="পেশা"
                options={occupationOptions}
                formik={formik}
              />
              <SelectInput
                name="ward"
                title="ওয়ার্ড"
                options={wardOptions}
                formik={formik}
              />
              <SelectInput
                name="gender"
                title="লিংগ"
                options={genderOptions}
                formik={formik}
              />
              <div>
                <label htmlFor="totalMember" className="ml-1 text-sm">
                  খানার সদস্য
                </label>
                <div className="mt-1 flex items-start gap-2">
                  <InputField
                    formik={formik}
                    name="totalMember"
                    placeholder="মোট সদস্য"
                  />
                  <InputField
                    formik={formik}
                    name="maleMember"
                    placeholder="পুরুষ"
                  />
                  <InputField
                    formik={formik}
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
                    formik={formik}
                    name="maleChildren"
                    placeholder="ছেলে"
                  />
                  <InputField
                    formik={formik}
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
                  <InputField
                    key={data.name}
                    formik={formik}
                    name={data.name}
                    title={data.title}
                  />
                ))}
              </div>
            </div>
          </div>
          <div>
            <h2 className="mb-4 border-b text-xl">অবকাঠামোর ধরন</h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              <div className="flex flex-col gap-4">
                {homeInputData.map((data, i) => (
                  <InputField
                    key={data.name}
                    formik={formik}
                    name={data.name}
                    title={data.title}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="mb-4 border-b text-xl">বার্ষিক আয়</h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2">
            <div className="flex flex-col gap-4">
              <InputField
                key={1}
                formik={formik}
                name="yearlyincome"
                title="বাৎসরিক আয়"
              />
              <InputField
                key={2}
                formik={formik}
                name="tax"
                title="করের পরিমান"
              />
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
              <InputError formik={formik} name="comment" />
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <button
            className="rounded-md bg-primary px-6 py-2 text-pure"
            type="submit"
          >
            নিবন্ধন করুন
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
