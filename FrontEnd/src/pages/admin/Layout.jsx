import React from "react";
import { Toaster } from "react-hot-toast";
import TopBar from "../../components/TopBar";

export default function Layout({ children, userData }) {
  return (
    <>
      <div className="h-[100vh] w-[100%] flex">
        <TopBar userData={userData} />
        <Toaster position="top-center" reverseOrder={false} />
        {children}
      </div>
    </>
  );
}
