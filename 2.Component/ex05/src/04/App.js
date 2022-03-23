import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const [state, setState] = useState({
        hours : new Date().getHours(),
        minutes : new Date().getMinutes(),
        seconds : new Date().getSeconds()
    });
    
    const getCurrentClockTime = () => {
        setState({
            hours : new Date().getHours(),
            minutes : new Date().getMinutes(),
            seconds : new Date().getSeconds() 
        })
    };

    useEffect(() => {
        const timeout = setTimeout(function clock() {
            getCurrentClockTime();
            setTimeout(clock, 1000);
        }, 1000);

        return (() => {clearTimeout(timeout)});
    }, []);

    return (
            <Clock
                message={'ex05: useEffect Hook example'}
                hours={state.hours}
                minutes={state.minutes}
                seconds={state.seconds}/>
    );
    
}