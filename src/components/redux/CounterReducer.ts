type ActionType = NextCountAT | ResetCountAT | AddSettingsAT

type NextCountAT = ReturnType<typeof NextCountAC>
type ResetCountAT = ReturnType<typeof ResetCountAC>
type AddSettingsAT = ReturnType<typeof AddSettingsAC>

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

let initialState = {
    max: 5,
    start: 0,
    step: 1,
    count: 0
}

export const counterReducer = (state: StateValueType = initialState, action: ActionType): StateValueType => {
    switch (action.type) {
        case 'NEXT_COUNTER':
            if (state.count < state.max && state.count >= state.start) {
                return {...state, count: state.count + state.step}
            } else {
                return state
            }

        case 'RESET_COUNT':
            return {...state, count: state.start}

        case 'ADD_SETTINGS':
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

export const NextCountAC = () => {
    return {type: 'NEXT_COUNTER'} as const
}

export const ResetCountAC = () => {
    return {type: 'RESET_COUNT'} as const
}

export const AddSettingsAC = (settings: SettingsValueType) => {
    return {type: 'ADD_SETTINGS', settings} as const
}