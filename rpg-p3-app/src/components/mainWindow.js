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
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (!user) {
      window.location.replace("/Login");
    }

    fetch("https://rpg-p3-db.herokuapp.com/api/check-token", {
      method: "GET",
      headers: {
        authorization: `Bearer ${storedToken}`,
      },
    }).then((data) => {
      if (!data.ok) {
        console.log("invalid token!");
        localStorage.removeItem("token");
      } else {
        console.log("valid token");
        data.json().then((newData) => {
          setToken(storedToken);
          setUser({
            id: newData.id,
            email: newData.email,
          });
        });
        window.location.replace('/Dashboard')
      }
    });
  });


  const submitLoginHandler = (email, password) => {
    fetch('https://rpg-p3-db.herokuapp.com/api/users/login', {
            method: "POST",
            body: {
                email: email,
                password: password
            }
        }).then((data) => {
            if (data) {
                setUser({
                    id: data.user.id,
                    email: data.user.email
                })
                setToken(data.token)
                localStorage.setItem('token', data.token)
            }
        })

    window.location.replace('/Dashboard')
    
  }

  const submitSignUpHandler = (email, password, username) => {
    fetch('https://rpg-p3-db.herokuapp.com/api/users/signup', {
            method: "POST",
            body: {
                email: email,
                username: username,
                password: password
            }
        }).then((data) => {
            if (data) {
                setUser({
                    id: data.user.id,
                    email: data.user.email
                })
                setToken(data.token)
                localStorage.setItem('token', data.token)
            }
        })

        window.location.replace('/Dashboard')
  }




  return (
    // <section id='pageCon' style="height: 100vh">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Title />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Login" element={<Login submitLoginHandler={submitLoginHandler}/>}></Route>
        <Route path="/SignUp" element={<CreateAccount submitSignUpHandler={submitSignUpHandler}/>}></Route>
        <Route path="/newHome" element={<NewHome />}></Route>
        <Route path="/Dashboard" element={<LoginHome user={user}/>}></Route>
        <Route path="/game" element={<Game />}></Route>
      </Routes>
    </BrowserRouter>
    // </section>

  );
  // where do i set current page???
  // i don't remember the exact layout that was used here....
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
