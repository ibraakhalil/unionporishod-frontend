"use client";
import { SearchIcon } from "@/components/svg/SearchIcons";
import { GET_ALL_HOLDINGS } from "@/constants/allApiRoutes";
import { useFetchData } from "@/hooks/useFetchData";
import { UserInfoType } from "@/types/holding";
import Link from "next/link";

const page = () => {
  const { data }: { data: any } = useFetchData({
    url: GET_ALL_HOLDINGS,
    queryKey: ["all_holding_member"],
  });

  return (
    <div className="min-h-[500px] rounded-xl bg-secondary-bg pb-4">
      <div className="flex items-center justify-between border-b px-4 py-3">
        <h3 className="text-xl font-medium">All Tax Holder</h3>
        <div>
          <div className="flex h-9 w-[240px] items-center gap-3 rounded-md border bg-pure px-4">
            <input
              type="text"
              placeholder="আইডি দিয়ে সার্চ করুন..."
              className="w-full text-sm outline-none"
            />
            <SearchIcon />
          </div>
        </div>
      </div>
      {data && (
        <ul className="mt-5 flex flex-col gap-2">
          {data.map((item: UserInfoType) => (
            <li className="grid grid-cols-4 px-4 py-1 hover:bg-pure">
              <p>{item.name}</p>
              <p>{item.ward}</p>
              <p>{item.nid}</p>
              <Link href={`holding/${item.id}`}>
                <button className="rounded-md bg-primary px-4 py-1 text-sm text-white">
                  প্রোফাইল দেখুন
                </button>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default page;
