"use client";
import React from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SearchInput() {
  const router = useRouter();

  const handleSubmit = () => [router.push("/search/[query]")];
  return (
    <div className=" w-[60%] mx-auto ">
      <div className=" gap-3 flex">
        <div className=" w-full relative">
          <Search className=" top-2 ml-[14px] absolute" />
          <Input
            type="text"
            className=" pl-[50px] rounded-full border-0 focus-visible:ring-offset-0 ring-offset-transparent  bg-[#333]"
            placeholder="Search for a location"
          />
        </div>
        <Input
          onClick={handleSubmit}
          className=" cursor-pointer rounded-full w-[15%] bg-[#333] border-none text-[#fff]"
          type="submit"
          value="Submit"
        />
      </div>
    </div>
  );
}
