import React from "react";
import { classNames } from "../utils/ClassNames";
import { AiOutlineEdit } from "react-icons/ai";

export default function EditIcon({ onClick, customClass }) {
  return (
    <AiOutlineEdit
      onClick={onClick}
      className={classNames(
        customClass ? customClass : "text-[30px] text-[green]"
      )}
    />
  );
}
