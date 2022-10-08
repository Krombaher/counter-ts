import React from "react";
import s from '../counter/Counter.module.css';

type CounterPropsType = {
    count:number
    maxValue:number
}

export const Counter:React.FC<CounterPropsType> = ({count, maxValue}) => {

    const counterStyle = s.counter + ' ' + (count === maxValue ? s.errorCounter : '')
  return (
      <>
          <div className={counterStyle}>{count}</div>
      </>
  )
}