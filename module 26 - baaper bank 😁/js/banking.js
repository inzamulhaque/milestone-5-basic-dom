document.getElementById("dipositBtn").addEventListener("click", () => {
    const dipositValueString = document.getElementById("dipositInput").value;
    const dipositValue = parseFloat(dipositValueString);
    if (dipositValue <= 0) {
        return alert("please deposit valid amount");
    }
    const dipositAmonutString = document.getElementById("dipositAmount").innerText;
    const dipositAmount = parseFloat(dipositAmonutString);

    const totalDiposit = dipositAmount + dipositValue;

    document.getElementById("dipositAmount").innerText = totalDiposit;

    document.getElementById("dipositInput").value = "";

    // total balance
    const getTotalAmountString = document.getElementById("totalBalance").innerText;
    const getTotalAmount = parseFloat(getTotalAmountString);
    document.getElementById("totalBalance").innerText = getTotalAmount + dipositValue;
});

// withdraw
document.getElementById("withdrawBtn").addEventListener("click", () => {
    const withdrawInputValueString = document.getElementById("withdrawInput").value
    const withdrawInputValue = parseFloat(withdrawInputValueString);
    if (withdrawInputValue <= 0) {
        return alert("please deposit valid amount");
    }

    const withdrawAmountString = document.getElementById("withdrawAmount").innerText;
    const withdrawAmount = parseFloat(withdrawAmountString);

    const getTotalAmountString = document.getElementById("totalBalance").innerText;
    const getTotalAmount = parseFloat(getTotalAmountString);

    if (getTotalAmount == 0 || getTotalAmount < withdrawInputValue) {
        return alert("you have not valid balance")
    }

    document.getElementById("withdrawAmount").innerText = withdrawAmount + withdrawInputValue;

    document.getElementById("totalBalance").innerText = getTotalAmount - withdrawInputValue;

    document.getElementById("withdrawInput").value = "";
});