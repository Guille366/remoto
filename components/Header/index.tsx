import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full text-center py-8">
      <Link href="/">
        <a className="font-mono text-7xl font-bold text-gray-800 hover:text-gray-800">
          REMOTO
        </a>
      </Link>
    </div>
  );
};

export default Header;
