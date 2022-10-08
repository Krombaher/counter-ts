import React, {useState} from 'react';
import './App.module.css';
import s from './App.module.css'
import {Counter} from "./components/counter/Counter";
import {MainButton} from "./components/button/MainButton";

function App() {
    const maxValue = 5
    const starValue = 0
    const step = 1

    const [count, setCount] = useState<number>(starValue)

    const onNextCounter = () => {
        if (count < maxValue && count >= starValue) {
            setCount(count + step)
        }
    }

    const onResetCounter = () => {
        setCount(0)
    }

    return (
        <div className="App">
            <div className={s.app}>
               <Counter count={count}/>
                <div className={s.controls}>
                    <MainButton disabled={count === maxValue} name={'INC'} callback={onNextCounter}/>
                    <MainButton disabled={count < 1} name={'RESET'} callback={onResetCounter}/>
                </div>
            </div>
        </div>
    );
}

export default App;
