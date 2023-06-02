/*
    1.Add Event Listener to the withdraw button
    2. Get withdraw from the withdraw input field
    2-5.Convert String withdraw to a number type

    3.clear the withdraw input field after getting the value

    4.Get the previous withdraw total

    5.Calculate new withdraw total and set the value to the withdraw total

    6.Get current balance

    7.Calculate new balance and set it to the new balance element.
*/
// step-1
document.getElementById("btn-withdraw").addEventListener("click", function(){
    // step-2
    const withdrawField = document.getElementById("withdraw-field");
    const newWithdrawString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawString);
    // step-3
    newWithdrawAmount.value = '';
    // step-4
    const withdrawTotalElement = document.getElementById("withdraw-total");
    const previousWithdrawString = withdrawTotalElement.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawString);
    // step-5
    const newWithdrawTotal = newWithdrawAmount + previousWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;
    // step-6
    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceString = balanceTotalElement.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceString);
    // step-7
    const newBalanceTotal = previousBalanceAmount - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    
})