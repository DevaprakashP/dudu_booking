import React from "react";
import { Toaster } from "react-hot-toast";
import TopBar from "../components/TopBar";

export default function Layout({ children, userData }) {
  return (
    <div className="w-[100%]  flex-col flex items-center  gap-2">
      <TopBar userData={userData} />
      <Toaster position="top-center" />
      <div className="w-[80%] flex-col flex items-center gap-2">{children}</div>
    </div>
  );
}
