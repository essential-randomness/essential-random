import BlogSidebar from "@theme-original/BlogSidebar";
import { ProfileCard } from "../../../components/ProfileCard";
import React from "react";

export default function BlogSidebarWrapper(props: any) {
  return (
    <div className="sidebar" style={{ gridArea: "sidebar" }}>
      <ProfileCard />
      <BlogSidebar {...props} />
    </div>
  );
}
