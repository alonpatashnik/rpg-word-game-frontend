import './style/newHome.css'

import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function NewHome() {
    return (
        <section id="pageCon">
            <section className="h-100" id="contentCon">
                <p className="text-wrap text-white fs-1 mb-5" id="welcome">Welcome, @username</p>
                <p className="text-wrap text-white fs-3 mb-5" id="journey">Are you ready to set out on your journey?</p>
                <Link to='/game'>
                    <Button type="button" id="newBtn" className="btn text-light p-3 w-25 align-self-center mb-5">
                        Start Adventure
                    </Button>
                </Link>
            </section>
        </section>
    )
}

