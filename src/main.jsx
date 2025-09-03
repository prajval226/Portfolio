import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from "react-router-dom";

// Handle redirected paths from 404.html for GitHub Pages SPA routing
if (typeof window !== 'undefined' && window.location.search.startsWith('?/')) {
  const query = window.location.search.slice(2);
  const [path, ...searchParts] = query.split('&');
  const search = searchParts.length > 0 ? '?' + searchParts.join('&').replace(/~and~/g, '&') : '';
  window.history.replaceState(null, '', path + search);
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/Portfolio">
    <App />
  </BrowserRouter>
);
