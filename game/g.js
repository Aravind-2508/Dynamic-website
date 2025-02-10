const cells = document.querySelectorAll('.cell');
const statusDiv = document.getElementById('status');
const resetButton = document.getElementById('resetButton');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let isGameOver = false;

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function handleClick(event) {
    const index = event.target.getAttribute('data-index');
    if (gameBoard[index] === '' && !isGameOver) {
        gameBoard[index] = currentPlayer;
        event.target.innerText = currentPlayer;
        event.target.classList.add('clicked');
        if (checkWinner()) {
            statusDiv.innerText = `${currentPlayer} is the winner! The runner-up is ${currentPlayer === 'X' ? 'O' : 'X'}.`;
            isGameOver = true;
        } else if (gameBoard.every(cell => cell !== '')) {
            statusDiv.innerText = `It's a draw! No winner or runner-up.`;
            isGameOver = true;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            statusDiv.innerText = `Player ${currentPlayer}'s turn`;
        }
    }
}

function checkWinner() {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return gameBoard[index] === currentPlayer;
        });
    });
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    isGameOver = false;
    currentPlayer = 'X';
    cells.forEach(cell => {
        cell.innerText = '';
        cell.classList.remove('clicked');
    });
    statusDiv.innerText = `Player ${currentPlayer}'s turn`;
    statusDiv.classList.add('fadeIn');
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
resetButton.addEventListener('click', resetGame);
resetGame();
