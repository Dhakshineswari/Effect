import React from 'react';
import VantaBackground from './VantaBackground';

function App() {
  return (
    <div>
      <VantaBackground />
      <div style={{ position: 'relative', zIndex: 1, color: 'white', padding: '20px' }}>
        <h1>Welcome to My App</h1>
        <p>This is a React app with a Vanta.js animated background.</p>
      </div>
    </div>
  );
}

export default App;
