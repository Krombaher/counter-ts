import React, {ChangeEvent, useState} from "react";
import s from "../App.module.css";
import {MainInput} from "./main-input/MainInput";
import {MainButton} from "./main-button/MainButton";
import {ValueType} from "../App";

type PropsTypeSettings = {
    defaultValue: ValueType
    settings: ValueType
    addSettings: (defaultValue: ValueType) => void
    setError: (text: string) => void
    error?: string
}

export const Settings = (props: PropsTypeSettings) => {
    const [defaultValue, setDefaultValue] = useState(props.defaultValue)

    const onStartInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setDefaultValue({...defaultValue, start: Number(e.currentTarget.value)})
    }

    const onMaxInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setDefaultValue({...defaultValue, max: Number(e.currentTarget.value)})
    }

    const onStepInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setDefaultValue({...defaultValue, step: Number(e.currentTarget.value)})
    }

    const onSaveSettingsHandler = () => {
        if (defaultValue.start >= defaultValue.max || defaultValue.step < 1 ||
            defaultValue.step > (defaultValue.max - defaultValue.start)) {
            props.setError('Incorrect value!')
        } else {
            props.addSettings(defaultValue)
            props.setError('')
        }
    }

    return (
        <div className={s.settingsBlock}>
            <h3>Settings</h3>
            <div className={s.inputBlock}>
                <div className={s.inputName}>
                    <label>Enter start value:</label>
                    <MainInput
                        error={props.error}
                        value={defaultValue.start}
                        callback={onStartInputHandler}
                    />
                </div>
                <div className={s.inputName}>
                    <label>Enter max value:</label>
                    <MainInput
                        error={props.error}
                        value={defaultValue.max}
                        callback={onMaxInputHandler}
                    />
                </div>
                <div className={s.inputName}>
                    <label>Enter step value:</label>
                    <MainInput
                        error={props.error}
                        value={defaultValue.step}
                        callback={onStepInputHandler}
                    />
                </div>
            </div>
            <MainButton
                name={'SAVE'}
                callback={onSaveSettingsHandler}
            />
        </div>
    )
}