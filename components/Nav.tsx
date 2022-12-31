import Link from "next/link";

export const Nav = () => {
  return (
    <header>
      <nav>
        <ul data-current={true}>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li className="current">
            <Link href={"/posts"}>Blog</Link>
          </li>
          <li>
            <Link href={"/projects"}>Projects</Link>
          </li>
          <li>
            <Link href={"/support-me"}>Support me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
