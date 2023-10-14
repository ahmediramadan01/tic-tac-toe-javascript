"use strict";

const gameBoard = (function () {
    const gameBoardElement = document.querySelector(".game-board");

    const board = ["o", "o", "o", "o", "o", "o", "o", "o", "o"];

    const render = function () {
        gameBoardElement.innerHTML = "";

        board.forEach((marker) =>
            gameBoardElement.insertAdjacentHTML(
                "beforeend",
                `<div class="cell"><img src="./images/${marker}.svg" alt="" /></div>`
            )
        );
    };

    return { render };
})();
