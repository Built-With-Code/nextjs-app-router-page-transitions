"use client";

import { HTMLAttributes } from "react";

const PageWrapper = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="bg-white">
      <div {...props} />
    </div>
  );
};

export default PageWrapper;
