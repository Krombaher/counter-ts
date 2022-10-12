import React from "react";
import s from '../counter/Counter.module.css';

type CounterPropsType = {
    count:number
    maxValue:number
    error?:string
}

export const Counter:React.FC<CounterPropsType> = ({count, maxValue, error}) => {

    const counterStyle = s.counter + ' ' + (count === maxValue ? s.errorCounter : '')
  return (
      <>
          <div className={counterStyle}>{error !== '' ? <span className={s.span}>{error}</span> : count}</div>
      </>
  )
}