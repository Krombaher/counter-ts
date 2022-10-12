import React from "react";
import s from './/MainButton.module.css'

type MainButtonPropsType = {
    name: string
    callback: () => void
    disabled?:boolean
    className?:string | undefined
}

export const MainButton: React.FC<MainButtonPropsType> = ({callback, name, className,disabled}) => {

    const onClickHandler = () => {
        callback()
    }

    const buttonStyle = s.button + ' ' + (disabled ? s.disabled : '') + (className ? ' ' + className : '')

    return (
        <button disabled={disabled} className={buttonStyle} onClick={onClickHandler}>{name}</button>
    )
}