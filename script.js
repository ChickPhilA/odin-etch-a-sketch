let container = document.querySelector('.container')

for(let i = 0; i < 64; i++) {
    let row = document.createElement('div')
    row.classList.add('row')
    container.appendChild(row)
    
    for(let j = 1; j <= 64; j++) {
        let square = document.createElement('div')
        square.classList.add('square')
        row.appendChild(square)

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black'
        })
    }

}