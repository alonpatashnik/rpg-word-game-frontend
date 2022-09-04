import './Attack.css'


export default function AttackBar() {
    return (
        <section>
            <Form.Label id="attackBox" htmlfor="attackBox">Placeholder text</Form.Label>
            <Form.Control
                type="text"
            />
            <Form.Text id="attackText" muted>
                Get Ready to Attack!!!
            </Form.Text>
        </section>
    )
};