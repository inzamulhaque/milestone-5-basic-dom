const button = document.getElementById("button-id");

button.addEventListener("click", function () {
    const inputValueString = document.getElementById("input-id").value;
    const inputValue = parseInt(inputValueString);

    if (inputValue == 5) {
        button.setAttribute("disable", true);
    }
});