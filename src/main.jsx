import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from "react-router-dom";

// Handle redirected paths from 404.html for GitHub Pages SPA routing
if (typeof window !== 'undefined' && window.location.search.startsWith('?/')) {
  const path = window.location.search.slice(2);
  window.history.replaceState(null, '', path);
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/Portfolio">
    <App />
  </BrowserRouter>
);
