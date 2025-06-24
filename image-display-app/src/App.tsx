import React from 'react';
import imageProvider from './services/ImageProvider';
import './App.css';

const App: React.FC = () => {
  const logoProps = imageProvider.getLogoWithProps({
    alt: 'React Logo',
    className: 'App-logo'
  });

  return (
    <div className="App">
      <header className="App-header">
        <img {...logoProps} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App; 