import React from "react";
import s from '../counter/Counter.module.css';

type CounterPropsType = {
    count:number
}

export const Counter:React.FC<CounterPropsType> = ({count}) => {

    const counterStyle = s.counter + ' ' + (count === 5 ? s.errorCounter : '')
  return (
      <>
          <div className={counterStyle}>{count}</div>
      </>
  )
}