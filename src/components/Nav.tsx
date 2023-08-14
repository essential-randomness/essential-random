import { clsx } from 'clsx';

export const Nav = ({currentPath}: {currentPath: string}) => {
  return (
    <header>
      <nav>
        <ul data-current={true}>
          <li className={clsx({ current: currentPath == "/" })}>
            <a href={"/"}>Home</a>
          </li>
          <li className={clsx({ current: currentPath == "/posts" })}>
            <a href={"/posts"}>Blog</a>
          </li>
          <li className={clsx({ current: currentPath == "/projects" })}>
            <a href={"/projects"}>Projects</a>
          </li>
          <li className={clsx({ current: currentPath == "/support-me" })}>
            <a href={"/support-me"}>Support me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
