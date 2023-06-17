import InputField from "./InputField/InputField";

const TimerForm = (props: {
    workTimeSubmitHandler: any,
    breakTimeChangeHandler: any,
    startTimerHandler: any
}) => {
    return <>
        <InputField placeholder='Work (in minutes)' onChange={props.workTimeSubmitHandler} />
        <br></br>
        <InputField placeholder='Rest (in minutes)' onChange={props.breakTimeChangeHandler} />
        <br></br>
        <button className="btn" onClick={props.startTimerHandler}>Start</button>
    </>;
}

export default TimerForm