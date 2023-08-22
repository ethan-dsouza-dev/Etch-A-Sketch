const grid = document.querySelector('.grid');


function createDivs() {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            let newSquare = document.createElement('div');
            newSquare.className = 'square';
            grid.appendChild(newSquare);
        }
    }
}

createDivs();

const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.classList.add('touched-square');
    });
});