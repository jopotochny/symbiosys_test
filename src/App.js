import React from 'react';
import logo from './logo.svg';
import './App.css';
import EventCard from './components/EventCard';
function App() {
  return (
    <div className="App">
      <EventCard date={"example date"} title={"Get Best Site Advertiser In Your Side Pocket"} location={"Deonmouth"}/>
    </div>
  );
}

export default App;
