let container = document.querySelector('.container')

for(let i = 1; i < 16; i++) {
    let row = document.createElement('div')
    row.classList.add('row')
    container.appendChild(row)
    
    for(let j = 1; j <= 16; j++) {
        let square = document.createElement('div')
        square.classList.add('square')
        row.appendChild(square)

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black'
        })
    }

}