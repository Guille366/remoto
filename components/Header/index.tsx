import Link from "next/link";
import { memo } from "react";

const Header = ({ fav }: { fav?: boolean }) => {
  return (
    <div className="w-full text-center py-8">
      <Link href="/">
        <a className="font-code text-6xl md:text-7xl no-underline text-gray-800 hover:text-gray-800">
          <span className="text-purple-700 font-bold">{"<"}</span>
          {"REMOTO"}
          <span className="text-purple-700 font-bold">{"/>"}</span>
        </a>
      </Link>
      <p className="text-gray-500 text-sm">
        Dev jobs para trabalhar de onde quiser.
      </p>
      <div className={`${fav ? "hidden" : "block"} m-auto pt-4`}>
        <Link href="/favs">
          <a
            className={`font-nunito font-bold no-underline px-4 py-2 rounded shadow-md text-gray-100 bg-purple-700 hover:bg-purple-900 hover:shadow-lg`}
          >
            Favoritos
          </a>
        </Link>
      </div>
      <div className={`${!fav ? "hidden" : "block"} m-auto pt-4`}>
        <Link href="/">
          <a
            className={`font-nunito font-bold no-underline px-4 py-2 rounded shadow-md text-gray-100 bg-purple-700 hover:bg-purple-900 hover:shadow-lg`}
          >
            Home
          </a>
        </Link>
      </div>
    </div>
  );
};

export default memo(Header);
