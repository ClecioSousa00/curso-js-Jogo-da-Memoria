import "./style.css"

function PlayerScore(points=0){
    return /*html*/ `
        <ol class="player-score" data-points="${points}">
            <li></li>
            <li></li>
            <li></li>
        </ol>
    `
}

export default PlayerScore