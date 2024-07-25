document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    const resetBtn = document.getElementById('resetBtn');
    const message = document.getElementById('message');
    let isXTurn = true;
    let gameActive = true;
    let boardState = Array(9).fill(null);

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleCellClick(e) {
        const cell = e.target;
        const cellIndex = parseInt(cell.id.split('-')[1]);

        if (boardState[cellIndex] !== null || !gameActive) {
            return;
        }

        boardState[cellIndex] = isXTurn ? 'X' : 'O';
        cell.textContent = boardState[cellIndex];
        cell.style.color = isXTurn ? '#ff6347' : '#4682b4';

        if (checkWinner()) {
            message.textContent = `${isXTurn ? 'X' : 'O'} Wins!`;
            gameActive = false;
        } else if (!boardState.includes(null)) {
            message.textContent = "It's a Draw!";
            gameActive = false;
        } else {
            isXTurn = !isXTurn;
        }
    }

    function checkWinner() {
        for (let condition of winningConditions) {
            const [a, b, c] = condition;
            if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
                return true;
            }
        }
        return false;
    }

    function resetGame() {
        isXTurn = true;
        gameActive = true;
        boardState = Array(9).fill(null);
        cells.forEach(cell => {
            cell.textContent = '';
            cell.style.color = '#333';
        });
        message.textContent = '';
    }

    cells.forEach(cell => cell.addEventListener('click', handleCellClick));
    resetBtn.addEventListener('click', resetGame);
});
