"use client";
import useHoldingStore from "@/stores/holdingStore";
import { convertToBanglaDigits } from "@/utils/numberConverter";
import Link from "next/link";
import { SearchUserIcon } from "../svg/SearchIcons";

const SearchInfo = () => {
  const { userInfo } = useHoldingStore((state) => state);

  return (
    <div className="mt-12 overflow-hidden rounded-xl bg-slate-100">
      {userInfo ? (
        <div>
          <div className="bg-primary/20 px-10 py-6">
            <div className="flex w-full items-center justify-between">
              <div className="flex flex-col gap-1">
                <h2 className="text-3xl font-semibold">মোঃ আব্দুল হালিম</h2>
                <p className="text-base">পিতার নামঃ আবু বকর</p>
                <p className="text-base">হোল্ডিং নাম্বারঃ ০৫</p>
                <p className="text-base">
                  ভোটার আইডিঃ {convertToBanglaDigits(userInfo.nid)}
                </p>
              </div>
              <Link href={`holding/${userInfo.nid}`}>
                <button className="rounded-md bg-blue-600 px-4 py-1.5 text-white">
                  প্রোফাইল দেখুন
                </button>
              </Link>
            </div>
          </div>
          <div className="min-h-[300px] px-10 py-4">
            <h1 className="mt-3 text-center text-xl font-semibold">
              সর্বশেষ কর আদায়
            </h1>
            <table className="mt-4 w-full">
              <thead className="bg-primary text-left text-white">
                <tr className="[&>th]:p-2 [&>th]:px-3">
                  <th>ক্রমিক নং</th>
                  <th>তারিখ</th>
                  <th>অর্থ বছর</th>
                  <th>জমা টাকা</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-b [&_td]:px-3 [&_td]:py-2">
                <tr>
                  <td>১</td>
                  <td>০৮ ফেব ২০২৩</td>
                  <td>{convertToBanglaDigits("2022-23")}</td>
                  <td>৳৪০০</td>
                </tr>
                <tr>
                  <td>২</td>
                  <td>০৮ ফেব ২০২৩</td>
                  <td>২০২২-২৩</td>
                  <td>৳৪০০</td>
                </tr>
                <tr>
                  <td>৩</td>
                  <td>০৮ ফেব ২০২৩</td>
                  <td>২০২২-২৩</td>
                  <td>৳৪০০</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="flex w-full justify-center py-16">
          <div>
            <SearchUserIcon className="size-[100px] text-primary/20" />
            <p className="mt-5 text-center text-gray-400">হোল্ডিং সার্চ করুন</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchInfo;
