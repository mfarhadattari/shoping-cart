function getElementValueById(elementId){
    const element = document.getElementById(elementId) ;
    const elementValueString = element.innerText ;
    const elementValue = parseInt(elementValueString) ;
    return elementValue ;
}
function setElementValueById(elementId, value){
    const element = document.getElementById(elementId) ;
    element.innerText = value ;
}
function calculateSubTotal(){
    const phoneTotalPrice = getElementValueById('phone-total') ;
    const caseTotalPrice = getElementValueById('case-total') ;
    const subTotal = phoneTotalPrice + caseTotalPrice ;
    setElementValueById('sub-total', subTotal);

    const taxAmountString = (subTotal * 0.1).toFixed(2) ;
    const taxAmount = parseFloat(taxAmountString) ;
    setElementValueById('tax-amount', taxAmount) ;

    const totalCost = subTotal + taxAmount ;
    setElementValueById('total-cost',totalCost)
}

