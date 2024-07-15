"use client";
import { cn } from "@/lib/cn";
import { useHoldingStore } from "@/stores/holdingStore";
import { convertToBanglaDigits } from "@/utils/numberConverter";
import Loading from "../svg/Loading";
import { SearchUserIcon } from "../svg/SearchIcons";
import UserInfo from "./UserInfo";

interface SearchInfoProps {
  className?: string;
}

const SearchInfo = ({ className }: SearchInfoProps) => {
  const { userInfo, error, loading } = useHoldingStore((state) => state);

  return (
    <div
      className={cn("mt-12 overflow-hidden rounded-xl bg-slate-100", className)}
    >
      {userInfo && (
        <div>
          <UserInfo />
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
      )}
      {!userInfo && !loading && (
        <div className="flex w-full flex-col items-center justify-center py-16">
          <SearchUserIcon
            className={cn("size-[100px] text-primary/20", {
              "text-red-600/70": error,
            })}
          />
          {!error && (
            <p className="mt-5 text-center text-gray-400">হোল্ডিং সার্চ করুন</p>
          )}
          {error && <p className="mt-5 text-center text-red-600">{error}</p>}
        </div>
      )}
      {loading && (
        <div className="flex w-full flex-col items-center justify-center py-16">
          <Loading className="size-12" />
          <p className="mt-5 text-center text-gray-400"> সার্চিং...</p>
        </div>
      )}
    </div>
  );
};

export default SearchInfo;
