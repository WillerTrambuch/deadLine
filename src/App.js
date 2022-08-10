import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Login from './pages/Login';
import Home from './pages/Home';
import theme from './theme/index';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="*" element={<h1> NOT FOUND 404 </h1>} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
