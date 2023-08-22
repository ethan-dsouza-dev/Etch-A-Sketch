function createSquares(dimension = 16) {
    let grid = document.getElementById('grid');
    grid.style.width = `${dimension * 20}px`;
    for (let i = 0; i < dimension; i++) {
        for (let j = 0; j < dimension; j++) {
            let newSquare = document.createElement('div');
            newSquare.className = 'square';
            grid.appendChild(newSquare);
        }
    }
}

function enableDrawing() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.classList.add('touched-square');
    });
});
}

function changeDimensions() {
    let grid = document.getElementById('grid');
    let newDimensions = prompt('How many squares per side do you want:');
    if (newDimensions <= 100) {
        grid.innerHTML = '';
        grid.style.width = `${newDimensions * 20}px`;
        createSquares(newDimensions);
        enableDrawing();
    }
    
}

createSquares();

enableDrawing()