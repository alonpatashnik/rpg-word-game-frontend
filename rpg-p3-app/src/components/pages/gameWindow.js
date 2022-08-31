// game window will then hold the entirety of the game, so no more pages after this one.
import './style/game'
import 'url("https://fonts.googleapis.com/css2?family=Silkscreen&display=swap")'

// function Game() {
//  return (
//     // <!-- think I'm going to use an offcanvas component for the side nav -->
//     <section classNameName="titleCon">
//         <p classNameName="text-start fs-1">
//             Game Title
//         </p>
//         <button className="btn" data-bs-toggle="offcanvas" href="#offCanvasMenu" role="button" aria-controls="offCanvasMenu" >
//             menu
//         </button>
//     </section>
//     // <!-- offcanvas -->
//     <section className="offcanvas offcanvas-end show text-bg-dark" tabindex="-1" id="offCanvasMenu" aria-labelledby="offcanvasDarkLabel">
//     </section>
//  )
// }

// export default Game;

export default function Game() {
    return (
        // <!-- think I'm going to use an offcanvas component for the side nav -->
        <section className="titleCon">
            <p className="text-start fs-1">
                Game Title
            </p>
            <button className="btn" data-bs-toggle="offcanvas" href="#offCanvasMenu" role="button" aria-controls="offCanvasMenu" >
                menu
            </button>
        </section>
        // <!-- offcanvas -->
        <section className="offcanvas offcanvas-end show text-bg-dark" tabindex="-1" id="offCanvasMenu" aria-labelledby="offcanvasDarkLabel">
        </section>
     )
}