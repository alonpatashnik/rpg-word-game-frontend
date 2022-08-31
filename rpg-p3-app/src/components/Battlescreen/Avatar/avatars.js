import '../rpg-p3-app/imgs';

export default function Avatars(){
    return (
        <section className = "Avatars">
            <img src = {require('../rpg-p3-app/imgs/PlaceholderPlayer1').default} height={200} width ={200}/>
        </section>
    )
}

//I want to fix this later on, this seems Bad and Unusable, but this is something for when my brain is like ...... functioning correctly.
export function Avatars() {
    return (
        <section className="float-left"></section>,
            <p className="float-left">
                Player 1
            </p>
        )};