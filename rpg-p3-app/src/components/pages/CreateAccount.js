import './style/createAccount.css'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


export default function CreateAccount(submitSignUpHandler) {

    const [emailEl, setEmailEl] = useState('')
    const [userEl, setUserEl] = useState('')
    const [inputEl, setInputEl] = useState('')

    const userEmail = document.getElementById('emailInput').value
    const username = document.getElementById('username')
    const userPassword = document.getElementById('passwordInput').value

    return (
        <section className="m-4 justify-content-center">
            <Form id="inputCon" onSubmit={() => submitSignUpHandler(userEmail, username, userPassword)}>
                <section>
                    <p className="text-white text-center fs-2">
                    Create Account 
                    </p>
                </section>
                <Form.Group className="row mb-2">
                    <Form.Label for="emailInput" className="col-sm-2 col-form-label text-white text-end">Email</Form.Label>
                    <section className="col-sm-10">
                        <Form.Control type="email" controlId="emailInput" className="form-control" value={emailEl} id="emailInput" onChange={setEmailEl(userEmail)}/>
                    </section>
                </Form.Group>
                <Form.Group className="row mb-2">
                    <Form.Label for="inputUsername" className="col-sm-2 col-form-label text-white text-end">Username</Form.Label>
                    <section className="col-sm-10">
                        <Form.Control controlId="inputUsername" value={userEl} type="text" class="form-control" id="username" onChange={setUserEl(username)}/>
                    </section>
                </Form.Group>
                <Form.Group className="row mb-2">
                    <Form.Label for="inputPassword" className="col-sm-2 col-form-label text-white text-end">Password</Form.Label>
                    <section className="col-sm-10">
                        <Form.Control controlId="inputPassword" type="password" value={inputEl} class="form-control" id="userPassword" onChange={setInputEl(userPassword)}/>
                    </section>
                </Form.Group>
                <Form.Group className="form-check form-check-reverse">
                    <Form.Check className="form-check-input" type="checkbox" label="Show Password" controlId="formShowPass" id="showPass"/>
                </Form.Group>
                <Form.Group>
                    {/* do we need to do my link thing here? or will the routing via javscript for logging in do that? */}
                    <Button type="submit">
                        Create Account
                    </Button>
                </Form.Group>
                <Form.Group>
                    <p className="text-white text-center">
                        Already have an account? Login here.
                    </p>
                </Form.Group>
            </Form>
        </section>
    )
}

// send to newhome