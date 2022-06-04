const board300 = document.getElementById("board300");
const board28 = document.getElementById("board28");
const btnErase = document.getElementById("buttonErase");
const prediction = document.getElementById("prediction");

const ctx250 = board300.getContext("2d");
const ctx28 = board28.getContext("2d");

let model;

let painting = false;
const border = 20;
let xPrev = 0, yPrev = 0, xCurrent = 0, yCurrent = 0;

const getRealX = (clientX) => clientX - board300.getBoundingClientRect().left;
const getRealY = (clientY) => clientY - board300.getBoundingClientRect().top;

ctx250.fillStyle = "black";
ctx250.fillRect(0, 0, board300.width, board300.height);

const init = async () => {
    model = await tf.loadLayersModel('https://pegadro.github.io/digit-recognition-playground/model.json');
}

const startPosition = (e) => {
    xPrev = xCurrent;
    yPrev = yCurrent;

    xCurrent = getRealX(e.clientX);
    yCurrent = getRealY(e.clientY);

    ctx250.beginPath();
    ctx250.fillStyle = "black";
    ctx250.lineTo(xCurrent, yCurrent);
    ctx250.closePath();

    painting = true;
}

const draw = (e) => {
    if (!painting) return;

    xPrev = xCurrent;
    yPrev = yCurrent;

    xCurrent = getRealX(e.clientX);
    yCurrent = getRealY(e.clientY);

    ctx250.beginPath();
    ctx250.moveTo(xPrev, yPrev);
    ctx250.lineTo(xCurrent, yCurrent);

    ctx250.strokeStyle = "white";
    ctx250.lineWidth = border;
    ctx250.lineCap = "round";
    ctx250.stroke();
    ctx250.closePath();
}

const finishPosition = () => {
    painting = false;
    predict()
}

const predict = () => {
    let matrix = getMatrix();
    let predictions = model.predict(matrix).dataSync();
    prediction.innerText = predictions.indexOf(Math.max(...predictions));
}

const getMatrix = () => {
    ctx28.filter = "blur(0.4px)";
    ctx28.drawImage(ctx250.canvas, 0, 0, board28.width, board28.height);
    const imgData = ctx28.getImageData(0, 0, board28.width, board28.height);

    let imgValues = [];
    for (let i=0; i < imgData.data.length; i += 4) {
        imgValues.push(imgData.data[i] / 255);
    }

    imgValues = tf.reshape(imgValues, [1, 28, 28, 1])

    return imgValues;
}

const erase = () => {
    ctx250.fillStyle = "black";
    ctx250.fillRect(0, 0, board300.width, board300.height);
    prediction.innerText = "";
}

board300.addEventListener("mousedown", startPosition)
board300.addEventListener("mouseup", finishPosition);
board300.addEventListener("mouseout", finishPosition);
board300.addEventListener("mousemove", draw);
btnErase.addEventListener("click", erase);
init();