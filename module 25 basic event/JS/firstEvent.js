const bgBlack = () => {
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#fff";
}

function bgNrml() {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
}

const redBtn = document.getElementById("makeRedBtn");
redBtn.onclick = makeRed;

function makeRed() {
    document.body.style.backgroundColor = "red";
    document.body.style.color = "#000";
}

const mekeGreenBtn = document.getElementById("mekeGreenBtn");
mekeGreenBtn.onclick = function () {
    document.body.style.backgroundColor = "green";
    document.body.style.color = "#fff";
}


const mekeGoldenRodBtn = document.getElementById("mekeGoldenRodBtn");
mekeGoldenRodBtn.addEventListener("click", makeGoldenRodBg);

function makeGoldenRodBg() {
    document.body.style.backgroundColor = "goldenRod";
    document.body.style.color = "#fff";
}

const mekeGrayBtn = document.getElementById("mekeGrayBtn");
mekeGrayBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = "gray";
    document.body.style.color = "#fff";
});