// state select -- state player select
// change rendering on the page
// clicking submit on page and taking information from state to use later on
// using state for forms
// passing information 

import Button from 'react-bootstrap/Button';
import Form from 'react-bookstrap/Form';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import '../../src/components/imgs/Player1Fin.png';
import '../../src/components/imgs/Player2Fin.png';
import '../../src/components/imgs/Player3Fin.png';



function characterSelect() {
    return (
        <>
            <section>
                <h1>Welcome! Your journey begins now! Please select your hero.</h1>
            </section>

            <section id="Player 1">
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Player 1!</Modal.Title>
                        <Modal.Body><img src={'../../src/components/imgs/Player1Fin.png'}></img></Modal.Body>
                    </Modal.Header>
                </Modal>
            </section>

            <section id="Player 2">
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Player 1!</Modal.Title>
                        <Modal.Body><img src={'../../src/components/imgs/Player2Fin.png'}></img></Modal.Body>
                    </Modal.Header>
                </Modal>
            </section>

            <section id="Player 3">
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Player 1!</Modal.Title>
                        <Modal.Body><img src={'../../src/components/imgs/Player3Fin.png'}></img></Modal.Body>
                    </Modal.Header>
                </Modal>
            </section>

            <section id="submitBtn">
                <Button variant="primary" type="submit">Submit</Button>
            </section>

            <Form>
                <Form.Group className="mb-3" controlId="characterName">
                    <Form.Label>Please enter your name!</Form.Label>
                    <Form.Control type="characterName" placeholder="Enter your name here." />
                </Form.Group>

                <Button variant="secondary" type="submit">Submit</Button>
            </Form>

        </>
    )
}

export default characterSelect;






// Battle

// using information between selecting characters
// if statements between players 1, 2, 3