// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range (vedi immagine allegata):
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49


const setBtn = document.getElementById('set');
const wrapGrid = document.querySelector('.wrap-grid');
const dimensionLevel = document.getElementById('dimensioni');

// set griglia
setBtn.addEventListener('click', () => {
    // console.log('click');

    // reset del title
    wrapGrid.innerHTML = '';

    // settare la griglia
    const griDimension = dimensionLevel.value;
    console.log(griDimension);
    let cellsNumber;
    let cellsSide;
    
    switch (griDimension) {
        case '1':
            cellsNumber = 49;
            cellsSide = 7;
            break;
        case '2':
            cellsNumber = 81;
            cellsSide = 9;
            break;
        case '3':
            cellsNumber = 100;
            cellsSide = 10;
            break;
    }
    console.log(cellsNumber);
    console.log(cellsSide);

    // generazione grid
    const grid = document.createElement ('div');
    grid.classList.add('grid');

   
    // generazione caselle
    for (let i = 0; i <= cellsNumber; i++) {
        // gen square
        const square = genSquare(cellsSide);
        grid.append(square);
    }

    // inserimento nel HTML
    wrapGrid.append(grid);
})




// funzioni

function genSquare (cells) {
    const node = document.createElement('div');
    node.classList.add('square');
    node.style.width = `calc(100% / ${cells})`;
    node.style.height = `calc(100% / ${cells})`;

    return node;
}