import { useState } from 'react';
import Advanced from './Advanced';
import Original from './Original';
import './App.css';
import './GameStart.css';
import './Buttons.css';

const App = () => {
  const [easyMode, setEasyMode] = useState(true);

  return (
    <div className="App">
      {easyMode ? <Original easyMode={easyMode} setEasyMode={setEasyMode} /> : <Advanced easyMode={easyMode} setEasyMode={setEasyMode} />}
    </div>
  );
}

export default App;
