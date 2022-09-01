import '../rpg-p3-app/imgs';

export default function Avatars(){
    return (
        <section className = "float-left">
            <img src = {require('../rpg-p3-app/imgs/PlaceholderPlayer1').default} height={200} width ={200}/>
            <p>Player 1</p>
        </section>
    )
};