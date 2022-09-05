import React from 'react';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//all files 
// import Game from '../../gameWindow'
import AttackBar from '../AttackBar'
import Avatar from '../Avatar'
import Enemy from '../Enemy'
import ProgressBar from '../ProgressBar'
// import Timer from '../Timer'

function Battlescreen(){
        return (
            // <Router>
            <section className='bs'>
                <AttackBar />
                <Avatar />
                <Enemy />
                <ProgressBar />
                {/* <Timer /> */}
                {/* <Routes> */}
                    {/* <Route path="/" element={<Game/>} /> */}
                    {/* <Route path="AttackBar" element={<AttackBar/>} />
                    <Route path="/Avatar" element={<Avatar/>} />
                    <Route path="/Enemy" element={<Enemy/>} />
                    <Route path="/ProgessBar" element={<ProgressBar/>} />
                    <Route path="/Timer" element = {<Timer/>} /> */}
                    {/* <Route path="*" element = {<Game/>}/> */}
                {/* </Routes> */}
            </section>
        // </Router>
        )
    }

export default Battlescreen;