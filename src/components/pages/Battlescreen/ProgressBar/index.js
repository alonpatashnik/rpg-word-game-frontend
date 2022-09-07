// import {ProgressBar} from 'react-bootstrap';
// import './Progess.css';

export function AnimatedHP(){
    return (
        <div className='container gx-0 hpbox'>
            <section id="hpBar">
                {/* <ProgressBar id="enemyHealth" striped animated variant="danger" now={60} max={60} /> */}
                {/* <ProgressBar animated now={100} /> */}
                <progress id="enemyHealth" value="50" max="50"></progress>
            </section>
        </div>
    )}

export default AnimatedHP;