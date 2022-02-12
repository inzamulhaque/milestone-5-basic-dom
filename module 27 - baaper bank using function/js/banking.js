function getBalance() {
    const totalBalanceStr = document.getElementById("totalBalance").innerText;
    const totalBalance = parseFloat(totalBalanceStr);
    return totalBalance;
}

function updateBalance(oparationName, amount) {
    const balanceVal = getBalance();

    if (oparationName == "deposit") {
        document.getElementById("totalBalance").innerText = amount + balanceVal;
    }
    if (oparationName == "withdraw") {
        document.getElementById("totalBalance").innerText = balanceVal - amount;
    }
}

function getInputValue(id) {
    const inputValStr = document.getElementById(id).value;
    const inputVal = parseFloat(inputValStr);

    // clear deposit input value
    document.getElementById(id).value = "";
    return inputVal;
}

function updateTotalField(id, inputVal) {
    // debugger;
    const fieldAmountStr = document.getElementById(id).innerText;
    const fieldAmount = parseFloat(fieldAmountStr);

    document.getElementById(id).innerText = inputVal + fieldAmount;
}

function depositMoney() {
    const depositInputVal = getInputValue("depositInput");

    // for invalid input and show alert
    if (isNaN(depositInputVal) || depositInputVal <= 0) {
        document.getElementById("depositInput").value = "";
        return alert("Please enter valid deposit amount");
    }

    // get present deposit amount and update amount
    updateTotalField("depositAmount", depositInputVal);

    // get present balance and update balance amount
    updateBalance("deposit", depositInputVal);
}

function withdrawMenoy() {
    const withdrawInputVal = getInputValue("withdrawInput");

    // for invalid input and show alert
    if (isNaN(withdrawInputVal) || withdrawInputVal <= 0) {
        document.getElementById("withdrawInput").value = "";
        return alert("Please enter valid withdraw amount");
    }

    // get present balance and check balance it's valid or not
    const balance = getBalance();
    if (balance < withdrawInputVal) {
        document.getElementById("withdrawInput").value = "";
        return alert("You Have Not Valid Balance");
    }

    // get and update withdraw amount
    updateTotalField("withdrawAmount", withdrawInputVal);

    // update balance
    updateBalance("withdraw", withdrawInputVal);
}