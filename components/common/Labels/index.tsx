import { useRouter } from "next/router";
import React, { ReactNode } from "react";

const Labels = ({
  children,
  fav,
  level,
  name,
}: {
  children: ReactNode;
  fav?: boolean;
  level?: boolean;
  name: string;
  }) => {
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();

    const url = `/search/${name}`;

    router.push(url);
  }
  
  return (
    <div
      className={`font-bold text-sm flex items-center justify-center py-0.5 px-1.5 mx-1 my-1 rounded-lg border whitespace-nowrap ${
        fav
          ? `border-red-700 text-red-700 hover:bg-red-700 hover:text-white`
          : level
          ? "border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white"
          : `border-violet-700 text-violet-700 hover:bg-violet-700 hover:text-white`
        } `}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default Labels;
