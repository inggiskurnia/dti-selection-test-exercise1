"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

const Navbar: FC = () => {
  const pathname = usePathname();
  return (
    <div className="bg-blue-800 px-36 py-5">
      <div>
        <ul className="flex text-white gap-5">
          <Link href={"/"}>
            <li className={pathname === "/" ? "font-bold" : ""}>Home</li>
          </Link>
          <Link href={"/profile"}>
            <li className={pathname === "/profile" ? "font-bold" : ""}>
              Profile
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
