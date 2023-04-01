import CardGame from "../CardGame"
import "./style.css"

 window.handleClick = event => {
    const cardSelect = event.target.closest('.card-front-back')
    cardSelect.classList.toggle('active')
}
function CardFrontBack(icon, alt){
   
    return /*html*/`
        <article class="card-front-back" onclick="handleClick(event)">
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