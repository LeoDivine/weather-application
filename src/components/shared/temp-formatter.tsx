import React from "react";

export default function TempFormatter({
  className,
  value,
}: {
  className?: string;
  value: string;
}) {
  return (
    <span className="flex flex-row ">
      <p className={className}>{value}</p>
      <p className={!className ? "text-[13px]" : "text-[50px]"}>°F</p>
    </span>
  );
}
