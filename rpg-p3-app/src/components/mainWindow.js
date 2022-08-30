import React, { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import createAccount from './pages/CreateAccount';

export default function MainWindow() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'Login') {
            return <Login />;
        }
        return <createAccount />;
    };
}