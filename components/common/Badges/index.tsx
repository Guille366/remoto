import React from "react";

const Badges = ({
  newOpening,
  hotOpening,
}: {
  newOpening: boolean;
  hotOpening: boolean;
}) => {
  return (
    <div className="opacity-80 font-bold font-code absolute -mt-1 top-0 left-0 p-2 pt-1">
      <span className="text-red-600 relative">
        <small className="absolute animate-bounce pt-1">
          {newOpening && "Nova!"}
        </small>
      </span>
      <span
        className={`text-yellow-500 ${
          newOpening ? "left-12" : "left-0"
        } relative`}
      >
        <small className="absolute animate-bounce pt-1">
          {hotOpening && "Hot!"}
        </small>
      </span>
    </div>
  );
};

export default Badges;
