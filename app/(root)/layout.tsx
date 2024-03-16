import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div className="root-container">
        <div className="wrapper">
          <div className="">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default layout;
