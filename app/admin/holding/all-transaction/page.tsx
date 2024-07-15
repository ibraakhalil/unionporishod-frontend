"use client";
import { SearchIcon } from "@/components/svg/SearchIcons";
import { GET_ALL_TRANSACTIONS } from "@/constants/allApiRoutes";
import { TransactionType } from "@/types/holding";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import moment from "moment";

const getTaxTransactions = async () => {
  const { data } = await axios.get(GET_ALL_TRANSACTIONS);
  console.log(data);

  return data;
};

const page = () => {
  const { data, error } = useQuery({
    queryKey: ["all_transactions"],
    queryFn: getTaxTransactions,
  });

  return (
    <div className="min-h-[500px] rounded-xl bg-secondary-bg pb-4">
      <div className="flex items-center justify-between border-b px-4 py-3">
        <h3 className="text-xl font-medium">All Transaction</h3>
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
      <ul className="mt-5 flex flex-col gap-2">
        <li className="grid grid-cols-4 px-4 py-1 font-medium">
          <p>নাম</p>
          <p>পরিমাণ</p>
          <p>অর্থ বছর</p>
          <p>তারিখ</p>
        </li>
        {data &&
          data.map((item: TransactionType) => (
            <li className="grid grid-cols-4 px-4 py-1 hover:bg-pure">
              <p>{item.holderName}</p>
              <p>{item.taxAmount}</p>
              <p>{item.fiscalYear}</p>
              <p>{moment(item.createdAt).format("ll")}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default page;
