// Gameboard Module
const gameboardModule = (() => {
    const gameboard = ['X', 'O'];
        const grids = document.querySelectorAll('.grid');
        grids.forEach(grids => {
            grids.addEventListener('click', () => {
                if (playerFactory.turn == 1){
                    for (let key in gameboard) {
                    grids.textContent = gameboard[0];
                };
            };  if (playerFactory.turn == 2){
                    for (let key in gameboard) {
                    grids.textContent = gameboard[1];
                };
            };
        });
    });
    return {gameboard};
})();

// displayController Module
const displayControllerModule = (() => {
    displayController = [];
    return {};
})();

// Player Factory
const playerFactory = (turn, name) => {
    startBtn = document.querySelector('.play-button');
    p1Input = document.getElementById('p1');
    p2Input = document.getElementById('p2');
    p1Input.turn = 1;
    p2Input.turn = 2;
    return {turn, name};

};
const p1 = playerFactory('1', 'Josh');
const p2 = playerFactory('2', 'Amy');

// function renderGameboard() {
//     const grid = document.querySelector('.grid');
//     grid.addEventListener('click', () => {
//         grid.textContent = gameboard;
//         console.log('Click');
//     });
// };

// renderGameboard();

// function renderGameboard() {
//     const grids = document.querySelectorAll('.grid').forEach(function () {
//         grids.addEventListener('click', () => {
//             grids.textContent = gameboard;
//             console.log('Click');
//         });
//     });
//     renderGameboard();
// };

// let renderGameboardModule = (() => {
//     const grids = document.querySelectorAll('.grid');
//     grids.addEventListener('click', () => {
//         grids[0].textContent = "Test";
//         console.log('Click');
//     });
// });

// renderGameboardModule();

// function addPiece() {
//     const piece = document.querySelector('.grid');
//     piece.addEventListener('click', addX());
// };

// function addX() {
//     const piece = document.querySelector('.grid');
//     const add = document.createElement('h1')
//     add.textContent = 'X'
//     piece.appendChild()
// };