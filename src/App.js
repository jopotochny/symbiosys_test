import React, {useEffect} from 'react';
import './App.css';
import * as eva from 'eva-icons';

import Main from './pages/Main';
function App() {
    useEffect(() => {
        eva.replace();
    }, []);
  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
