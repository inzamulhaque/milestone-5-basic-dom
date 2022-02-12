const buttons = document.getElementById("buttons");
const li = buttons.querySelectorAll("li");
const result = document.getElementById("result");

for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("click", (event) => {
        if (event.target.innerText == "=") {

            const calcVal = eval(result.innerText);
            result.innerText = parseFloat(calcVal.toFixed(3));

        } else if (event.target.innerText == "C") {

            result.innerText = "";

        } else if (result.innerText.length == 9) {

            alert("At a time calculate just 9 number");

        } else {

            result.innerText += event.target.innerText;

        }
    });
}