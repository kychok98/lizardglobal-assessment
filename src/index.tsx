import React from 'react';
import ReactDOM from 'react-dom/client';
/**
 * This file can be ignored, please work in ./components/App.tsx
 */

// Include mock API.
import './mock';

// Include styles.
import './styles/index.css';

// Include application component.
import App from './components/App';

const rootElement = document.getElementById('root') as Element;
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
