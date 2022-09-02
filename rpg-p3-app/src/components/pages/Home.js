import './style/home.css'

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
    <section className="text-center vh-100">
        <section className="h-100" id="contentCon">
            <p className="text-wrap text-white fs-1 mb-5" id="title">Game Title</p>
            <Link to="/SignUp">
                <Button type="button" id="newButton" className="btn text-light p-3 w-25 align-self-center mb-5">
                    Create Account
                </Button>
            </Link>

            <Link to="/Login">
                <Button type="button" id="loginButton" className="btn text-light p-3 w-25 align-self-center mb-4">
                    Login
                </Button>
            </Link>

        </section>
    </section> 

    )
}