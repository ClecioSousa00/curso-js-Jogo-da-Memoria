import CardFrontBack from "../../components/CardFrontBack";
import CardGame from "../../components/CardGame";
import "./style.css"

function BoardGame(amountCards){
    const cards =[
        {
            icon: "Javascript",
            alt: "Logo do JavaScript"
        },
        {
            icon: "html",
            alt: "Logo do HTML" 
        },
        {
            icon: "css",
            alt: "Logo do CSS" 
        }
    ]
    
    const htmlCardsList = cards.map(card => CardFrontBack(card.icon, card.alt))
    const htmlCards = htmlCardsList.join('')
    return /*html*/`
        <section class="board-game">
            ${htmlCards}
        </section>
    `
}

export default BoardGame