import './style/title.css'

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

// stuff I'm passing also does not feel right..
function Title() {
    return (
    <section id="pageCon">
        <section id="contentCon">
            <p className="text-wrap text-white fs-1" id="title">Game Title</p>
            <Link to='/Home'>
                <Button type="button" id="startButton" className="btn bg-secondary text-light p-3 w-25 align-self-center">
                    embark on adventure
                </Button>
            </Link>
        </section>
    </section>
    )
}

export default Title;