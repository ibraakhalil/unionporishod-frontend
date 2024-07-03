import SearchIcon from "@/components/svg/SearchIcon";

const page = () => {
  return (
    <div className="my-container flex justify-center">
      <div className="flex flex-col items-center gap-10 pt-12">
        <h1 className="max-w-[70%] text-center text-4xl leading-[50px]">
          আইডি নাম্বার বা মোবাইল নাম্বার দিয়ে আপনার সর্বশেষ হোল্ডিং তথ্য যাচাই
          করুন
        </h1>
        <div className="flex min-w-[500px] cursor-pointer items-center rounded-md bg-slate-100 p-1.5 shadow-sm">
          <input
            type="text"
            className="bg-transparent pl-4"
            placeholder="আইডি বা মোবাইল নাম্বার"
          />
          <div className="bg-primary rounded-[5px] p-3">
            <SearchIcon className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
