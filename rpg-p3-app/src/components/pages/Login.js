import './style/login.css'
// import 'url("https://fonts.googleapis.com/css2?family=Silkscreen&display=swap")'

export default function Login() {
    return (
        <section className="m-4 justify-content-center">
            <form id="inputCon">
                <section>
                    <p className="text-white text-center fs-2">
                    Login 
                    </p>
                </section>
                <section className="row mb-2">
                    <label for="emailInput" className="col-sm-2 col-form-label text-white text-end">Email</label>
                    <section className="col-sm-10">
                        <input type="email" className="form-control"/>
                    </section>
                </section>
                <section className="row mb-2">
                    <label for="inputPassword" className="col-sm-2 col-form-label text-white text-end">Password</label>
                    <section className="col-sm-10">
                        <input type="password" className="form-control"/>
                    </section>
                </section>
                <section className="form-check form-check-reverse">
                    <input className="form-check-input" type="checkbox" value="" id="showPass"/>
                    <label className="form-check-label text-white" for="showPass">
                        Show Password
                    </label>
                </section>
                <section>
                    <p className="text-white text-center">
                        Don't have an account? Sign up here.
                    </p>
                </section>
            </form>
        </section>
    )
}