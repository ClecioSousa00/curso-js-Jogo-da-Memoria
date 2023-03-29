import CardFrontBack from "../../components/CardFrontBack";
import CardGame from "../../components/CardGame";
import "./style.css"

function BoardGame(amountCards){
    const htmlCardFrontBack = CardFrontBack()
    const htmlBoardGame = htmlCardFrontBack.repeat(amountCards)
    return /*html*/`
        <section class="board-game">
            ${htmlBoardGame}
        </section>
    `
}

export default BoardGame