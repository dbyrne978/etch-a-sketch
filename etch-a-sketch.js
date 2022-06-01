// get number of rows/columns
let rows = 100;
let columns = 100;
let numOfBoxes = rows * columns;

// create boxes
const container = document.querySelector("#container");
for (let i = 0; i < numOfBoxes; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.style.flexGrow = "1";
    box.style.flexShrink = "1";
    box.style.flexBasis = `calc(100% / ${columns})`;
    box.classList.add(`column-${i % columns + 1}`);
    box.classList.add(`row-${Math.floor(i / columns) + 1}`);
    container.appendChild(box);
};

let boxList = document.querySelectorAll(".box");
boxList.forEach((box) => {
    box.addEventListener("mouseenter", e => {
        e.target.style.backgroundColor = "black";
    });
});