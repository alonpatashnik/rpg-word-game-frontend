import './style/title.css'

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

// stuff I'm passing also does not feel right..
function Title() {
    return (
    <section id="pageCon">
        <section id="contentCon">
            <p id="title">The Hollow Reach</p>
            <Link to='/Home'>
                <Button type="button" id="startButton" className="btn">
                    embark on adventure
                </Button>
            </Link>
        </section>
    </section>
    )
}

export default Title;