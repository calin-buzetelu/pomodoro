import { ChangeEvent } from "react";
import InputField from "./InputField";

const TimerForm = (props: {
    workTimeSubmitHandler: (event: ChangeEvent<HTMLInputElement>) => void,
    breakTimeChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void,
    startTimerHandler: () => void
}) => {
    return <>
        <h1>Pomodoro Time Tracker</h1>
        <InputField placeholder='Work (in minutes)' onChange={props.workTimeSubmitHandler} />
        <br></br>
        <InputField placeholder='Rest (in minutes)' onChange={props.breakTimeChangeHandler} />
        <br></br>
        <button className="btn" onClick={props.startTimerHandler}>Start</button>
    </>;
}

export default TimerForm