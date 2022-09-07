import './style/home.css'

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Home() {
    return (
    <section id="pageCon">
        <section className="h-100" id="contentCon">
            <p id="title">Game Title</p>
            <Link to="/SignUp">
                <Button type="button" id="newButton" className="btn">
                    Create Account
                </Button>
            </Link>

            <Link to="/Login">
                <Button type="button" id="loginButton" className="btn">
                    Login
                </Button>
            </Link>

        </section>
    </section> 

    )
}

export default Home;