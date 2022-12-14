import './style/createAccount.css'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function CreateAccount({submitSignUpHandler}) {
    if (localStorage.getItem('token')) {
        window.location.replace('/Dashboard')
    }

    const [emailEl, setEmailEl] = useState('')
    const [userEl, setUserEl] = useState('')
    const [inputEl, setInputEl] = useState('')


    const submit = async (e)=> {
        await e.preventDefault()
        await submitSignUpHandler(emailEl, userEl, inputEl)
        
    }

    return (
        <section id='pageCon'>
            <section id='contentCon'>
            <Form id="inputCon" onSubmit={submit}>
                <section>
                    <p id='title'>
                    Create Account 
                    </p>
                </section>
                <Form.Group id='emailCon'>
                    <Form.Label for="emailInput" className="inputLabel">Email</Form.Label>
                    <section>
                        <Form.Control type="email" value={emailEl} controlId="emailInput" className="form-control" id="emailInput" onChange={e=>setEmailEl(e.target.value)}/>
                    </section>
                </Form.Group>
                <Form.Group id="userCon">
                    <Form.Label for="inputUsername" className="inputLabel">Username</Form.Label>
                    <section>
                        <Form.Control controlId="inputUsername" value={userEl} type="text" className="form-control" id="username" onChange={e=>setUserEl(e.target.value)}/>
                    </section>
                </Form.Group>
                <Form.Group id="passCon">
                    <Form.Label for="inputPassword" className='inputLabel'>Password</Form.Label>
                    <section>
                        <Form.Control controlId="inputPassword" value={inputEl} type="password" className="form-control" id="userPassword" onChange={e=>setInputEl(e.target.value)}/>
                    </section>
                </Form.Group>
                {/* <Form.Group className="form-check form-check-reverse">
                    <Form.Check className="form-check-input" type="checkbox" label="Show Password" controlId="formShowPass" id="showPass"/>
    </Form.Group>*/}
                <Form.Group>
                    {/* do we need to do my link thing here? or will the routing via javscript for logging in do that? */}
                    <Button id="createBtn" type="submit">
                        Create Account
                    </Button>
                </Form.Group>
                <Form.Group>
                    <p id="toLoginCon">
                        Already have an account? Login 
                    <Link to={'/Login'}>
                        <Button id="linkBtn" variant='link'>here</Button>
                    </Link>
                    </p>
                </Form.Group>
            </Form>
            </section>
            
        </section>
    )
}

// send to newhome