import HoldingSearchInput from "@/components/holding/HoldingSearchInput";
import SearchInfo from "@/components/holding/SearchInfo";

const page = () => {
  return (
    <div className="my-container">
      <div className="flex flex-col items-center gap-10 pt-12">
        <h1 className="max-w-[70%] text-center text-4xl leading-[50px]">
          আইডি নাম্বার বা মোবাইল নাম্বার দিয়ে আপনার সর্বশেষ হোল্ডিং তথ্য যাচাই
          করুন
        </h1>
        <HoldingSearchInput />
      </div>
      <SearchInfo />
    </div>
  );
};

export default page;
