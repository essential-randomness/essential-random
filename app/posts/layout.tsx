// These styles apply to every route in the application
import "./posts.css";

import { ProfileCard } from "components/ProfileCard";
import { ProfileNav } from "../../components/ProfileNav";

const PostsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="posts">
      <aside>
        <ProfileCard />
        <ProfileNav />
      </aside>
      {children}
    </main>
  );
};

export default PostsLayout;
