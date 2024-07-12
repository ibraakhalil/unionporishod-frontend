"use client";
import { useHoldingStore } from "@/stores/holdingStore";
import { ChangeEvent, useState } from "react";
import Loading from "../svg/Loading";
import { SearchIcon } from "../svg/SearchIcons";

const HoldingSearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  const { loading, setUserInfo, setLoading } = useHoldingStore(
    (state: any) => state,
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9+]+$/;
    const value = e.target.value;
    if (regex.test(value) || value === "") {
      setInputValue(value);
    }
  };

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      setUserInfo({ name: "search", nid: inputValue });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex min-w-[500px] items-center rounded-md bg-slate-100 p-[5px] shadow-sm">
      <input
        type="text"
        className="bg-transparent pl-4"
        placeholder="আইডি বা মোবাইল নাম্বার"
        onChange={handleInputChange}
        value={inputValue}
      />
      <button
        onClick={handleSearch}
        className="cursor-pointer rounded-[5px] bg-primary p-2.5 disabled:cursor-not-allowed disabled:opacity-70"
        disabled={inputValue === ""}
      >
        {!loading && <SearchIcon className="size-5 text-white" />}
        {loading && <Loading className="size-5 text-white" />}
      </button>
    </div>
  );
};

export default HoldingSearchInput;
