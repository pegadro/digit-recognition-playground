import Croppie from "croppie";

const board300 = document.getElementById("board300");
const board28 = document.getElementById("board28");

const btnErase = document.getElementById("buttonErase");
const btnImage = document.getElementById("buttonImage");
const imageInput = document.getElementById("imageInput");

const modalCrop = document.getElementById("modalCrop");
const cancelBtnModal = document.getElementById("cancelBtnModal");
const continueBtnModal = document.getElementById("continueBtnModal");

const prediction = document.getElementById("prediction");

const ctx300 = board300.getContext("2d");
const ctx28 = board28.getContext("2d");

let model;

let painting = false;
const border = 30;
let xPrev = 0, yPrev = 0, xCurrent = 0, yCurrent = 0;

const getRealX = (clientX) => clientX - board300.getBoundingClientRect().left;
const getRealY = (clientY) => clientY - board300.getBoundingClientRect().top;

ctx300.fillStyle = "black";
ctx300.fillRect(0, 0, board300.width, board300.height);

const init = async () => {
    model = await tf.loadLayersModel('https://pegadro.github.io/digit-recognition-playground/model.json');
}

const startPosition = (e) => {
    xPrev = xCurrent;
    yPrev = yCurrent;

    xCurrent = getRealX(e.clientX);
    yCurrent = getRealY(e.clientY);

    ctx300.beginPath();
    ctx300.fillStyle = "black";
    ctx300.lineTo(xCurrent, yCurrent);
    ctx300.closePath();

    painting = true;
}

const draw = (e) => {
    if (!painting) return;

    xPrev = xCurrent;
    yPrev = yCurrent;

    xCurrent = getRealX(e.clientX);
    yCurrent = getRealY(e.clientY);

    ctx300.beginPath();
    ctx300.moveTo(xPrev, yPrev);
    ctx300.lineTo(xCurrent, yCurrent);

    ctx300.strokeStyle = "white";
    ctx300.lineWidth = border;
    ctx300.lineCap = "round";
    ctx300.stroke();
    ctx300.closePath();
}

const finishPosition = () => {
    painting = false;
    predict()
}

const predict = () => {
    let matrix = getMatrix();
    let predictions = model.predict(matrix).dataSync();
    for (let i = 0; i < predictions.length; i++) {
        let predictionTD = document.getElementById(`prediction${i}`);
        predictionTD.innerText = Number(+predictions[i]).toFixed(3);
    }
    prediction.innerText = predictions.indexOf(Math.max(...predictions));
}

const applyThreshold = (values) => {
    let imgValues = new Array(values.length).fill(null);
    for (let i=0; i<values.length; i++) {
        if (values[i] < 0.25) {
            imgValues[i] = 0;
        } else {
            imgValues[i] = values[i];
        }
    }
    return imgValues;
}

const getMatrix = () => {
    ctx28.filter = "blur(0.470px)";
    ctx28.drawImage(ctx300.canvas, 0, 0, board28.width, board28.height);
    const imgData = ctx28.getImageData(0, 0, board28.width, board28.height);

    let imgValues = [];
    for (let i = 0; i < imgData.data.length; i += 4) {
        imgValues.push(imgData.data[i] / 255);
    }

    console.log(imgValues);
    imgValues = applyThreshold(imgValues);
    console.log(imgValues);
    imgValues = tf.reshape(imgValues, [1, 28, 28, 1])

    return imgValues;
}

const erase = () => {
    ctx300.fillStyle = "black";
    ctx300.fillRect(0, 0, board300.width, board300.height);
    prediction.innerText = "-";
}

const uploadImage = () => {
    imageInput.click();
}

const getImage = (e) => {

    const f = e.target.files[0];
    const url = window.URL || window.webkitURL;
    const src = url.createObjectURL(f);

    modalCrop.style.display = "block";
    
    const croppie = new Croppie(document.querySelector(".crop"), {
        viewport: { width: 200, height: 200 },
        boundary: { width: 300, height: 300 },
        showZoomer: true,
    });

    croppie.bind({url: src})

    continueBtnModal.addEventListener("click", () => {
        url.revokeObjectURL(src);
        croppie.result('blob')
            .then(blob => {
                const img = new Image(), src = url.createObjectURL(blob);
                img.src = src;
                img.onload = () => {
                    ctx300.filter = "invert(100%)";
                    ctx300.drawImage(img,0,0,300,300);
                    predict();
                    ctx300.filter = "invert(0)";
                    url.revokeObjectURL(src);

                    croppie.destroy();
                }
            });
        closeModalCrop();
    })

}

const closeModalCrop = () => {
    modalCrop.style.display = "none";
}

board300.addEventListener("mousedown", startPosition)
board300.addEventListener("mouseup", finishPosition);
board300.addEventListener("mouseout", finishPosition);
board300.addEventListener("mousemove", draw);

btnErase.addEventListener("click", erase);
btnImage.addEventListener("click", uploadImage);
imageInput.addEventListener("change", getImage);

cancelBtnModal.addEventListener("click", closeModalCrop);

init();