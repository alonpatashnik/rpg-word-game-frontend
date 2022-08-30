

export default function login() {
    return (
        <section>
            <form>
                <section>
                    <p className="text-white text-center fs-2">
                    Create Account 
                    </p>
                </section>
                <section className="row mb-2">
                    <label for="emailInput" class="col-sm-2 col-form-label text-white text-end">Email</label>
                    <section className="col-sm-10">
                        <input type="email" class="form-control"/>
                    </section>
                </section>
                <section className="row mb-2">
                    <label for="inputUsername" class="col-sm-2 col-form-label text-white text-end">Username</label>
                    <section className="col-sm-10">
                        <input type="text" class="form-control"/>
                    </section>
                </section>
                <section className="row mb-2">
                    <label for="inputPassword" class="col-sm-2 col-form-label text-white text-end">Password</label>
                    <section className="col-sm-10">
                        <input type="password" class="form-control"/>
                    </section>
                </section>
                <section className="form-check form-check-reverse">
                    <input className="form-check-input" type="checkbox" value="" id="showPass"/>
                    <label className="form-check-label" for="showPass">
                        Show Password
                    </label>
                </section>
                <section>
                    <p className="text-white text-center">
                        Already have an account? Login here.
                    </p>
                </section>
            </form>
        </section>
    )
}