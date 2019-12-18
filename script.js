let i = 0;
let j = 0;
let state = 0;
let squares = 16;

let gridDiv = document.createElement('div');
gridDiv.setAttribute("id", "grid");
function drawGrid() {
    document.getElementById("containerGrid").appendChild(gridDiv);


    for (i = 0; i < squares; i++) {
        for (j = 0; j < squares; j++) {
            let cell = document.createElement("div");
            cell.addEventListener("mouseover", changeColor);
            gridDiv.appendChild(cell).className = "gridBox";

        }
    }
}

drawGrid();
function changeColor(e) {
    if (state == 0) {
        this.style.backgroundColor = "hsla(0, 0%, 0%, 1)";
    }
    if (state == 1) {
        this.style.backgroundColor = "hsla(" + Math.floor(Math.random() * 360) + ", 64%, 43%, 1)";
        this.style.filter="";
    }
    else {
        let currentFilter = this.style.filter;
        if (currentFilter == "") {
            this.style.filter = "brightness(90%)";
        }
        if (currentFilter == "brightness(90%)") {
            this.style.filter = "brightness(80%)";
        }
        if (currentFilter == "brightness(80%)") {
            this.style.filter = "brightness(70%)";
        }
        if (currentFilter == "brightness(70%)") {
            this.style.filter = "brightness(60%)";
        }
        if (currentFilter == "brightness(60%)") {
            this.style.filter = "brightness(50%)";
        }
        if (currentFilter == "brightness(50%)") {
            this.style.filter = "brightness(40%)";
        }
        if (currentFilter == "brightness(40%)") {
            this.style.filter = "brightness(30%)";
        }
        if (currentFilter == "brightness(30%)") {
            this.style.filter = "brightness(20%)";
        }
        if (currentFilter == "brightness(20%)") {
            this.style.filter = "brightness(10%)";
        }
        if (currentFilter == "brightness(10%)") {
            this.style.filter = "brightness(0%)";
        }

    }
}
function changeSquares() {
    squares = prompt("write a number and i will grid this square again");

    if (squares !== null && Number(squares) >= 0) {
        document.getElementById("grid").innerHTML = ""
        document.getElementById("grid").style.gridTemplateColumns = "repeat(" + squares + ", 1fr)";
        document.getElementById("grid").style.gridTemplateRows = "repeat(" + squares + ", 1fr)";
        drawGrid();
    }
    else {
        alert("Please only enter numbers higher or equal than 0")
    }

}
function clearGrid() {
    document.getElementById("grid").innerHTML = ""
    document.getElementById("grid").style.gridTemplateColumns = "repeat(" + squares + ", 1fr)";
    document.getElementById("grid").style.gridTemplateRows = "repeat(" + squares + ", 1fr)";
    drawGrid();
}