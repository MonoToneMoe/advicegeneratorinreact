import React, { useEffect, useState } from 'react';
import logo from '../images/favicon-32x32.png';
import icon_dice from './images/icon-dice.svg'
import './App.css';
import AdviceComponent from './Components/AdviceComponent';
import getData from './DataServices/DataService';
import Advice from './Interfaces/Interfaces';

function App() {

  const [advice, setAdvice] = useState<Advice>()

  useEffect(() => {
    const adviceData = async () => {
      const fetchData = await getData();
      setAdvice(fetchData);
  }
    adviceData();
  }, [])

  const randomAdvice = async () => {
    const fetchData = await getData();
    setAdvice(fetchData);
  }
  return (
    <div className="App">
      {
        advice && <AdviceComponent id={advice.slip.id} advice={advice.slip.advice} />
      }
      <button onClick={randomAdvice}><img src={icon_dice} alt="" /></button>
    </div>
  );
}

export default App;
