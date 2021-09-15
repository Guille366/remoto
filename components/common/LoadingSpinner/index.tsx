import { AiOutlineLoading3Quarters as Icon } from "@react-icons/all-files/ai/AiOutlineLoading3Quarters";

const LoadingSpinner = () => {
  return (
    <div className="flex py-2 px-4 mt-4 no-underline focus:outline-none col-span-2">
      <Icon className="text-purple-700 animate-spin text-3xl mx-auto" />
    </div>
  );
};

export default LoadingSpinner;
