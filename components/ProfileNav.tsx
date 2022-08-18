import Link from "next/link";

export const ProfileNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href={"/"}>
            <a>Profile</a>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href={"/"}>
            <a>Guestbook</a>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href={"/"}>
            <a>Contacts</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
