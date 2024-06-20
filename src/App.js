import React from 'react';
import Tooltip from './Tooltip';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tooltip position="top" message="This is a tooltip on top">
          <button>Hover me (Top)</button>
        </Tooltip>
        <Tooltip position="bottom" message="This is a tooltip at the bottom">
          <button>Hover me (Bottom)</button>
        </Tooltip>
        <Tooltip position="left" message="This is a tooltip on the left">
          <button>Hover me (Left)</button>
        </Tooltip>
        <Tooltip position="right" message="This is a tooltip on the right">
          <button>Hover me (Right)</button>
        </Tooltip>
      </header>
    </div>
  );
}

export default App;

