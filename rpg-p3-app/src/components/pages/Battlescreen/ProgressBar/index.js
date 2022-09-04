import ProgressBar from 'react-bootstrap/ProgressBar';
import './Progess.css';

export function AnimatedHP(){
    return (
        <section id = "hpBar">
            <ProgressBar stripped variant = "danger" now = {100} ></ProgressBar>
            <ProgressBar animated now = {100} ></ProgressBar>
        </section>
    )}

export default AnimatedHP;