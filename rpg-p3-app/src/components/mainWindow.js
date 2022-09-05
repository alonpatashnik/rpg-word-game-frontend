import React from "react";
import Home from "./pages/Home";
import Title from "./pages/Title";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import LoginHome from "./pages/LoginHome";
import NewHome from "./pages/NewHome";
import Game from "./pages/gameWindow";
import { useState, useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// do i need to also have gamewindow a thing from here???

export default function MainWindow() {
  const [user, setUser] = useState({
    id: 0,
    email: '',
    username: ''
  });

  useEffect(() => {

    const storedToken = localStorage.getItem("token");

    fetch("https://rpg-p3-db.herokuapp.com/api/users/check-token", {
      method: "GET",
      headers: {
        authorization: `Bearer ${storedToken}`,
      },
    }).then((data) => {
      if (!data.ok) {
        localStorage.removeItem("token");
      } else {
        data.json().then((newData) => {
            console.log(newData)
          setUser({
            id: newData.id,
            email: newData.email,
            username: newData.username
          });
        });
      }
    });
  }, []);


  const submitLoginHandler = (email, password) => {
    fetch('https://rpg-p3-db.herokuapp.com/api/users/login', {
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password
            }),
            headers:{
                "Content-Type":"application/json"
            }
        }).then((data) => data.json()).then((res)=> {
            console.log(res)
            if (res) {
                setUser({
                    id: res.user.id,
                    email: res.user.email,
                    username: res.user.username
                })
                localStorage.setItem('token', res.token)
            }

            return res.token
        }).then((data) => {
            if (localStorage.getItem('token') === data) {
                window.location.replace('/Dashboard')
            }
        })
  }

  const submitSignUpHandler = (email, username, password) => {
    console.log(email)
    fetch('https://rpg-p3-db.herokuapp.com/api/users/signup', {
            method: "POST",
            body: JSON.stringify({
                email: email,
                username: username,
                password: password
            }),
            headers:{
                "Content-Type":"application/json"
            }
        }).then((data) => data.json()).then((res)=>{
            console.log(res)
            if (res) {
                setUser({
                    id: res.user.id,
                    email: res.user.email,
                    username: res.user.username
                })
                localStorage.setItem('token', res.token)
                
            }
            return res.token
        }).then((data) => {
            localStorage.getItem('token')
            if (localStorage.getItem('token') === data) {
                window.location.replace('/Dashboard')
            }
        })

        // window.location.replace('/Dashboard')
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser({
        id: 0,
        email: '',
        username: ''
    })
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Title />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Login" element={<Login submitLoginHandler={submitLoginHandler}/>}></Route>
        <Route path="/SignUp" element={<CreateAccount submitSignUpHandler={submitSignUpHandler}/>}></Route>
        <Route path="/newHome" element={<NewHome />}></Route>
        <Route path="/Dashboard" element={<LoginHome user={user} logout={logout}/>}></Route>
        <Route path="/game" element={<Game user={user}/>}></Route>
        {/* <Route path="/FauxGame" element={<FauxGame user={user}/>}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

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

// fetch requests will be what has to match up with back end
// the api end ones
