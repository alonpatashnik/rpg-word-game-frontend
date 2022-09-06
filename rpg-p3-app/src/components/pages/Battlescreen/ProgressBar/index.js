import {ProgressBar} from 'react-bootstrap';
// import './Progess.css';

export function AnimatedHP(){
    return (
        <section id="hpBar">
            <ProgressBar id="enemyHealth" striped animated variant="danger" now={60} max={60} />
            {/* <ProgressBar animated now={100} /> */}
        </section>
    )}

export default AnimatedHP;