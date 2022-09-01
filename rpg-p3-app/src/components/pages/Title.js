import './style/title.css'
// import 'url("https://fonts.googleapis.com/css2?family=Silkscreen&display=swap")'

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

// export default function Title() {
//     return (
//     <section className="text-center vh-100">
//         <section className="h-100" id="contentCon">
//             <p className="text-wrap text-white fs-1" id="title">Game Title</p>
//             <button type="button" id="startButton" class="btn bg-secondary text-light p-3 w-25 align-self-center">
//                 embark on adventure
//             </button>
//         </section>
//     </section>
//     )
// }

// stuff I'm passing also does not feel right..
function Title({ currentPage, handlePageChange}) {
    return (
    <section className="text-center vh-100">
        <section className="h-100" id="contentCon">
            <p className="text-wrap text-white fs-1" id="title">Game Title</p>
            <Link onClick={() => handlePageChange('/Home')}>
                <Button type="button" id="startButton" class="btn bg-secondary text-light p-3 w-25 align-self-center">
                    embark on adventure
                </Button>
            </Link>
        </section>
    </section>
    )
}

export default Title;