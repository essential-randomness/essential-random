import Link from "next/link";

export const Nav = () => {
  return (
    <header>
      <nav>
        <ul data-current={true}>
          <li>
            <Link href={"/"}>
              Home
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href={"/blog"}>
              Blog
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href={"/projects"}>
              Projects
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href={"/support-me"}>
              Support me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
