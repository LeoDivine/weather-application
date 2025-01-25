"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SearchInput() {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push(`/search/${searchValue}`);
  };
  const handleOnchange = (value: string) => {
    setSearchValue(value);
  };
  return (
    <div className=" w-full lg:w-[60%] mx-auto ">
      <form className=" gap-3 flex" onSubmit={handleSubmit}>
        <div className=" w-full relative">
          <Search className=" top-2 ml-[14px] absolute" />
          <Input
            type="text"
            value={searchValue}
            onChange={(e) => handleOnchange(e.target.value)}
            className=" pl-[50px] rounded-full border-0 focus-visible:ring-offset-0 ring-offset-transparent  bg-[#333]"
            placeholder="Search for a location"
          />
        </div>
        <Input
          className=" hidden lg:inline cursor-pointer rounded-full w-[15%] bg-[#333] border-none text-[#fff]"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}
