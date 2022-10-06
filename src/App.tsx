import React, {useState} from 'react';
import './App.module.css';
import s from './App.module.css'

function App() {
    const [count, setCount] = useState(0)

    const onStyle = (count: number) => {
        if (count === 5) {
            return s.counter + ' ' + s.error
        } else {
            return s.counter
        }
    }

    const onNextCounter = () => {
        if (count < 5) {
            setCount(count + 1)
        }
    }

    const onResetCounter = () => {
        setCount(0)
    }

    const incDisabled = count === 5
    const resetDisabled = count < 1

    return (
        <div className="App">
            <div className={s.app}>
                <div className={onStyle(count)}>{count}</div>
                <div className={s.controls}>
                    <button disabled={incDisabled} className={s.button} onClick={onNextCounter}>INC</button>
                    <button disabled={resetDisabled} className={s.button} onClick={onResetCounter}>RESET</button>
                </div>
            </div>
        </div>
    );
}

export default App;
