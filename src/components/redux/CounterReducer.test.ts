import {AddSettingsAC, counterReducer, NextCountAC, ResetCountAC, StateValueType} from "./CounterReducer";

test('next count', () => {

    const startState: StateValueType = {
        max: 5,
        start: 0,
        step: 1,
        count: 0
    }

    const endState = counterReducer(startState, NextCountAC())

    expect(endState).not.toBe(startState)
    expect(endState.count).toBe(1)
})

test('reset count', () => {

    const startState: StateValueType = {
        max: 5,
        start: 0,
        step: 1,
        count: 0
    }

    const endState = counterReducer(startState, ResetCountAC())

    expect(endState).not.toBe(startState)
    expect(endState.start).toBe(0)
})

test('add settings', () => {

    const startState: StateValueType = {
        max: 5,
        start: 0,
        step: 1,
        count: 0
    }

    const settings = {
        max: 10,
        start: 2,
        step: 2,
    }

    const endState = counterReducer(startState, AddSettingsAC(settings))

    expect(endState).not.toBe(startState)
    expect(endState.start).toBe(2)
    expect(endState.max).toBe(10)
    expect(endState.step).toBe(2)
})

