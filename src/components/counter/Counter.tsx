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
          <div className={s.counterDisplay}>
              {error !== '' ?
              <div className={s.errorText}>
                  {error}
              </div>
              : <div className={counterStyle}>
                      {count}
              </div>}
          </div>
  )
}