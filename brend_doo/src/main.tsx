// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css'; // Your global CSS file
import { MagnifierProvider } from './hooks/useShowMagnify';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <MagnifierProvider>
                <App />
            </MagnifierProvider>
        </BrowserRouter>
    </React.StrictMode>
);
