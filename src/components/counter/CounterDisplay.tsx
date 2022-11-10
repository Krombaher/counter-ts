import React from "react";
import s from '../counter/Counter.module.css';

type CounterPropsType = {
    count: number
    max: number
    error?: string
}

export const CounterDisplay: React.FC<CounterPropsType> = ({count, max, error}) => {

    const counterStyle = s.counter + ' ' + (count === max ? s.errorCounter : '')
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