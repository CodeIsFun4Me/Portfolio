import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App';

// ✅ React 18+ render method
const root = createRoot(document.getElementById('root'));
root.render(<App />);

// ✅ Optionally call reportWebVitals
// reportWebVitals();