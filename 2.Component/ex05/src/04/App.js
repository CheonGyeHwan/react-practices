import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';


export default function App() {
    const getCurrentClockTime = () => {
        const date = new Date();
        const hours = date.getHours();
        return {
            hours: ('0' + (hours == 0 ? 12 : (hours > 12 ? hours - 12 : hours))).slice(-2),
            minutes: ('0' + date.getMinutes()).slice(-2),
            seconds: ('0' + date.getSeconds()).slice(-2),
            session: hours > 12 ? 'pm' : 'am'
        };
    }

    const [currentClockTime, setCurrentClockTime] = useState(getCurrentClockTime());
    const [ticks, setTicks] = useState(0);

    // useEffect(() => {
    //     setInterval(() => {
    //         setCurrentClockTime(getCurrentClockTime());
    //         setTicks(ticks+1);
    //     });
    // }, []);

    useEffect(() => {
        setTimeout(() => {
            setCurrentClockTime(getCurrentClockTime());
            setTicks(ticks+1);
        }, 1000);
    }, [currentClockTime]);

    return (
            <div>
                <span>{ticks}</span>
                <Clock
                    message={'ex05: useEffect Hook example'}
                    hours={currentClockTime.hours}
                    minutes={currentClockTime.minutes}
                    seconds={currentClockTime.seconds}/>
            </div>    
    );
}