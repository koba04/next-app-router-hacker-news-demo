"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

type NavLink = {
  text: string,
  url: string
}

const NavLink = ({ link, currentPathname }: { link: NavLink, currentPathname: string }) => (
  <span className="text-xl">
    {
      link.url === currentPathname
      ? link.text
      : <Link
          href={link.url}
          className="text-xl text-violet-500 hover:text-violet-400 underline"
        >
          {link.text}
        </Link>
    }
  </span>
)

export const NavLinks = ({ links }: { links: NavLink[]}) => {
  const pathname = usePathname();
  return (
    <nav className="flex justify-center gap-4">
      {links.map((link, i) => (
        <Fragment key={link.url}>
          <NavLink link={link} currentPathname={pathname} />
          {i !== links.length - 1 ? "/" : ""}
        </Fragment>
      ))}
    </nav>
  )
}