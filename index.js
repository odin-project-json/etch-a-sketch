// default box value
let defValue = 16;
let row;
let column;

const button = document.createElement('button');


button.addEventListener('click', () => {
    let input = prompt("How many boxes? ie. 4 x 4");
    if(input > 100) {
        prompt("Box size must be less than 100 x 100. Enter again");
    }
    defValue = input;
    document.body.textContent = "";
    action(defValue);
});


function action(defValue) {
    button.textContent = "Create Box";
    document.body.appendChild(button);

    for(let i = 0; i < defValue; i++) {
        row = document.body.appendChild(document.createElement('div'));
        row.style.display = "flex";
        for(let j = 0; j < defValue; j++) {
            column = document.createElement('div');
            column.setAttribute("class", "box");
            column.style.border = "1px solid black";
            column.style.width = "300px";
            column.style.height = "50px";
            row.appendChild(column);
        }
    }

    hover();
}

action(defValue);

function hover() {
    const hover = document.querySelectorAll(".box");

    hover.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = "pink";
        })
    })
}





