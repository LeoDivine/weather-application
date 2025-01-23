import React from "react";

export default function MaxWidth({ children }: { children: React.ReactNode }) {
  return <div className=" max-w-5xl h-[600px] py-[20px]  mx-auto" >{children}</div>;
}
