import {ProgressBar} from 'react-bootstrap';
import './Progess.css';

export function AnimatedHP(){
    return (
        <section id="hpBar">
            <ProgressBar striped variant="danger" now={100} />
            <ProgressBar animated now={100} />
        </section>
    )}

export default AnimatedHP;