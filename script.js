let container = document.querySelector('.container')

/* 
 This will be the code for creating a nxn grid of squares.
*/

// let size = prompt("Enter the number of squares per side for the grid (max 100): ")

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