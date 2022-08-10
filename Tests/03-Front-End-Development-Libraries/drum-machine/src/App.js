import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Keyboard from './components/Keyboard';

function App() {
  const [currentKey, setCurrentKey] = useState("Click A Button or Press A Key");

  function play(key, id) {
    const audio = document.getElementById(key)
    audio.currentTime = 0;
    audio.play();
    setCurrentKey(id);
  }
  
  return (
    <div id='App' className="text-center">
      <h1 id="title" className="text-primary">
        Drum Machine
      </h1>
      <div id="drum-machine">
        <div id="display">{currentKey}</div>
        <Keyboard play={play}/>
      </div>
    </div>
  );
}

export default App;
