import './bs.css';
import Form from 'react-bootstrap/Form';
// import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
// import { CountdownCircleTimer } from 'react-countdown-circle-timer';


export default function Battlescreen (){
    return (
        <section id="battlescreenWindow"></section>,

            //gotta think of something quippy for this~
            //I also don't know if we'd rather the Form Vs an Input grouping?? just let me know, ig!!
        <>
        <Form.Label id = "attackBox" htmlfor = "attackBox">Placeholder text</Form.Label>
        <Form.Control
            type= "text"
        />
        <Form.Text id= "attackText" muted>
            Get Ready to Attack!!!
        </Form.Text>
        </>,

    
    <section id = "playerIcon">
        <section className = "float-left">
            <img className = "rounded" src = {require('../../../../imgs/PlaceholderPlayer1.png').default} height={200} width ={200}/>
                <p>Player 1</p>
        </section>
    </section>,

        <section id = "enemyIcon">
            <section className = "roundedCircle" src = {require('../../../../imgs/PlaceholderPlayer2.png').default} height = {400} width = {400} />
        </section>,

    <section id = "hpBar">
        <section>
            <ProgressBar stripped variant = "danger" now = {100} ></ProgressBar>
                <ProgressBar animated now = {100} ></ProgressBar>
        </section>
    </section>

        // <section className="timer">
        //     <section className="text">Remaining Time:</section>
        // <section className="value">{formatRemainingTime(remainingTime)}</section>
        // </section>,

        // <section className="time-wrapper">
        //     <CountdownCircleTimer> is playing duration {300} colors = {["9CC69B"]} onComplete={() => [true, 1000]} {renderTime} </CountdownCircleTimer>
        // </section>,
        //     <p className="info"> Change component properties in the code filed on the right to try difference functionalities.</p>

    )};


