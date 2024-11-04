import { AppSidebar } from "@/app/modules/mycomponents/Sidebar";
import React from "react";


interface layoutProps{
  children: React.ReactNode;
}

const Layout:React.FC<layoutProps> = ({ children }) => {
  return (
    <div className="flex justify-start items-center bg-gray-400">
      <AppSidebar />
      {children}
    </div>
  );
};

export default Layout;
