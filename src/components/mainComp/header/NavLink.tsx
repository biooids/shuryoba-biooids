"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

function NavLink({ href, children }: NavLinkProps) {
  const path = usePathname();

  return (
    <li>
      <Link
        href={href}
        className={`hover:underline ${
          path === href ? "text-amber-300 font-bold" : ""
        }`}
      >
        {children}
      </Link>
    </li>
  );
}
export default NavLink;
