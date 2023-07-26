import React from 'react'
import { classNames } from '../utils/ClassNames'

export default function Button({name,onclick,customClass}) {
  return (
   <button onClick={onclick} className={classNames(customClass?customClass:"border-[1px] border-[gray] "," p-2 hover:scale-[1.1] transition-all")}>{name}</button>
  )
}
