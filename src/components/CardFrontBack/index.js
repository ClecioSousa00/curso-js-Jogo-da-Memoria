import CardGame from "../CardGame"
import "./style.css"

 
function CardFrontBack(icon, alt){
   
    window.cardFrontBack = {}
    window.cardFrontBack.handleClick = event => {
        const cardSelect = event.target.closest('.card-front-back')
        cardSelect.classList.toggle('active')
    }

    return /*html*/`
        <article class="card-front-back" onclick="cardFrontBack.handleClick(event)">
            <div class="card-front">
                ${CardGame()}
            </div>
            <div class="card-back">
                ${CardGame(icon,alt)}
            </div>
            
        </article>
    `
}


export default CardFrontBack