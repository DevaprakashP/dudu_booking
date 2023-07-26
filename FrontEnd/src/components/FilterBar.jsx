import React, { useState } from "react";
// import moment from "moment";
import { DatePicker } from "antd";
import Button from "./Button";
import { LiaBedSolid } from "react-icons/lia";
import CloseIcon from "../assets/CloseIcon";

const { RangePicker } = DatePicker;

export default function FilterBar({ onPlaceFilter }) {
  const [clicky, setclicky] = useState("");
  const [filters, setfilters] = useState({
    place: "",
    from: "",
    to: "",
  });
  const handleInput = (field) => (event) => {
    const { value } = event.target;
    setfilters({
      ...filters,
      [field]: value,
    });
    switch (field) {
      case "place":
        onPlaceFilter(value);
        break;
      case "from":
        console.log(value);
        break;
      case "to":
        console.log(value);
        break;
      default:
        break;
    }
  };
  console.log("DATES", filters);
  return (
    <>
      <div className="w-[100%] h-[80px] bg-[orange] flex items-center justify-between p-[5px] gap-[5px] bg-[orange]">
        <div className="h-[100%] w-[35%] bg-white flex items-center justify-center">
          <div className="relative p-2 w-[100%] h-[100%] flex items-center gap-3 p-2">
            <input
              value={filters.place}
              onChange={
                handleInput("place")
                // setclicky("closeIcon");
              }
              className="w-[100%] h-[100%]  pl-[50px] "
              type="text"
              placeholder="Where are you going?"
            />
            {"closeIcon" === clicky ? (
              <CloseIcon
                onclick={() => {
                  // setfilters({ ...filters, place: "" });
                  setclicky("");
                }}
                customClass={"absolute right-[13px]"}
              />
            ) : null}
            <LiaBedSolid className="text-[35px] left-[12px] absolute text-[gray]" />
          </div>
          {/* {"clipBoard" === clicky ? (
            <div className="shadow absolute top-[41%] bg-white w-[440px] p-2 flex-col flex items-center gap-2">
              {hotes
                .filter((val) => {
                  if (val.place.toLowerCase().includes(place.toLowerCase())) {
                    return val;
                  }
                })
                .map((i) => (
                  <Text
                    onclick={() => {
                      setplace(i.place);
                    }}
                    name={i.place}
                    customClass={"hover:bg-[gray] rounded w-[100%]"}
                  />
                ))}
            </div>
          ) : null} */}
        </div>
        <div className="h-[100%] w-[27%] bg-white flex items-center justify-center">
          <input
            type="date"
            className="w-[50%] h-[100%]"
            value={filters.from}
            onChange={
              handleInput("from")
              // setfilters(
              //   e.map((i) => {
              //     return moment(i).format("DD-MM-YYYY");
              //   })
              // );
            }
          />
          <input
            type="date"
            className="w-[50%] h-[100%]"
            value={filters.to}
            onChange={
              handleInput("to")
              // setfilters(
              //   e.map((i) => {
              //     return moment(i).format("DD-MM-YYYY");
              //   })
              // );
            }
          />
        </div>

        <div className="h-[100%] w-[27%] bg-white flex items-center justify-center">
          Persons
        </div>
        <div className="h-[100%] w-[10%] bg-white flex items-center justify-center">
          <Button
            name={"Search"}
            customClass={
              "h-[100%] w-[100%] bg-[#0071c2] text-[white] hover:scale-[1] hover:bg-[#003580]"
            }
          />
        </div>
      </div>
    </>
  );
}
