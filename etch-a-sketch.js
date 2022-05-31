// get number of rows/columns
let rows = 16;
let columns = 16;
let numOfBoxes = rows * columns;

// create boxes
const container = document.querySelector("#container");
for (let i = 0; i < numOfBoxes; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.style.flexGrow = "1";
    box.style.flexShrink = "1";
    box.style.flexBasis = `calc(100% / ${columns})`;
    container.appendChild(box);
};