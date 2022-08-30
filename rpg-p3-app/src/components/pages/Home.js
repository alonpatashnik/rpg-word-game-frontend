// home being the very beginning opening page
// this is what is opened up to when the users go to the url
// has the opening title, and a button for embarking on adventure (bringing to next page)
// const Home = () => {
// //    this for loading data?
// }

import './style/home'
import 'url("https://fonts.googleapis.com/css2?family=Silkscreen&display=swap")'

export default function Home() {
    return (
        <section className="text-center vh-100">
        <section className="h-100" id="contentCon">
            <p className="text-wrap text-white fs-1 mb-5" id="title">Game Title</p>
            <button type="button" id="newButton" className="btn text-light p-3 w-25 align-self-center mb-5">
                Create Account
            </button>
            <button type="button" id="loginButton" className="btn text-light p-3 w-25 align-self-center mb-4">
                Login
            </button>
        </section>
    </section> 

    )
}