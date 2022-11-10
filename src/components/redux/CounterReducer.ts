type ActionType = NextCountAT | ResetCountAT | AddSettingsAT

type NextCountAT = {
    type: 'NEXT_COUNTER'
}

type ResetCountAT = {
    type: 'RESET_COUNT'
}

type AddSettingsAT = {
    type: 'ADD_SETTINGS'
    settings: SettingsValueType
}

export type StateValueType = {
    max: number
    start: number
    step: number
    count: number
}

export type SettingsValueType = {
    max: number
    start: number
    step: number
}

const NEXT_COUNTER = 'NEXT_COUNTER'
const RESET_COUNT = 'RESET_COUNT'
const ADD_SETTINGS = 'ADD_SETTINGS'

let initialState = {
    max: 5,
    start: 0,
    step: 1,
    count: 0
}

export const counterReducer = (state: StateValueType = initialState, action: ActionType): StateValueType => {
    switch (action.type) {
        case NEXT_COUNTER:
            if (state.count < state.max && state.count >= state.start) {
                return {...state, count: state.count + state.step}
            } else {
                return state
            }

        case RESET_COUNT:
            return {...state, count: state.start}

        case ADD_SETTINGS:
            return {
                ...state,
                start: action.settings.start,
                max: action.settings.max,
                step: action.settings.step,
                count:action.settings.start
            }

        default:
            return state
    }
}

export const NextCountAC = (): NextCountAT => {
    return {type: NEXT_COUNTER}
}

export const ResetCountAC = (): ResetCountAT => {
    return {type: RESET_COUNT}
}

export const AddSettingsAC = (settings: SettingsValueType): AddSettingsAT => {
    return {type: ADD_SETTINGS, settings}
}