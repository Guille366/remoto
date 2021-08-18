import Link from "next/link";
import { memo } from "react";

const Header = () => {
  return (
    <div className="w-full text-center py-8">
      <Link href="/">
        <a className="font-mono text-7xl font-bold text-gray-800 hover:text-gray-800">
          <span className="text-purple-700">{"<"}</span>
          {"REMOTO"}
          <span className="text-purple-700">{"/>"}</span>
        </a>
      </Link>
      <p className="text-gray-500 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, qui.
      </p>
    </div>
  );
};

export default memo(Header);
