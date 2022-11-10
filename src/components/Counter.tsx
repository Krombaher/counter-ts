import s from "../App.module.css";
import {Settings} from "./Settings";
import {Button} from "@mantine/core";
import React, {useState} from "react";
import {CounterDisplay} from "./counter/CounterDisplay";
import {SettingsValueType} from "./redux/CounterReducer";

export type CounterPropsType = {
    max: number
    start: number
    step: number
    count: number
    nextCount: () => void
    resetCount: () => void
    setSettings: (settings: SettingsValueType) => void
}

export const Counter = (props: CounterPropsType) => {
    const [error, setError] = useState('')

    return (
        <>
            <Settings
                max={props.max}
                start={props.start}
                step={props.step}
                error={error}
                setError={setError}
                addSetSettings={props.setSettings}
            />
            <div className={s.counterBlock}>
                <CounterDisplay
                    error={error}
                    count={props.count}
                    max={props.max}/>
                <div className={s.controls}>
                    <Button
                        radius="lg"
                        uppercase
                        onClick={props.nextCount}
                        disabled={props.count === props.max}
                    >
                        INC
                    </Button>
                    <Button
                        style={{marginLeft: '10px'}}
                        radius="lg"
                        uppercase
                        onClick={props.resetCount}
                        disabled={props.count <= props.start}
                    >
                        RESET
                    </Button>
                </div>
            </div>
        </>
    )
}