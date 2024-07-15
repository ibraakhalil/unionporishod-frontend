"use client";

import { GET_HOLDING_BY_SEARCH } from "@/constants/allApiRoutes";
import { useFetchData } from "@/hooks/useFetchData";
import { cn } from "@/lib/cn";
import { useHoldingStore } from "@/stores/holdingStore";
import { ChangeEvent, useEffect, useState } from "react";
import Loading from "../svg/Loading";
import { SearchIcon } from "../svg/SearchIcons";

const HoldingSearchInput = ({ className }: { className?: string }) => {
  const [inputValue, setInputValue] = useState("");
  const { setUserInfo, setLoading, setError } = useHoldingStore(
    (state: any) => state,
  );

  const { data, isLoading, refetch, error } = useFetchData({
    url: `${GET_HOLDING_BY_SEARCH}?nid=${inputValue}`,
    queryKey: ["holding_member", inputValue],
    options: { enabled: false },
  });

  useEffect(() => {
    if (data) {
      setUserInfo(data);
    }
    if (isLoading) {
      setLoading(isLoading);
    }
    if (error) {
      const axiosError = error as any;
      setError(axiosError?.response.data.error);
    }
  }, [data, isLoading, error, setUserInfo, setError, setLoading]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9+]+$/;
    const value = e.target.value;
    if (regex.test(value) || value === "") {
      setInputValue(value);
    }
  };

  const handleClick = () => {
    if (inputValue !== "") {
      refetch();
    }
  };

  return (
    <>
      <div
        className={cn(
          "flex w-full max-w-[500px] items-center rounded-md bg-slate-100 p-[5px] shadow-sm",
          className,
        )}
      >
        <input
          type="text"
          className="bg-transparent pl-4"
          placeholder="আইডি বা মোবাইল নাম্বার"
          onChange={handleInputChange}
          value={inputValue}
        />
        <button
          onClick={handleClick}
          className="cursor-pointer rounded-[5px] bg-primary p-2.5 disabled:cursor-not-allowed disabled:opacity-70"
          disabled={inputValue === "" || isLoading}
        >
          {isLoading && <Loading className="size-5 text-white" />}
          {!isLoading && <SearchIcon className="size-5 text-white" />}
        </button>
      </div>
    </>
  );
};

export default HoldingSearchInput;
