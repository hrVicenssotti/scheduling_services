import { Route, Routes } from 'react-router-dom';
import React from 'react';

import { NavBar } from './components';

export const App: React.FC = () => {
    return (
        <Routes>
            <Route index element={<NavBar />} />
        </Routes>
    );
};
