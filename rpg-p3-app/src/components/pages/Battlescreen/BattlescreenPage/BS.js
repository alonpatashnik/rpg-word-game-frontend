import './bs.css';
import Form from 'react-bootstrap/Form';

export default function Battlescreen (){
    return (
        <section id="battlescreenWindow"></section>,

            //gotta think of something quippy for this~
            //I also don't know if we'd rather the Form Vs an Input grouping?? just let me know, ig!!
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
    
    <section id = "playerIcon">
        <section className = "float-left">
            <img className = "rounded" src = {require('../rpg-p3-app/imgs/PlaceholderPlayer1').default} height={200} width ={200}/>
                <p>Player 1</p>
        </section>
    </section>,

        <section id = "enemyIcon">
            <section className = "roundedCircle" src = {require('/imgs/PlaceholderPlayer2').default} height = {400} width = {400} />
        </section>


