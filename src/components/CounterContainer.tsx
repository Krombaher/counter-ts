import {connect} from "react-redux";
import {AppStateType} from "./redux/Redux-store";
import {Dispatch} from "redux";
import {AddSettingsAC, NextCountAC, ResetCountAC, SettingsValueType} from "./redux/CounterReducer";
import {Counter} from "./Counter";

let mapStateToProps = (state: AppStateType) => {
    return {
        counter: state.counter
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        nextCount: () => dispatch(NextCountAC()),
        resetCount: () => dispatch(ResetCountAC()),
        setSettings: (settings: SettingsValueType) => dispatch(AddSettingsAC(settings))
    }
}

export const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter)