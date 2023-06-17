import { CircularProgressbar } from "react-circular-progressbar";
import { ControllerProp } from "./ControllerProp";

import { buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const formatSeconds = (seconds: number): string => {
    const date = new Date(seconds * 1000);
    return date.toISOString().slice(14, 19);
}

export function TimerController(props: ControllerProp) {
    const progressbarStyle = {
        pathTransitionDuration: 0.5,
        pathColor: `rgb(240, 127, 127, ${(props.mode === 'work' ? props.workTime : props.breakTime) / props.initialTotalTime})`,
        textColor: '#f88',
        trailColor: '#dfd9d9'
    }

    return (<>
        <h2>{props.mode === 'work' ? 'Remaining work time:' : 'Reamining break time:'}</h2>
        <div style={{ width: 200, height: 200 }}>
            <CircularProgressbar
                value={(props.mode === 'work' ? props.workTime : props.breakTime) / props.initialTotalTime * 100}
                text={props.mode === 'work' ? `${formatSeconds(props.workTime)}` : `${formatSeconds(props.breakTime)}`}
                styles={buildStyles(progressbarStyle)}></CircularProgressbar>
        </div>
        <br></br>
        <button className="btn" onClick={props.resetHandler}>Cancel</button>
    </>);
}