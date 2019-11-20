import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import TimelineEvent from './components/TimelineEvent';
import Timeline from './components/Timeline';

function App() {
  console.log(timelineData.events[0]);

  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Application title</h1>
      </header>
      <main className="App-main">
        <TimelineEvent post={timelineData.events[0]} />
      </main>
    </div>
  );
}

export default App;
