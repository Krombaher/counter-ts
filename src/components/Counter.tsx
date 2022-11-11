import s from "../App.module.css";
import {SettingsContainer} from "./Settings";
import {Button} from "@mantine/core";
import React, {useState} from "react";
import {CounterDisplay} from "./counter/CounterDisplay";
import {SettingsValueType, StateValueType} from "./redux/CounterReducer";

export type CounterPropsType = {
    counter: StateValueType
    nextCount: () => void
    resetCount: () => void
    setSettings: (settings: SettingsValueType) => void
}

export const Counter = (props: CounterPropsType) => {
    const [error, setError] = useState('')

    return (
        <>
            <SettingsContainer
                max={props.counter.max}
                start={props.counter.start}
                step={props.counter.step}
                error={error}
                setError={setError}
                addSetSettings={props.setSettings}
            />
            <div className={s.counterBlock}>
                <CounterDisplay
                    error={error}
                    count={props.counter.count}
                    max={props.counter.max}
                />
                <div className={s.controls}>
                    <Button
                        radius="lg"
                        uppercase
                        onClick={props.nextCount}
                        disabled={props.counter.count === props.counter.max}
                    >
                        INC
                    </Button>
                    <Button
                        style={{marginLeft: '10px'}}
                        radius="lg"
                        uppercase
                        onClick={props.resetCount}
                        disabled={props.counter.count <= props.counter.start}
                    >
                        RESET
                    </Button>
                </div>
            </div>
        </>
    )
}