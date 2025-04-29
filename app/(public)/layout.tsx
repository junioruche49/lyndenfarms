import type React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex w-full h-dvh">
      <div className="md:flex bg-green-500 w-[50%] items-center justify-center text-center hidden">
        <h1 className="text-white font-medium text-4xl">
          LYNDEN FARM <br /> Client Portal
        </h1>
      </div>
      <div className="flex bg-white md:w-[50%] w-[100%] items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export default Layout;
