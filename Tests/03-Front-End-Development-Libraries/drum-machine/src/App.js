import { useState } from 'react';
import './App.css';
import Keyboard from './components/Keyboard';

function App() {
  const [currentKey, setCurrentKey] = useState("");

  function play(key, id) {
    const audio = document.getElementById(key)
    audio.currentTime = 0;
    audio.play();
    setCurrentKey(id);
  }
  
  return (
    <div id="drum-machine">
      <div id="display">{currentKey}</div>
      <Keyboard play={play}/>
    </div>
  );
}

export default App;
