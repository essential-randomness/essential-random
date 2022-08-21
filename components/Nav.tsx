import Link from "next/link";

export const Nav = () => {
  return (
    <header>
      <nav>
        <ul data-current={true}>
          <li>
            <Link href={"/"}>
              <a>Home</a>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href={"/blog"}>
              <a>Blog</a>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href={"/projects"}>
              <a>Projects</a>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href={"/support-me"}>
              <a>Support me</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
