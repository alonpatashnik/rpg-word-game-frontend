import './style/login.css'
// import 'url("https://fonts.googleapis.com/css2?family=Silkscreen&display=swap")'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Login({submitLoginHandler}) {

    const [emailEl, setEmailEl] = useState('')
    const [inputEl, setInputEl] = useState('')

    const submit = async(e) => {
        await e.preventDefault();
        await submitLoginHandler(emailEl, inputEl)
    }

    return (
        <section className="m-4 justify-content-center">
            <Form id="inputCon" onSubmit={submit}>
                <section>
                    <p id='title'>
                    Login 
                    </p>
                </section>
                <Form.Group id='emailCon'>
                    <Form.Label for="formEmailLogin" className="inputLabel">Email</Form.Label>
                    <section className="col-sm-10">
                        <Form.Control type="email" value={emailEl} controlId="formEmailLogin" id="emailInput" className="form-control" onChange={(e) => setEmailEl(e.target.value)}/>
                    </section>
                </Form.Group>
                <Form.Group id="passCon">
                    <Form.Label for="formPasswordLogin" className="inputLabel">Password</Form.Label>
                    <section className="col-sm-10">
                        <Form.Control type="password" value={inputEl} id="userPassword" controlId="formPasswordLogin" className="form-control" onChange={(e) => setInputEl(e.target.value)}/>
                    </section>
                </Form.Group>
                {/* <Form.Group className="form-check form-check-reverse">
                    <Form.Check className="form-check-input" controlId="formShowCheck" type="checkbox" label="Show Password" id="showPass"/>
                </Form.Group> */}
                <Form.Group>
                    {/* do I need to do my link thing here? or will the routing via javascript for logging in do that */}
                    <Button id="loginBtn" type='submit'>
                        Login
                    </Button>
                </Form.Group>
                <Form.Group>
                    <p className="text-white text-center">
                        Don't have an account? Sign up 
                        <Link to='/SignUp'>
                            <Button id="linkBtn" variant="link">here</Button>
                        </Link>
                    </p>
                </Form.Group>
            </Form>
        </section>
    )
}