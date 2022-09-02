import './style/createAccount.css'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


export default function CreateAccount({submitSignUpHandler}) {

    const [emailEl, setEmailEl] = useState('')
    const [userEl, setUserEl] = useState('')
    const [inputEl, setInputEl] = useState('')

    const submit = e=>{
        e.preventDefault()
        submitSignUpHandler(emailEl, userEl, inputEl)
    }

    return (
        <section id='pageCon'>
            <Form id="inputCon" onSubmit={submit}>
                <section>
                    <p id='title'>
                    Create Account 
                    </p>
                </section>
                <Form.Group id='emailCon'>
                    <Form.Label for="emailInput" className="inputLabel">Email</Form.Label>
                    <section className="col-sm-10">
                        <Form.Control type="email" value={emailEl} controlId="emailInput" className="form-control" id="emailInput" onChange={e=>setEmailEl(e.target.value)}/>
                    </section>
                </Form.Group>
                <Form.Group id="userCon">
                    <Form.Label for="inputUsername" className="inputLabel">Username</Form.Label>
                    <section classNameName="col-sm-10">
                        <Form.Control controlId="inputUsername" value={userEl} type="text" className="form-control" id="username" onChange={e=>setUserEl(e.target.value)}/>
                    </section>
                </Form.Group>
                <Form.Group id="passCon">
                    <Form.Label for="inputPassword" className="inputLabel">Password</Form.Label>
                    <section className="col-sm-10">
                        <Form.Control controlId="inputPassword" value={inputEl} type="password" className="form-control" id="userPassword" onChange={e=>setInputEl(e.target.value)}/>
                    </section>
                </Form.Group>
                {/* <Form.Group className="form-check form-check-reverse">
                    <Form.Check className="form-check-input" type="checkbox" label="Show Password" controlId="formShowPass" id="showPass"/>
                </Form.Group> */}
                <Form.Group>
                    {/* do we need to do my link thing here? or will the routing via javscript for logging in do that? */}
                    <Button id="createBtn" type="submit">
                        Create Account
                    </Button>
                </Form.Group>
                <Form.Group>
                    <p id="toLoginCon">
                        Already have an account? Login here.
                    </p>
                </Form.Group>
            </Form>
        </section>
    )
}

// send to newhome