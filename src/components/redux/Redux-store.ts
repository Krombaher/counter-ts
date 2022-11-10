import {combineReducers, createStore} from "redux";
import {counterReducer} from "./CounterReducer";
import {loadState, saveState} from "./localStorage";

export let rootReducer = combineReducers( {
    counter:counterReducer
})

const persistedState = loadState();
export let store = createStore(rootReducer, persistedState)

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    });
});

export type AppStateType = ReturnType<typeof rootReducer>
