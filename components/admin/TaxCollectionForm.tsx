import { TAX_COLLECTION } from "@/constants/allApiRoutes";
import { useHoldingStore } from "@/stores/holdingStore";
import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import InputField from "../common/InputField";
import SelectInput from "../common/SelectInput";
import Loading from "../svg/Loading";

const fiscalYears = [
  { name: "2020-2021", title: "2020-2021" },
  { name: "2021-2022", title: "2021-2022" },
  { name: "2022-2023", title: "2022-2023" },
  { name: "2023-2024", title: "2023-2024" },
  { name: "2024-2025", title: "2024-2025" },
  { name: "2025-2026", title: "2025-2026" },
  { name: "2026-2027", title: "2026-2027" },
];

const TaxCollectionForm = () => {
  const [loading, setLoading] = useState(false);
  const { userInfo } = useHoldingStore((state) => state);

  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      holderName: userInfo?.name,
      taxHolderId: userInfo?.id,
      fiscalYear: "",
      taxAmount: 200,
      dueTax: 0,
      comment: "no comment",
    },
    validationSchema: "",
    onSubmit: (values: any) => {
      setLoading(true);
      axios
        .post(TAX_COLLECTION, values)
        .then((res) => {
          setLoading(false);
          toast.success("নতুন হোল্ডিং সদস্য সফলভাবে  নিবন্ধিত হয়েছে");
          router.push("/admin/all-holding-tax");
        })
        .catch((err) => console.error(err));
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-1 basis-[300px] flex-col gap-y-3 p-4"
    >
      <SelectInput
        name="fiscalYear"
        options={fiscalYears}
        onChange={formik.handleChange}
        title="অর্থ বছর"
      />
      <InputField
        name="taxAmount"
        title="পরিশোধিত টাকার পরিমান"
        placeholder={formik.values["taxAmount"]}
        disabled
      />
      <InputField
        name="dueTax"
        title="বকেয়া টাকার পরিমান"
        placeholder={formik.values["dueTax"]}
        disabled
      />
      <button
        type="submit"
        className="mt-4 flex items-center justify-center rounded-md bg-primary px-4 py-2 text-white"
      >
        {loading ? <Loading className="size-5" /> : "সাবমিক করুন"}
      </button>
    </form>
  );
};

export default TaxCollectionForm;
