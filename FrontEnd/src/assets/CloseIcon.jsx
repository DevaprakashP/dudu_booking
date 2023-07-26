import React from "react";
import { GrClose } from "react-icons/gr";
import { classNames } from "../utils/ClassNames";

export default function CloseIcon({ customClass, onclick }) {
  return <GrClose className={classNames(customClass)} onClick={onclick} />;
}
