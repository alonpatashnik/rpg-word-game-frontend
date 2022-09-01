import './style/LoginHome.css'
// import 'url("https://fonts.googleapis.com/css2?family=Silkscreen&display=swap")'

export default function LoginHome() {
    // fetch request here, authorization option with token on localstore
    return (
    <section className="text-center vh-100">
        <section className="h-100" id="contentCon">
            <p className="text-wrap text-white fs-1 mb-5" id="welcome">Welcome back, @username</p>
            <button type="button" id="newBtn" className="btn text-light p-3 w-25 align-self-center mb-5">
                New Adventure
            </button>
            <button type="button" id="continueBtn" className="btn text-light p-3 w-25 align-self-center mb-4">
                Continue
            </button>
        </section>
    </section> 
    )
}

// import react useEffect -> run on page load

// if token send to stuff already above
// if no token, send to title

// catch for people making an account and then immediately leaving
// if character_id = true, allow
// if character_id = false, send to New Home

// could do a conditional 