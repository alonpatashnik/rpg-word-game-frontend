import React, { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';

export default function MainWindow() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        // make this title, and make a home page that, after clicking "embark on adventure" it brings them to the option to login or sign up, from login -> option to continue or make new game (if new game, work on skipping intro at some point for users who have already played). user is then given the option to start
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'Login') {
            return <Login />;
        }
        return <CreateAccount />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (

    )
}