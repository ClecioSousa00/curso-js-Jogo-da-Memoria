import "./style.css";

function CardGame (icon='alura-pixel 1', alt='Logo da alura'){
    return `
        <article class="card-game">
            <img src="/images/${icon}.svg" alt="${alt}">
        </article>
    `
}

export default CardGame