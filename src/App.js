import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import * as eva from 'eva-icons';
import Main from './pages/Main';
function App() {
    useEffect(() => {
        // add this line
        eva.replace();
    }, []);
  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
