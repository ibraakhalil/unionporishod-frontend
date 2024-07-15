"use client";
import TaxCollectionForm from "@/components/admin/TaxCollectionForm";
import HoldingSearchInput from "@/components/holding/HoldingSearchInput";
import UserInfo from "@/components/holding/UserInfo";
import { SearchUserIcon } from "@/components/svg/SearchIcons";
import { useHoldingStore } from "@/stores/holdingStore";

const page = () => {
  const { userInfo } = useHoldingStore((state) => state);

  return (
    <div className="flex w-full flex-col items-center gap-6 px-8">
      <h1 className="p-4 text-2xl font-medium">কর আদায় ফর্ম</h1>
      <HoldingSearchInput className="max-w-[400px]" />
      {userInfo && (
        <div className="flex w-full flex-wrap bg-secondary-bg">
          <UserInfo className="flex-1 basis-[300px] px-5" />
          <TaxCollectionForm />
        </div>
      )}
      {!userInfo && (
        <div className="flex min-h-[300px] flex-col items-center justify-center gap-y-2">
          <SearchUserIcon className="size-[100px] text-primary/20" />
          <p className="mt-5 text-center text-gray-400">সদস্য সার্চ করুন</p>
        </div>
      )}
    </div>
  );
};

export default page;
