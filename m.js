function getInputValue(id){
    const inputAmount= document.getElementById(id).value;
    let amount = parseFloat(inputAmount);
    if(inputAmount >0){
        return amount;
    } 
    else{
        return amount = 0;
    }
}


function calculateBalance(income,expenses){
    
    if(income<expenses){
        alert('Expenses is more than income')
    }
    else{
        const updatedBalance = income - expenses;
        let Balacesection = document.getElementById('total-balance');
        Balacesection.innerText = updatedBalance;
        let totalExpenses = document.getElementById("total-expences");
        totalExpenses.innerText = expenses;
    }
}
// total expenses
document.getElementById('Calculate-btn').addEventListener('click',function(){
    const income = getInputValue('income-amount');
    if(income <= 0) {
        alert('Please input valid information')
    } else {
        const foodMoney =getInputValue('food-money');
        const rentMoney =getInputValue('rent-money');
        const clothesMoney =getInputValue('clothes-money');
        const others =getInputValue('others-money');
        let totalExpenses = foodMoney + rentMoney + clothesMoney+others;
    
        calculateBalance(income,totalExpenses);
    }
});
//   saving part
    function savingCalculation(){
        const savingInput = getInputValue('save');
        const income = getInputValue('income-amount');
        let savingAmount = income * savingInput / 100;
        let balaceSection = document.getElementById('total-balance');
        let oldBalance = parseFloat(balaceSection.innerText);

        if(oldBalance>savingAmount){
            let remaining = oldBalance - savingAmount;

            document.getElementById('remaining-balance').innerText = remaining;
            document.getElementById('save-amount').innerText = savingAmount;
        } 
        else {
            alert('Sorry no Balance');
        }

    }

document.getElementById('save-btn').addEventListener('click', function(){

 savingCalculation()
})
