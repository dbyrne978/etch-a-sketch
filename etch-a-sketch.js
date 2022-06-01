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

let gridSetup = (gridSize) => {
    createBoxes(gridSize);
    addSketchability();
};

gridSetup(16);