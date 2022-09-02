import './bs.css';
import Form from 'react-bootstrap/Form';

export default function Battlescreen (){
    return (
        <section id="battlescreenWindow"></section>,

            //gotta think of something quippy for this~
        <>
        <Form.Label for = "attackBox">Placeholder text</Form.Label>
        <Form.Control
            type= "text"
        />
        <Form.Text id= "attackText" muted>
            Get Ready to Attack!!!
        </Form.Text>
        </>
    );
}
    
        <section className = "float-left">
            <img src = {require('../rpg-p3-app/imgs/PlaceholderPlayer1').default} height={200} width ={200}/>
                <p>Player 1</p>
        </section>


