import React from "react";
import { classNames } from "../utils/ClassNames";
import Text from "./Text";

export default function CardContainer({
  text1,
  text2,
  children,
  customClass,
  customClass2,
}) {
  return (
    <div
      className={classNames(
        customClass ? customClass : "h-[55%] ",
        "w-[100%] flex-col flex items-center"
      )}
    >
      <div className="w-[100%] h-[80px]  p-2 flex-col flex justify-center">
        <Text name={text1} customClass={"font-semibold text-[25px]"} />
        <Text name={text2} customClass={" text-[15px] text-[gray]"} />
      </div>
      <div
        className={classNames(
          customClass2 ? customClass2 : "h-[570px] ",
          "w-[100%]  flex gap-2 p-2"
        )}
      >
        {children}
      </div>
    </div>
  );
}
