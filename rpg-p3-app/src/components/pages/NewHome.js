import './style/newHome'
import 'url("https://fonts.googleapis.com/css2?family=Silkscreen&display=swap")'

export default function NewHome() {
    return (
        <section className="text-center vh-100">
            <section className="h-100" id="contentCon">
                <p className="text-wrap text-white fs-1 mb-5" id="welcome">Welcome, @username</p>
                <p className="text-wrap text-white fs-3 mb-5" id="journey">Are you ready to set out on your journey?</p>
                <button type="button" id="newBtn" className="btn text-light p-3 w-25 align-self-center mb-5">
                    Start Adventure
                </button>
            </section>
        </section>
    )
}

