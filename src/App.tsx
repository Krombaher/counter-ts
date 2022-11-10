import React from 'react';
import './App.module.css';
import s from './App.module.css'
import {CounterContainer} from "./components/CounterContainer";

function App() {
    return (
        <div className={s.app}>
            <CounterContainer/>
        </div>
    )
}

export default App;
