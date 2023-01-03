"use client";

import Link from "next/link";
import cn from "classnames";
import { useSelectedLayoutSegment } from "next/navigation";

export const Nav = () => {
  const currentSection = useSelectedLayoutSegment();
  return (
    <header>
      <nav>
        <ul data-current={true}>
          <li className={cn({ current: currentSection == null })}>
            <Link href={"/"}>Home</Link>
          </li>
          <li className={cn({ current: currentSection == "posts" })}>
            <Link href={"/posts"}>Blog</Link>
          </li>
          <li className={cn({ current: currentSection == "projects" })}>
            <Link href={"/projects"}>Projects</Link>
          </li>
          <li className={cn({ current: currentSection == "support-me" })}>
            <Link href={"/support-me"}>Support me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
