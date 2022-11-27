import Link from "next/link";

export const ProfileNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href={"/"}>Guestbook</Link>
        </li>
        <li>
          <Link href={"/"}>Contacts</Link>
        </li>
      </ul>
    </nav>
  );
};
