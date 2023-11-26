import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom/client';
import React from 'react';

import './index.css';
import { App } from './App';
import { theme } from './assets/style/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);
