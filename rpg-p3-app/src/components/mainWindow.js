import React, { useState } from 'react';
import Home from './pages/Home';
import Title from './pages/Title';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import LoginHome from './pages/LoginHome';
import NewAccountHome from './pages/NewAccountHome';

export default function MainWindow() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        // make this title, and make a home page that, after clicking "embark on adventure" it brings them to the option to login or sign up, from login -> option to continue or make new game (if new game, work on skipping intro at some point for users who have already played). user is then given the option to start
        if (currentPage === 'Title') {
            return <Title />;
        }
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'Login') {
            return <Login />;
        }
        if (currentPage === 'CreateAccount') {
            return <CreateAccount />;
        }
        if (currentPage === 'LoginHome') {
            return <LoginHome />;
        }
        return <NewAccountHome />;

    };

    // const handlePageChange = (page) => setCurrentPage(page);
        // I think this is where we assign grab the buttons from the various pages that lead to the other pages. can there be multiple??
    // return (

    // )
}