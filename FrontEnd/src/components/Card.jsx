import React from "react";
import { classNames } from "../utils/ClassNames";
import Text from "./Text";

export default function Card({ text1, text2, src, customClass, onclick }) {
  return (
    <div
      onClick={onclick}
      className={classNames(
        customClass ? customClass : "h-[100%] w-[200px]",
        " flex-col p-2 gap-2 items-center"
      )}
    >
      <div className="w-[100%] h-[130px] ">
        <img src={src} className="h-[100%] w-[100%]" alt="loading..." />
      </div>
      <div className="w-[100%] h-[55px] flex-col flex justify-center">
        <Text name={text1} customClass={"font-semibold text-[15px]"} />
        <Text name={text2} customClass={" text-[10px] text-[gray]"} />
      </div>
    </div>
  );
}
