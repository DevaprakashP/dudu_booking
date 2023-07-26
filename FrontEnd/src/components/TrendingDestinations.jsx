import React from "react";
import CardContainer from "./CardContainer";
import ooty from "../assets/ooty.jpg";
import mysore from "../assets/mysore.jpg"

export default function TrendingDestinations() {
  return (
    <div className="w-[100%] h-[650px]  flex-col flex items-center justify-center">

      <div className="h-[45%] w-[100%]  p-2 flex gap-2">
        <div className="h-[100%] w-[33%] p-2   flex items-center justify-center">
          IMG 1
        </div>
        <div className="h-[100%] w-[33%] P-2  flex items-center justify-center">
          IMG 2
        </div>
        <div className="h-[100%] w-[33%] P-2  flex items-center justify-center">
          IMG 2
        </div>
      </div>
    </div>
  );
}
