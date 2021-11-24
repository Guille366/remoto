import React, { ReactNode } from "react";

const Labels = ({
  key,
  children,
  fav,
}: {
  key: number;
  children: ReactNode;
  fav?: boolean;
}) => {
  return (
    <div
      className={`font-bold text-sm flex items-center justify-center py-0.5 px-1.5 mx-1 my-1 rounded-lg border ${
        fav
          ? `border-red-700 text-red-700`
          : `border-purple-700 text-purple-700`
      } `}
      key={key}
    >
      {children}
    </div>
  );
};

export default Labels;
