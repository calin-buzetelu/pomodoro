import './App.css'
import InputField from './components/InputField/InputField'

function App() {

  return (
    <>
      <div className='timerContainer'>
        <InputField placeholder='Work (in minutes)' />
        <br></br>
        <InputField placeholder='Rest (in minutes)' />
        <br></br>
        <button className="btn">Start</button>
      </div>
    </>
  )
}

export default App
