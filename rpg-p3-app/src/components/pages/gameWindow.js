// game window will then hold the entirety of the game, so no more pages after this one.
import './style/game.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';

export default function Game() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
        <section id="gameContainer" className="vh-100 text-white">
      
        <section className="d-flex justify-content-end">
            <Button  onClick={handleShow} type="button" id="modalBtn" className="btn border border-0 text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Pause
            </Button>
        </section>

        <Modal show={show} onHide={handleClose} id="staticBackdrop">
            <Modal.Header CloseButton>
                <Modal.Title id="menuLabel">game paused</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                       <section className="list-group">

                            <Button type="button" className="list-group-item list-group-item-action">
                                Reload Last CheckPoint
                            </Button>

                            <Button type="button" className="list-group-item list-group-item-action">
                                Home
                            </Button>

                            <Button type="button" className="list-group-item list-group-item-action">
                                Logout
                            </Button>

                            <Button type="button" className="list-group-item list-group-item-action" data-bs-dismiss="modal">
                                Resume
                            </Button>

                        </section>
            </Modal.Body>
        </Modal>
    </section>
    </>
    )   
};


