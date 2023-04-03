import CardFrontBack from "../../components/CardFrontBack";
import CardGame from "../../components/CardGame";
import "./style.css"

function BoardGame(amountCards){
    window.boardGame = {}
    window.boardGame.handleClick = ()=>{
        const boardGame = document.querySelector('.board-game')
        const cardsActive = boardGame.querySelectorAll('.card-front-back.active')
        const arrowDown = document.querySelector('.arrow-down')
        if(cardsActive.length === 2){
            setTimeout(() => {
                cardsActive.forEach(card => card.classList.remove('active'))
                const currentPlayer = arrowDown.getAttribute('data-current-player')
                arrowDown.setAttribute('data-current-player',currentPlayer == 1 ? 2 : 1)

            }, 1000);
        }
    }

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
        <section class="board-game" onclick="boardGame.handleClick()">
            ${htmlCards}
            ${htmlCards}
        </section>
    `
}

export default BoardGame