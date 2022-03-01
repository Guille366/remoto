import React from 'react'
import Link from "next/link";

interface NavItemTypes {
    condition?: boolean;
    active?: boolean;
    text: string;
    to: string;
}

const NavItem: React.FC<NavItemTypes> = ({ condition, text, to, active }) => {
  return (
    <Link href={to}>
        <a
              className={`
                font-nunito no-underline font-bold px-4 py-1 ml-2 rounded 
                ${condition ? "text-white md:hover:text-gray-800" : "text-gray-800 hover:text-purple-700"}
                ${active ? "text-purple-700" : ""}
                `}
        >
            {text}
        </a>
    </Link>
  )
}

export default NavItem