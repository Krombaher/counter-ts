import React from "react";
import s from '../button/MainButton.module.css'

type MainButtonPropsType = {
    name: string
    callback: () => void
    classname?: string
    disabled?:boolean
}

export const MainButton: React.FC<MainButtonPropsType> = ({callback, name, classname = '',disabled}) => {

    const onClickHandler = () => {
        callback()
    }

    const buttonStyle = s.button + ' ' + (disabled ? s.disabled : '')

    return (
        <button disabled={disabled} className={buttonStyle} onClick={onClickHandler}>{name}</button>
    )
}