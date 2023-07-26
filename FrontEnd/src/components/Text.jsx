import React from "react";
import { classNames } from "../utils/ClassNames";

export default function Text({ onclick, name, customClass }) {
  return (
    <div onClick={onclick} className={classNames(customClass)}>
      {name}
    </div>
  );
}
