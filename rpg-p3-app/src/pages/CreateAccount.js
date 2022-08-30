export default function createAccount() {
    return (
        <section>
            <form>
                <section className="row mb-2">
                    <label for="emailInput" class="col-sm-2 col-form-label">Email</label>
                    <section className="col-sm-10">
                        <input type="email" class="form-control"/>
                    </section>
                </section>
                <section className="row mb-2">
                    <label for="inputUsername" class="col-sm-2 col-form-label">Username</label>
                    <section className="col-sm-10">
                        <input type="text" class="form-control"/>
                    </section>
                </section>
                <section className="row mb-2">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                    <section className="col-sm-10">
                        <input type="password" class="form-control"/>
                    </section>
                </section>
            </form>
        </section>
    )
}