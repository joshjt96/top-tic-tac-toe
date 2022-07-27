// Player Factory
const playerFactory = (name, piece) => {

    for (let i = 0; i < 4; i++) {
        if (gameboardModule.players.length >= 4) {
            gameboardModule.playerMove();
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

const startGame = document.querySelector('.play-button');
startGame.addEventListener('click', playerFactory);

// Gameboard Module
const gameboardModule = (() => {
    const gameboard = [];
    const players = [];
    function playerMove() {
        if (players.length == 4) {
            if (gameboard.length == 0) {
                gameboard.push(players[1]);
                console.log('Current gameboard array:', gameboard);
            } else if (gameboard[gameboard.length - 1] == 'X') {
                gameboard.push(players[3]);
                console.log('Current gameboard array:', gameboard);
            } else if (gameboard[gameboard.length - 1] == 'O') {
                gameboard.push(players[1]);
                console.log('Current gameboard array:', gameboard);
            }
        };
    }
    return {gameboard, players, playerMove};
})();

// displayController Module
const displayControllerModule = (() => {
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
                    grids.textContent = gameboardModule.gameboard[gameboardModule.gameboard.length - 1]; 
                }
                index++;
            });
            // Function to check for a win or tie
            function checkWin(piece) {
                const horizontal = [0,3,6].map(i=>{return[i, i+1, i+2]});
                const vertical = [0,1,2].map(i=>{return[i, i+3, i+6]});
                const diagonal =  [[0,4,8], [2,4,6]];
                let allWins = [].concat(horizontal).concat(vertical).concat(diagonal);
                let results = allWins.some(indices => {
                return grids[indices[0]].textContent == piece && grids[indices[1]].textContent == piece && grids[indices[2]].textContent == piece})
                return results;
            };
                if (checkWin('X') == true) {
                    console.log(gameboardModule.players[0], 'Wins!');
                    const container = document.querySelector('.win-msg-container');
                    const winMessage = document.createElement('h1');
                    winMessage.textContent = (`${gameboardModule.players[0]} wins!`);
                    winMessage.classList.add('win-message');
                    container.appendChild(winMessage);
                    return;
                } else if (checkWin('O') == true) {
                    console.log(gameboardModule.players[2], 'Wins!');
                    const container = document.querySelector('.win-msg-container');
                    const winMessage = document.createElement('h1');
                    winMessage.textContent = (`${gameboardModule.players[2]} wins!`);
                    winMessage.classList.add('win-message');
                    container.appendChild(winMessage);
                    return;
                } else if (gameboardModule.length == 9) {
                    console.log('Tie!');
                    const container = document.querySelector('.win-msg-container');
                    const winMessage = document.createElement('h1');
                    winMessage.textContent = ('Tie!');
                    winMessage.classList.add('win-message');
                    container.appendChild(winMessage);
                    return;
                }
                gameboardModule.playerMove();
        };
    index++;
    });
    return {};
})();

// const p1 = playerFactory('Josh', 'X');
// const p2 = playerFactory('Amy', 'O');
// const restartGame = document.querySelector('.restart-button');
// startGame.addEventListener('click', playerFactory);

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