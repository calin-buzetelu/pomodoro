import { ChangeEvent, useState, useEffect } from 'react'
import './App.css'
import InputField from './components/InputField/InputField'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function App() {

  const [initialTotalTime, setInitialTotalTime] = useState(0);
  const [workTime, setWorkTime] = useState(0);
  const [breakTime, setBreakTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState('work');

  const progressbarStyle = {
    pathTransitionDuration: 0.5,
    pathColor: `rgb(240, 127, 127, ${(mode === 'work' ? workTime : breakTime) / initialTotalTime})`,
    textColor: '#f88',
    trailColor: '#dfd9d9'
  }

  const reset = () => {
    setIsActive(false);
  }

  const startTimerHandler = () => {
    setIsActive(true);
  }

  useEffect(() => {
    const updateTime = (workMode: string) => {
      if (workMode === 'work') {
        setWorkTime(workTime => workTime - 1);
        console.log(workTime);
        if (workTime === 0) {
          setMode('break');
          setInitialTotalTime(breakTime);
        }
        return;
      }
      console.log(breakTime);
      setBreakTime(breakTime => breakTime - 1);
      if (breakTime === 0) {
        return reset();
      }
    }
    let interval: number | undefined = undefined;
    if (isActive) {
      interval = setInterval(() => {
        updateTime(mode)
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, workTime, breakTime, mode]);

  const workTimeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setWorkTime(Number(event.target.value) * 60);
    setInitialTotalTime(Number(event.target.value) * 60)
  }

  const breakTimeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setBreakTime(Number(event.target.value) * 60);
  }

  return (
    <>
      <div className='timerContainer'>
        {!isActive &&
          <>
            <InputField placeholder='Work (in minutes)' onChange={workTimeChangeHandler} />
            <br></br>
            <InputField placeholder='Rest (in minutes)' onChange={breakTimeChangeHandler} />
            <br></br>
            <button className="btn" onClick={startTimerHandler}>Start</button>
          </>
        }
        {isActive &&
          <>
            <div style={{ width: 200, height: 200 }}>
              <CircularProgressbar
                value={((mode === 'work' ? workTime : breakTime) / initialTotalTime) * 100}
                text={mode === 'work' ? `${workTime}` : `${breakTime}`}
                styles={buildStyles(progressbarStyle)}></CircularProgressbar>
            </div>
            <br></br>
            <button className="btn" onClick={reset}>Cancel</button>
          </>
        }
      </div >
    </>
  )
}

export default App
