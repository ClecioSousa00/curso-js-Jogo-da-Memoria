import CardGame from "../../components/CardGame";
import "./style.css"

function BoardGame(amountCards){
    const htmlCardGame = CardGame()
    const htmlBoardGame = htmlCardGame.repeat(amountCards)
    return `
        <section class="board-game">
            ${htmlBoardGame}
        </section>
    `
}

export default BoardGame