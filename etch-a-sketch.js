function generateSketch(containerNode, noPerSides, cellLength) {
    for (let row = 1; row <= noPerSides; row++) {
        const rowContainer = document.createElement('div');
        rowContainer.classList.add('row');
        rowContainer.style.display = 'flex';
        containerNode.appendChild(rowContainer);
    
        for (let col = 1; col <= noPerSides; col++) {
            let cell = document.createElement('div');
            cell.style.cssText = `border: 1px solid rgb(0, 0, 0, 0.1); height: ${cellLength}px; width: ${cellLength}px;`;
            rowContainer.appendChild(cell);
        }
    }
}

const container = document.querySelector('#container');
let cellsPerSide = 16;          // rows = cols = 16
let length = 480;               // in pixels
let cellLength = length / cellsPerSide;

generateSketch(container, cellsPerSide, cellLength);
