import TimerForm from './components/Form/TimerForm';
import TimerController from './components/Controller/TimerController';
import { ChangeEvent, useState, useEffect } from 'react'
import './App.css'

function App() {

  const [initialTotalTime, setInitialTotalTime] = useState(0);
  const [workTime, setWorkTime] = useState(0);
  const [breakTime, setBreakTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState('work');

  const resetHandler = () => {
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
        return resetHandler();
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

  const workTimeChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setWorkTime(Number(event.target.value) * 60);
    setInitialTotalTime(Number(event.target.value) * 60)
  }

  const breakTimeChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setBreakTime(Number(event.target.value) * 60);
  }

  return (
    <>
      <div className='timerContainer'>
        {!isActive && <TimerForm
          workTimeSubmitHandler={workTimeChangeHandler}
          breakTimeChangeHandler={breakTimeChangeHandler}
          startTimerHandler={startTimerHandler} />
        }
        {isActive && <TimerController
          mode={mode}
          workTime={workTime}
          breakTime={breakTime}
          initialTotalTime={initialTotalTime}
          resetHandler={resetHandler} />
        }
      </div >
    </>
  )
}

export default App;
