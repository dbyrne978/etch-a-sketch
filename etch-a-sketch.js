let createBoxes = (gridSize) => {
    const container = document.querySelector("#container");
    let numOfBoxes = gridSize * gridSize
    for (let i = 0; i < numOfBoxes; i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        box.style.flexGrow = "1";
        box.style.flexShrink = "1";
        box.style.flexBasis = `calc(100% / ${gridSize})`;
        box.classList.add(`column-${i % gridSize + 1}`);
        box.classList.add(`row-${Math.floor(i / gridSize) + 1}`);
        container.appendChild(box);
    };
};

let addSketchability = () => {
    let boxList = document.querySelectorAll(".box");
    boxList.forEach((box) => {
        box.addEventListener("mouseenter", e => {
            e.target.style.backgroundColor = "black";
        });
    });
};

let setupGrid = (gridSize) => {
    createBoxes(gridSize);
    addSketchability();
};

const newGridButton = document.querySelector("#new-grid");
newGridButton.addEventListener('click', () => {
    let n = 0;
    while(!(Number.isInteger(+n)) || n < 2 || n > 100) {
        n = prompt("Enter N, where N is an integer and 1<N<101 " +
                "to create a new NxN grid:");
        if (n === null) return;
    };
    deleteGrid();
    setupGrid(n);
});

let deleteGrid = () => {
    const container = document.querySelector("#container");
    let boxList = document.querySelectorAll(".box");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };
};

setupGrid(16);