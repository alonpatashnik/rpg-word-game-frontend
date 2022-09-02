import './style/createAccount.css'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function CreateAccount() {
    return (
        <section className="m-4 justify-content-center">
            <Form id="inputCon">
                <section>
                    <p className="text-white text-center fs-2">
                    Create Account 
                    </p>
                </section>
                <Form.Group className="row mb-2">
                    <Form.Label for="emailInput" class="col-sm-2 col-form-label text-white text-end">Email</Form.Label>
                    <section className="col-sm-10">
                        <Form.Control type="email" controlId="emailInput"class="form-control"/>
                    </section>
                </Form.Group>
                <Form.Group className="row mb-2">
                    <Form.Label for="inputUsername" class="col-sm-2 col-form-label text-white text-end">Username</Form.Label>
                    <section className="col-sm-10">
                        <Form.Control controlId="inputUsername" type="text" class="form-control"/>
                    </section>
                </Form.Group>
                <Form.Group className="row mb-2">
                    <Form.Label for="inputPassword" class="col-sm-2 col-form-label text-white text-end">Password</Form.Label>
                    <section className="col-sm-10">
                        <Form.Control controlId="inputPassword"type="password" class="form-control"/>
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