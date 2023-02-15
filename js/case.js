function caseNumberUpdate(isIncrease){
    const caseNumberField = document.getElementById('case-number') ;
    const caseNumberString = caseNumberField.value ;
    const caseNumber = parseInt(caseNumberString) ;
    let newCaseNumber ;
    if (isIncrease === true){
        newCaseNumber = caseNumber + 1 ;
    }
    else{
        newCaseNumber = caseNumber -1 ;
        if(newCaseNumber<0){
            newCaseNumber = 0 ;
        }
    }
    caseNumberField.value = newCaseNumber ; 
    return newCaseNumber ;
}

function updateTotalCasePrice(newCaseNumber){
    const caseTotal = newCaseNumber * 59 ;
   const caseTotalElement = document.getElementById('case-total') ;
   caseTotalElement.innerText = caseTotal ;
}

document.getElementById('case-plus-btn').addEventListener('click', function(){
    const newCaseNumber = caseNumberUpdate(true);
    updateTotalCasePrice(newCaseNumber) ; 
    calculateSubTotal()

})
document.getElementById('case-minus-btn').addEventListener('click', function(){
   const newCaseNumber =  caseNumberUpdate(false) ;
   updateTotalCasePrice(newCaseNumber) ;
   calculateSubTotal()

   
})