import './Attack.css'
import { Form } from 'react-bootstrap';


export default function AttackBar() {
    return (
        <section id="attackCon">
            {/* <Form.Label id="attackBox" htmlfor="attackBox">Placeholder text</Form.Label> */}
            <Form.Control id="attackInput"
                type="text"
            />
            {/* <Form.Text id="attackText" muted>
                Get Ready to Attack!!!
            </Form.Text> */}
        </section>
    )
};