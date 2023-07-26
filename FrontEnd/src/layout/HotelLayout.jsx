import React from "react";
import Button from "../components/Button";
import Text from "../components/Text";

export default function HotelLayout({
  text1,
  text2,
  text3,
  text4,
  see,
  onclick,
  src,
}) {
  return (
    <div className="w-[100%] h-[50%] flex p-3 gap-3 bg-[#e6e6fa]">
      <div className="w-[25%] h-[100%]">
        <img src={src} alt="loading" className="h-[100%] w-[100%]" />
      </div>
      <div className="w-[75%] h-[100%] flex justify-between l-6">
        <div onClick={onclick}>
          <Text
            name={text1}
            customClass={"font-bold text-[25px] cursor-pointer"}
          />
          <Text name={text2} customClass={" text-[15px] text-[black]"} />
        </div>

        <div className="flex-col gap-2">
          <div className="h-[70%] pr-7">
            <Text name={text3} customClass={" font-semibold text-[18px]"} />
            <Text name={text4} customClass={" text-[14px] text-[grey] "} />
          </div>
          <div onClick={onclick}>
            <Button
              name={see}
              customClass={"font-bold text-[20px] text-[white] bg-[blue] cursor-pointer"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
