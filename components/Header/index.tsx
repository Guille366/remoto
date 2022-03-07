import Link from "next/link";
import { useRouter } from "next/router";
import { memo } from "react";
import NavItem from "./NavItem";

const Header = () => {
  const router = useRouter();

  const isHome = router.pathname === "/" || router.asPath === "/page/1";
  const isFavs = router.pathname === "/favs";

  return (
    <div
      className={`flex flex-col sm:flex-row justify-between w-full py-4 ${
        isHome ? "" : "mb-8 border-b"
      } border-gray-200`}
    >
      <div className="self-center flex items-center">
        <Link href="/">
          <a className={`font-code text-6xl md:text-5xl font-bold no-underline hover:text-gray-800 ${isHome ? "text-white" : "text-violet-700"}`}>
            REMOTO
          </a>
        </Link>
      </div>
      <div className={`self-center flex items-center mt-4 sm:mt-0`}>
        <NavItem to="/" condition={isHome} text="Home" />
        <NavItem to="/favs" condition={isHome} active={isFavs} text="Favoritos" />
      </div>
    </div>
  );
};

export default memo(Header);
