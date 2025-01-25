import { Button } from "@/components/ui/button";
import { Frown } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function NoSearch() {
  return (
    <div className=" text-white w-[80%] mx-auto my-[200px] flex items-center justify-center flex-col bg-primary">
      <Frown className="w-20 h-20 " />
      <p className="mt-[10px] text-[30px] text-center ">
        You would only see this page if you did not search for anything!!
      </p>
      <Button asChild className="bg-[#333] mt-[15px] rounded-full ">
        <Link href="/">Search</Link>
      </Button>
    </div>
  );
}
