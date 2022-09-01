// game window will then hold the entirety of the game, so no more pages after this one.
import './style/game'
import 'url("https://fonts.googleapis.com/css2?family=Silkscreen&display=swap")'
import * as bootstrap from 'bootstrap'

export default function Game() {
    return (
        <section id="gameContainer" className="vh-100 text-white">
      
        <section className="d-flex justify-content-end">
            <button type="button" id="modalBtn" className="btn border border-0 text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Pause
            </button>
        </section>


        <section className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="pauseMenu" aria-hidden="true">
            <section className="modal-dialog modal-dialog-centered">
                <section className="modal-content">
                    <section className="modal-header border border-0 d-flex">
                        <h4 className="modal-title flex-grow-1" id="menuLabel">game paused</h4>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </section>
                    <section className="modal-body">
                        <section className="list-group">

                            <button type="button" className="list-group-item list-group-item-action">
                                Reload Last CheckPoint
                            </button>

                            <button type="button" className="list-group-item list-group-item-action">
                                Home
                            </button>

                            <button type="button" className="list-group-item list-group-item-action">
                                Logout
                            </button>

                            <button type="button" className="list-group-item list-group-item-action" data-bs-dismiss="modal">
                                Resume
                            </button>

                        </section>

                    </section>
                </section>
            </section>

        </section>

    </section>
    )   
};


