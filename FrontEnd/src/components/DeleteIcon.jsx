import React from "react";
import { classNames } from "../utils/ClassNames";
import { AiOutlineDelete } from "react-icons/ai";

export default function DeleteIcon({ onClick, customClass }) {
  return (
    <AiOutlineDelete
      onClick={onClick}
      className={classNames(
        customClass ? customClass : "z-10 text-[30px] text-[red]"
      )}
    />
  );
}
