//global variables
let arraySize = 0;;
let lifeOrganisms = [];
let resolution = 10;
let ctx = {};

//function that starts the game
document.onreadystatechange = function () {
    if (document.readyState == "complete") {

        //setup canvas
        let canvas = document.getElementById('game');
        ctx = canvas.getContext('2d');
        ctx.canvas.width = 900;
        ctx.canvas.height = 900;

        //setup organisms count
        arraySize = ctx.canvas.width / resolution;

        //create organisms
        lifeOrganisms = createInitialOrganisms(arraySize);

        //run
        setInterval(() => {
            draw();
        }, 30);
    }
}

function draw() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    for (let i = 0; i < arraySize; i++) {
        for (let j = 0; j < arraySize; j++) {
            let x = i * resolution;
            let y = j * resolution;
            if (lifeOrganisms[i][j] == 1) {
                fillRect(x, y, resolution, "white");
            } else {
                fillRect(x, y, resolution, "black");
            }
        }
    }

    let next = create2DArray(arraySize);
    for (let i = 0; i < arraySize; i++) {
        for (let j = 0; j < arraySize; j++) {

            let neighbors = countNeighbors(lifeOrganisms, i, j);
            let state = lifeOrganisms[i][j];
            if(state == undefined){
                state == 0;
            }

            if (state == 0 && neighbors == 3) {
                next[i][j] = 1;
            } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
                next[i][j] = 0;
            } else {
                next[i][j] = state;
            }

        }
    }

    lifeOrganisms = next;
}


function countNeighbors(grid, x, y) {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            let col = (x + i + arraySize) % arraySize;
            let row = (y + j + arraySize) % arraySize;

            sum += grid[col][row];
        }
    }
    sum -= grid[x][y];
    return sum;
}

function fillRect(x, y, res, color) {
    ctx.beginPath();
    ctx.rect(x, y, res, res);
    ctx.fillStyle = color;
    ctx.fill();
}

//create the initial 2D array with the organisms and fill with 0 or 1
function createInitialOrganisms(size) {
    var array = create2DArray(size);
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {

            array[i][j] = Math.round(Math.random());
        }
    }
    return array;
}

function create2DArray(size) {
    var array = new Array(size);
    for (let i = 0; i < size; i++) {
        array[i] = new Array(size);
    }
    return array;
}