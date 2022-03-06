import React, { ReactNode } from "react";

const Labels = ({
  children,
  fav,
  level,
}: {
  children: ReactNode;
  fav?: boolean;
  level?: boolean;
  }) => {
  return (
    <div
      className={`font-bold text-sm flex items-center justify-center py-0.5 px-1.5 mx-1 my-1 rounded-lg border ${
        fav
          ? `border-red-700 text-red-700`
          : level
          ? "border-yellow-600 text-yellow-600"
          : `border-purple-700 text-purple-700`
      } `}
    >
      {children}
    </div>
  );
};

export default Labels;
