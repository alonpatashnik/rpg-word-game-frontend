import './style/LoginHome.css'

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function LoginHome({user, logout}) {
    if (!localStorage.getItem('token')) {
        window.location.replace('/Login')
    }
    const pointsAndUser = () => {
        console.log(user.points)
        if (user.points === null) {
            return (`You havent played a game yet, click below to start!`)
        } else {
            return (`In your last game, you scored ${user.points} points`)
        }
    }
    // fetch request here, authorization option with token on localstore
    return (
    <section id='pageCon'>
        <section className="h-100" id="contentCon">
        {/* <p id="title">{pointsAndUser()}.</p> */}
            <p id="title">Welcome, {user.username}.</p>
            <p id="points">{pointsAndUser()}</p>
            {/* <p id="points">In your last game, you scored {user.points} points</p> */}
            <Link to='/game'> 
            
            {/* <Link to='/FauxGame'> */}
                <Button type="button" id="newBtn" className="btn">
                    New Adventure
                </Button>
            </Link>
            {/* <Link to='/game'>
                <Button type="button" id="continueBtn" className="btn">
                    Continue
                </Button>
            </Link> */}
            {/* <Link to='/Login'> */}
                <Button type="button" id="logoutBtn" className="btn" onClick={logout}>
                    Logout
                </Button>
            {/* </Link> */}
        </section>
    </section> 
    )
}

// TODO: have continue pick up from checkpoint

// import react useEffect -> run on page load

// if token send to stuff already above
// if no token, send to title

// catch for people making an account and then immediately leaving
// if character_id = true, allow
// if character_id = false, send to New Home

