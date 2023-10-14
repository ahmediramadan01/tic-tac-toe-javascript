"use strict";

const gameBoard = (function () {
    const gameBoardElement = document.querySelector(".game-board");

    const board = ["", "", "", "", "x", "", "o", "", ""];

    const getBoard = () => board;

    const render = function () {
        gameBoardElement.innerHTML = "";

        board.forEach((marker, index) => {
            if (marker !== "") {
                gameBoardElement.insertAdjacentHTML(
                    "beforeend",
                    `<div class="cell" data-cell="${index}"><img src="./images/${marker}.svg" alt="" /></div>`
                );
            } else {
                gameBoardElement.insertAdjacentHTML("beforeend", `<div class="cell" data-cell="${index}"></div>`);
            }
        });
    };

    return { getBoard, render };
})();

gameBoard.render();
console.log(gameBoard.getBoard());
