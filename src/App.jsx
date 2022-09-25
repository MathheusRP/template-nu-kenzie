
import { useState } from 'react';
import './App.css';
import { Start } from './components/Start';
import { HomePage } from './components/Home';

function App() {

  const [home, setHome] = useState(false)

  return (
    <div className="App">
      {home ? (
        <HomePage setHome={setHome}/>
      ) : (
        <Start botao setHome={setHome} />
      )
      }
    </div>
  );
}

export default App;
