function changeBackgroundColor(e) {
    const r = Math.floor(Math.random() * 256); // 0 to 255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function increaseOpacity(e) {
    const currentOpacity = e.target.style.opacity;
    
    if (!currentOpacity) {
        e.target.style.opacity = 0.1;
    }
    else {
        e.target.style.opacity = Math.min(parseFloat(currentOpacity) + 0.1, 1);
    }
}

function generateSketch(containerNode, noPerSides, cellLength) {
    for (let row = 1; row <= noPerSides; row++) {
        const rowContainer = document.createElement('div');
        rowContainer.classList.add('row');
        rowContainer.style.display = 'flex';
        containerNode.appendChild(rowContainer);
    
        for (let col = 1; col <= noPerSides; col++) {
            let cell = document.createElement('div');
            cell.style.cssText = `border: 1px solid rgb(0, 0, 0, 0.1); height: ${cellLength}px; width: ${cellLength}px;`;
            cell.addEventListener('mouseenter', changeBackgroundColor);
            cell.addEventListener('mouseenter', increaseOpacity);
            rowContainer.appendChild(cell);
        }
    }
}

const container = document.querySelector('#container');
const btn = document.querySelector('button');
const errorSpan = document.querySelector('span');
let cellsPerSide = 16;          // rows = cols = 16
let length = 480;               // in pixels
let cellLength = length / cellsPerSide;

// by default, generates a 16x16 grid
generateSketch(container, cellsPerSide, cellLength);

btn.addEventListener('click', () => {
    let userInput = prompt("Enter the number of squares per side (min 1, max 100):", '16');

    // cancelled prompt or empty string
    if (!userInput) return;

    userInput = parseInt(userInput)

    if (isNaN(userInput)) {
        errorSpan.textContent = 'Error: non-numeric value was entered, try again.';
    } 
    else if (userInput > 100  || userInput <= 0) {
        errorSpan.textContent = 'Error: value given was not within the range: [1, 100].';
    }
    else {
        errorSpan.textContent = '';
        cellsPerSide = userInput;
        cellLength = length / cellsPerSide;

        // delete grid
        rowNodeList = document.querySelectorAll('.row');
        rowNodeList.forEach((row) => container.removeChild(row));

        // generate new grid
        generateSketch(container, cellsPerSide, cellLength);
    }

})