// home being the very beginning opening page
// this is what is opened up to when the users go to the url
// has the opening title, and a button for embarking on adventure (bringing to next page)
// const Home = () => {
// //    this for loading data?
// }

export default function Home() {
    return (
    <section className="text-center vh-100">
        <section className="h-100" id="contentCon">
            <p className="text-wrap text-white fs-1" id="title">Game Title</p>
            <button type="button" id="startButton" class="btn bg-secondary text-light p-3 w-25 align-self-center">
                embark on adventure
            </button>
        </section>
    </section>
    )
}