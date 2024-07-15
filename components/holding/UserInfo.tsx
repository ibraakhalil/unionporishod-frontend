import { cn } from "@/lib/cn";
import { useHoldingStore } from "@/stores/holdingStore";
import { convertToBanglaDigits } from "@/utils/numberConverter";
import Link from "next/link";

interface UserInfoProps {
  className?: string;
}

const UserInfo = ({ className }: UserInfoProps) => {
  const { userInfo } = useHoldingStore((state) => state);

  if (!userInfo) return null;

  return (
    <div className={cn("bg-primary/20 px-10 py-6", className)}>
      <div className="flex w-full flex-wrap justify-between gap-y-8">
        <div className="flex basis-[300px] flex-col gap-1">
          <h2 className="text-3xl font-semibold">{userInfo.name}</h2>
          <p className="text-base">
            পিতার/স্বামীর নামঃ {userInfo.guardianName}
          </p>
          <p className="text-base">হোল্ডিং নাম্বারঃ ০৫</p>
          <p className="text-base">
            ভোটার আইডিঃ {convertToBanglaDigits(userInfo.nid)}
          </p>
        </div>
        <Link href={`holding/${userInfo.id}`}>
          <button className="rounded-md bg-primary px-4 py-1.5 text-white">
            প্রোফাইল দেখুন
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserInfo;
