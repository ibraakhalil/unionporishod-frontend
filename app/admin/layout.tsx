import AdminNav from "@/components/admin/AdminNav";
import LeftSidebar from "@/components/admin/AdminSidebar";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}
export default function layout({ children }: LayoutProps) {
  return (
    <div className="flex">
      <LeftSidebar />
      <div className="w-full">
        <AdminNav />
        <div className="w-full overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
