import React, {useEffect, useState} from 'react';
import './App.module.css';
import s from './App.module.css'
import {Counter} from "./components/counter/Counter";
import {MainButton} from "./components/main-button/MainButton";
import {Settings} from "./components/Settings";

export type ValueType = {
    max: number
    start: number
    step: number
}

function App() {
    const defaultValue: ValueType = {
        max: 5,
        start: 0,
        step: 1
    }

    const [count, setCount] = useState<number>(defaultValue.start)
    const [settings, setSettings] = useState<ValueType>(defaultValue)
    const [error, setError] = useState('')

    useEffect( () => {
        let valueAsString =  localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setCount(newValue)
        }
    }, [])

    useEffect( () => {
        localStorage.setItem('counterValue', JSON.stringify(count))
    }, [count])

    const onNextCounter = () => {
        if (count < settings.max && count >= settings.start) {
            setCount(count + settings.step)
        }
    }
    const onResetCounter = () => {
        setCount(settings.start)
    }
    const addSettings = (defaultValue: ValueType) => {
        setSettings(defaultValue)
        setCount(defaultValue.start)
    }

    return (
        <div className="App">
            <div className={s.app}>
                <Settings
                    defaultValue={defaultValue}
                    error={error}
                    setError={setError}
                    settings={settings}
                    addSettings={addSettings}
                />
                <div className={s.counterBlock}>
                    <Counter
                        error={error}
                        count={count}
                        maxValue={settings.max}/>
                    <div className={s.controls}>
                        <MainButton
                            disabled={count === settings.max}
                            name={'INC'}
                            callback={onNextCounter}/>
                        <MainButton
                            className={s.btn}
                            disabled={count <= settings.start}
                            name={'RESET'}
                            callback={onResetCounter}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
