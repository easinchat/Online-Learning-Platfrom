"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ href, children }) => {
  const pathName = usePathname();
  // console.log(pathName, "pathname");
  const isActive = href === pathName;
  return (
    <Link
      href={href}
      className={`${isActive ? "border-b-2 border-b-purple-500" : ""}`}
    >
      {children}
    </Link>
  );
};

export default Navlink;
