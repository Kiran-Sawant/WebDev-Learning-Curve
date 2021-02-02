// Restart Game button
var reset = document.querySelector('#b')

// Grabbing all table cells
tableCells = document.querySelectorAll('td')

// function to clear all cells
function clear() {
    for (i = 0; i < tableCells.length; i++) {
        tableCells[i].textContent = " "
    }
}

// button event listner
reset.addEventListener('click', clear)

// Adding Symbols
function addSymbol() {
    if (this.textContent == ' ') {
        this.textContent = 'X'
    } else if (this.textContent == 'X') {
        this.textContent = 'O'
    } else {
        this.textContent = ' '
    }
}

// aplying function o every cell
for (i = 0; i < tableCells.length; i++) {
    tableCells[i].addEventListener('click', addSymbol)
}
