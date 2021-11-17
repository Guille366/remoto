import React from "react";

const JobsAvailable = ({
  totalAvailable,
  fav,
}: {
  totalAvailable?: number;
  fav?: boolean;
}) => {
  return (
    <>
      {totalAvailable !== 0 && totalAvailable !== undefined && (
        <span className="whitespace-nowrap font-light text-sm pt-0">
          {totalAvailable > 1
            ? totalAvailable +
              (fav ? " vagas favoritadas" : " vagas disponíveis")
            : totalAvailable + (fav ? " vaga favoritada" : " vaga disponível")}
        </span>
      )}
    </>
  );
};

export default JobsAvailable;
