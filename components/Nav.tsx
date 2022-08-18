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
            <Link href={"/"}>
              <a>Blog</a>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href={"/"}>
              <a>Projects</a>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href={"/"}>
              <a>Support me</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
