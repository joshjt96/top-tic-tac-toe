// Gameboard Module
const gameboardModule = (() => {
    gameboard = "X", "O";
        const grids = document.querySelectorAll('.grid');
        grids.forEach(grid => {
            grid.addEventListener('click', () => {
                grid.textContent = gameboard;
                console.log('Click');
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
const playerFactory = (name, piece) => {
    return {name, piece};
};
const p1 = playerFactory('Josh', 'X');
const p2 = playerFactory('Amy', 'O');

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