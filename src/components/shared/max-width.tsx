import React from "react";

export default function MaxWidth({children}:{children?: React.ReactNode}) {

  return (
    <div className=" max-w-5xl p-[20px] mt-[20px]  lg:p-0 mx-auto">
      {children}
    </div>
  );
}
