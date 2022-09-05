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
                    <p className="text-white text-center fs-2">
                    Login 
                    </p>
                </section>
                <Form.Group className="row mb-2">
                    <Form.Label for="formEmailLogin" className="col-sm-2 col-form-label text-end">Email</Form.Label>
                    <section className="col-sm-10">
                        <Form.Control type="email" value={emailEl} controlId="formEmailLogin" className="form-control" onChange={(e) => setEmailEl(e.target.value)}/>
                    </section>
                </Form.Group>
                <Form.Group className="row mb-2">
                    <Form.Label for="formPasswordLogin" className="col-sm-2 col-form-label text-end">Password</Form.Label>
                    <section className="col-sm-10">
                        <Form.Control type="password" value={inputEl} controlId="formPasswordLogin" className="form-control" onChange={(e) => setInputEl(e.target.value)}/>
                    </section>
                </Form.Group>
                <Form.Group className="form-check form-check-reverse">
                    <Form.Check className="form-check-input" controlId="formShowCheck" type="checkbox" label="Show Password" id="showPass"/>
                </Form.Group>
                <Form.Group>
                    {/* do I need to do my link thing here? or will the routing via javascript for logging in do that */}
                    <Button type='submit'>
                        Login
                    </Button>
                </Form.Group>
                <Form.Group>
                    <Link to='/SignUp'>
                    <Button className="text-white text-center">
                        Don't have an account? Sign up here.
                    </Button>
                    </Link>
                </Form.Group>
            </Form>
        </section>
    )
}