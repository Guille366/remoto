import Link from "next/link";
import { useRouter } from "next/router";
import { memo } from "react";

const Header = () => {
  const router = useRouter();

  const isHome = router.pathname === "/" || router.asPath === "/page/1";
  const isFavs = router.pathname === "/favs";

  return (
    <div className="flex flex-col sm:flex-row justify-between w-full py-4">
      <div className="self-center flex items-center">
        <Link href="/">
          <a className="font-code text-6xl md:text-5xl font-bold no-underline text-gray-800 hover:text-gray-800">
            <span className="text-purple-700 font-normal">{"<"}</span>
            {"REMOTO"}
            <span className="text-purple-700 font-normal">{"/>"}</span>
          </a>
        </Link>
      </div>
      <div className={`self-center flex items-center`}>
        <Link href="/">
          <a
            className={`${
              isHome ? "text-purple-900 font-bold" : "text-purple-700"
            } font-nunito font-light no-underline px-4 py-2 text-purple-700 hover:text-purple-900`}
          >
            Home
          </a>
        </Link>
        <Link href="/favs">
          <a
            className={`${
              isFavs ? "text-purple-900 font-bold" : "text-purple-700"
            } font-nunito font-light no-underline px-4 py-2 text-purple-700 hover:text-purple-900`}
          >
            Favoritos
          </a>
        </Link>
      </div>
    </div>
  );
};

export default memo(Header);
