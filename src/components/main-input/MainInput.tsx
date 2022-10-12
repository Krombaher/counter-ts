import React, {ChangeEvent} from "react";
import s from './MainInput.module.css'

type MainInputPropsType = {
    value:number | string
    callback:(e:ChangeEvent<HTMLInputElement>) => void | undefined
    error?:string
    classname?:string | undefined
}

export const MainInput = (props:MainInputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callback(e)
    }

    const inputClass = (props.error) ? s.inputError : s.input

    return (
        <input type={'number'} value={props.value} className={inputClass} onChange={onChangeHandler}/>
    )
}