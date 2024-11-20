import './App.css';
import { useEffect} from 'react';
import { useState } from 'react';

function App() {
  const[seconds, setSeconds] = useState(0);
  const[minutes, setMinutes] = useState(0);
  const[hours, setHours] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if(seconds < 60){
        setSeconds(seconds + 1);
        }else{
          setSeconds(0);
          if(minutes < 60){
            setMinutes(minutes + 1);
          } else{
            setMinutes(0);
            setHours(hours + 1);
          }
        }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div className="App">
      <h1 id="timerH1">{hours}:{minutes < 10 ? "0" : ""}{minutes}:{seconds < 10 ? "0" : ""}{seconds}</h1>
    </div>
  );
}

export default App;
