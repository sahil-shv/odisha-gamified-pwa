import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';

// Register service worker for PWA offline support
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('Service Worker registered: ', registration);
    }).catch(registrationError => {
      console.log('Service Worker registration failed: ', registrationError);
    });
  });
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
