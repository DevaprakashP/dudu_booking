import React from "react";
import { Toaster } from "react-hot-toast";
import TopBar from "../components/TopBar";
import { classNames } from "../utils/ClassNames";

export default function Layout({
  children,
  userData,
  customClass,
  customTopbar,
 
}) {
  return (
    <div className="w-[100%]  flex-col flex items-center  gap-2">
      <TopBar
        customClass={customTopbar}
        userData={userData}
       
      />
      <Toaster position="top-center" />
      <div
        className={classNames(
          customClass ? customClass : "w-[80%] flex-col flex items-center gap-2"
        )}
      >
        {children}
      </div>
    </div>
  );
}
