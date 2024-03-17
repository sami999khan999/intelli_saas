import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/Sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Sidebar />
      <MobileNav />
      <div className="">
        <div className="wrapper">
          <div className="">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default layout;
