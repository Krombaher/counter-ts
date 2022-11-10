import React, {ChangeEvent, useEffect, useState} from "react";
import s from "../App.module.css";
import {MainInput} from "./main-input/MainInput";
import {Button} from "@mantine/core";
import {SettingsValueType} from "./redux/CounterReducer";

type SettingsPropsType = {
    max: number
    start: number
    step: number
    error?:string
    setError:(text:string) => void
    addSetSettings: (settings: SettingsValueType) => void
}

export const Settings = (props: SettingsPropsType) => {
    const [settings, setSettings] = useState<SettingsValueType>({
        max: props.max,
        start: props.start,
        step: props.step,
    })

    useEffect(() => {
        if (settings.start >= settings.max
            || settings.step < 1
            || settings.step > (settings.max - settings.start)
            || (settings.max - settings.start) % settings.step !== 0) {
            props.setError('Incorrect value!')
        } else {
            props.setError('')
        }
    }, [settings, props.error, props])

    const onStartInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSettings({...settings, start: Number(e.currentTarget.value)})
    }

    const onMaxInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSettings({...settings, max: Number(e.currentTarget.value)})
    }

    const onStepInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSettings({...settings, step: Number(e.currentTarget.value)})
    }

    const onSaveSettingsHandler = () => {
        props.addSetSettings(settings)
    }

    return (
        <div className={s.settingsBlock}>
            <h3>Settings</h3>
            <div className={s.inputBlock}>
                <div className={s.inputName}>
                    <label>Enter start value:</label>
                    <MainInput
                        error={props.error}
                        value={settings.start}
                        callback={onStartInputHandler}
                    />
                </div>
                <div className={s.inputName}>
                    <label>Enter max value:</label>
                    <MainInput
                        error={props.error}
                        value={settings.max}
                        callback={onMaxInputHandler}
                    />
                </div>
                <div className={s.inputName}>
                    <label>Enter step value:</label>
                    <MainInput
                        error={props.error}
                        value={settings.step}
                        callback={onStepInputHandler}
                    />
                </div>
            </div>
            <Button
                style={{marginTop: '20px', marginBottom: '20px'}}
                radius="lg"
                uppercase
                onClick={onSaveSettingsHandler}
                disabled={props.error !== ''}
            >
                Save
            </Button>
        </div>
    )
}