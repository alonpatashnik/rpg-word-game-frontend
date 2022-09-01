import React, { useState } from 'react';
import Home from './pages/Home';
import Title from './pages/Title';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import LoginHome from './pages/LoginHome';
import NewHome from './pages/NewHome';
import Game from './pages/gameWindow';

import {
    Route,
    Routes,
    useHref,
    useLinkClickHandler,
} from "react-router-dom";

// do i need to also have gamewindow a thing from here???

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
        if (currentPage === 'NewHome') {
            return <NewHome />;
        }
        if (currentPage === 'Game') {
            return <Game />;
        }
        return <NewHome />;

    };
    // where do i set current page???
    // i don't remember the exact layout that was used here....
    <Routes>
        <Route path="/" element={<Title/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/SignUp' element={<CreateAccount/>}></Route>
        <Route path='/newHome' element={<NewHome/>}></Route>
        <Route path='/Dashboard' element={<LoginHome/>}></Route>
        <Route path='/game' element={<Game/>}></Route>
    </Routes>


    // page change options:
        // from title, to Home, via button
        // from Home to: Login (button), create Account (btn)
        // from Login to: create Account (btn), loginHome (submit login)
        // From create Account to: Login (btn), newHome (submit sign up)
        // from loginHome to new game or continue (take them to the game window one, so import that?)
        // from newhome to new game (game window one, import?)


    // const handlePageChange = (page) => setCurrentPage(page);
        // I think this is where we assign grab the buttons from the various pages that lead to the other pages. can there be multiple??
    // return (

    // )
}

// fetch requests will be what has to match up with back end
// the api end ones