import React from "react";

const JobsAvailable = ({ totalAvailable }: { totalAvailable?: number }) => {
  return (
    <>
      {totalAvailable && (
        <span className="whitespace-nowrap text-sm pt-0">
          {totalAvailable > 1
            ? totalAvailable + " vagas disponíveis"
            : totalAvailable + " vaga disponível"}
        </span>
      )}
    </>
  );
};

export default JobsAvailable;
