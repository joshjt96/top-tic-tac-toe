// Gameboard Module
const gameboardModule = (() => {
    const gameboard = [];
    const players = [];
    return {gameboard, players};
})();

// displayController Module
const displayControllerModule = (function () {
    const gridBtn = document.querySelectorAll('.board-button');
    let index = 0;
    gridBtn.forEach(gridBtn => {
        gridBtn.dataset.linkedBtn = index;
        gridBtn.addEventListener('click', renderArray);
        function renderArray() {
            let index = 0;
            const grids = document.querySelectorAll('.grid');
            grids.forEach(grids => {
                grids.dataset.linkedBtn = index;
                if (gridBtn.getAttribute('data-linked-btn') == grids.getAttribute('data-linked-btn')) { 
                    grids.textContent = gameboardModule.gameboard; 
                }
                index++;
            });
        }
    index++;
    });
    return {};
})();

// Player Factory
const playerFactory = (name, piece) => {

    for (let i = 0; i < 4; i++) {
        if (gameboardModule.players.length >= 4) {
            // gameboardModule.makePlayerMove();
            break;
        }   else if (gameboardModule.players.length == 0) {
            let name = prompt('Enter your name')
            if (name == '' || name == null) {
                alert('Name cannot be blank');
                continue;
            }
            let piece = 'X';
            gameboardModule.players.push(name, piece);
        }
        else if (gameboardModule.players.length !== 0) {
            let name = prompt('Enter your name, player 2')
            if (name == '' || name == null) {
                alert('Name cannot be blank');
                continue;
            }
            let piece = 'O';
            gameboardModule.players.push(name, piece);
        }
    }
    console.log(gameboardModule.players);
    return {name, piece};
};


const p1 = playerFactory('Josh', 'X');
const p2 = playerFactory('Amy', 'O');

const startGame = document.querySelector('.play-button');
startGame.addEventListener('click', playerFactory);

// Dark Mode Button
const darkModeBtn = document.querySelector('.dark-mode-button');
darkModeBtn.addEventListener('click', () => {
    const bg = document.querySelector('.body');
    bg.classList.toggle('clicked');
});
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