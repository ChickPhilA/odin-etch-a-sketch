let container = document.querySelector('.container')
let sizeButton = document.querySelector('#sizeButton')
let clearButton = document.querySelector('#clearButton')
let num = 16;


for(let i = 1; i <= 16; i++) {
    let row = document.createElement('div')
    row.classList.add('row')
    container.appendChild(row)
    
    for(let j = 1; j <= 16; j++) {
        let square = document.createElement('div')
        square.classList.add('square')
        row.appendChild(square)

        // in every square, add an event listener for mouseover that changes the background color to black
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black'
        })
    }
}

function resizeGrid(num) {
    num = prompt("Enter new grid size (max 100): ")
    if(num < 1 || num > 100) {
        alert("Invalid input. Please enter a number between 1 and 100.")
        return
    }

    container.remove()
    container = document.createElement('div')
    container.classList.add('container')
    document.body.appendChild(container)

    for(let i = 1; i <= num; i++) {
        let row = document.createElement('div')
        row.classList.add('row')
        container.appendChild(row)
        
        for(let j = 1; j <= num; j++) {
            let square = document.createElement('div')
            square.classList.add('square')
            row.appendChild(square)

            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = 'black'
            })
        }
    }
}

function cleanGrid() {
    let squares = document.querySelectorAll('.square')
    squares.forEach((square) => {
        square.style.backgroundColor = 'white'
    })
}

sizeButton.addEventListener('click', () => resizeGrid(num))
clearButton.addEventListener('click', () => cleanGrid())