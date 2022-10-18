import React from 'react';
import { Navbar } from './pages/Navbar';

const App = () => {
  return (
    <div className="root">
      <Navbar />
      <div className='fancy'>
        <h1 style={{padding: "20px", textAlign: "center"}}>React Project</h1>
      </div>
    </div>
  )
};

export default App;