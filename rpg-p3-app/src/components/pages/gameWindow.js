// game window will then hold the entirety of the game, so no more pages after this one.
import './style/game.css'
import './style/bs.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import CloseButton from 'react-bootstrap/CloseButton';
import React, { useState } from 'react'
import Battlescreen from './Battlescreen/BattlescreenPage/BSP.js';
// import { Link } from 'react-router-dom';


export default function Game({user}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
    <>

    <section id="gameContainer" className="vh-100 text-white">
        <section id='pauseCon'>
            <Button  onClick={handleShow} type="button" id="modalBtn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Pause
            </Button>
        </section>


            <Modal show={show} onHide={handleClose} backdrop="static" id="staticBackdrop">
                <Modal.Header id="modalHead">
                    {/* <CloseButton id="closeBtn" variant="white" onClick={handleClose} aria-label="Close"/> */}
                    <Modal.Title id="menuLabel">paused</Modal.Title>
                </Modal.Header>
                <Modal.Body id="menuBody">
                        <section id="menuGroup">

                            {/* <Button type="button" className="list-group-item list-group-item-action">
                                Reload Last CheckPoint
                            </Button> */}

                                {/* <Link to="/Dashboard" id='menuHome'> */}
                                    <Button type="button" id="modalHome" className="list-group-item list-group-item-action" href="/Dashboard">
                                            Home
                                    </Button>
                                {/* </Link> */}

                                {/* <Button type="button" onClick={logout} className="list-group-item list-group-item-action">
                                    Logout
                                </Button> */}

                                <Button type="button" onClick={handleClose} className="list-group-item list-group-item-action" data-bs-dismiss="modal">
                                    Resume
                                </Button>

                        </section>
                </Modal.Body>
        </Modal>

        <section className='battleScrnCon'>
            <Battlescreen className="battleScrn" user={user}/>
        </section>
        
        
    </section>
    </>
    )   
};