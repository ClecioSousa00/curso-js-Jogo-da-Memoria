// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

import "./src/styles/global.css"

import CardGame from "./src/components/CardGame"
import BoardGame from "./src/objects/BoardGame"
import PlayerName from "./src/components/PlayerName"
import ScoreBoard from "./src/objects/ScoreBoard"
import CardFrontBack from "./src/components/CardFrontBack"

const root = document.querySelector('#root')



root.insertAdjacentHTML('beforeend', `${ScoreBoard()} ${BoardGame(6)}`)
