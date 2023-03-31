import "./style.css"

function ArrowDown(currentPlayer=1){
    return /*html*/`
        <img class="arrow-down" data-current-player="${currentPlayer}" src="images/iconArrowDown.svg" alt="Arrow Down">
    `
}

export default ArrowDown