/*
    1.Add Event Listener to the deposit button
    2. Get deposit from the deposit input field
    2-5.Convert String Deposit to a number type

    3.clear the deposit input field after getting the value

    4.Get the previous deposit total

    5.Calculate new deposit total and set the value to the deposit total

    6.Get current balance

    7.Calculate new balance and set it to the new balance element.
*/

// step-1
document.getElementById("btn-deposit").addEventListener("click", function(){
    // step-2
    const depositField = document.getElementById("deposit-field");
    const newDepositInputString = depositField.value;
    // console.log(newDepositInputString);
    const newDepositAmount = parseFloat(newDepositInputString);
    // step-3
    depositField.value = '';
    // step-4
    const depositTotalElement = document.getElementById("deposit-total");
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // step-5
    const newDepositTotal = newDepositAmount + previousDepositTotal;
    depositTotalElement.innerText = newDepositTotal;
    // step-6
    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);
    // step-7
    const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;
})

