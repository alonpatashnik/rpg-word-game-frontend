// game window will then hold the entirety of the game, so no more pages after this one.
import './style/game'
import 'url("https://fonts.googleapis.com/css2?family=Silkscreen&display=swap")'

export default function Game() {
    return (
    <section id="gameContainer" class="vh-100 text-white">
        <section class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="pauseMenu" aria-hidden="true">
            <section class="modal-dialog">
                <section class="modal-content">
                    <section class="modal-header">
                        <h4 class="modal-title" id="menuLabel">game paused</h4>
                    </section>
                    <section class="modal-body">
                        <section class="list-group">
                            <button type="button" class="list-group-item list-group-item-action">
                                Reload Last CheckPoint
                            </button>
                            <button type="button" class="list-group-item list-group-item-action">
                                Home
                            </button>
                            <button type="button" class="list-group-item list-group-item-action">
                                Logout
                            </button>
                        </section>

                    </section>
                </section>
            </section>

        </section>

    </section>
    )   
}


