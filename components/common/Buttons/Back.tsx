import { useRouter } from "next/router";
import React from "react";
import { TiArrowBackOutline as Icon } from "@react-icons/all-files/ti/TiArrowBackOutline";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="py-1 text-3xl flex items-center text-violet-700 hover:text-violet-900"
    >
      <Icon />
    </button>
  );
};

export default BackButton;
