function phoneNumberUpdate(isIncrease){
    const phoneNumberField = document.getElementById('phone-number') ;
    const phoneNumberString = phoneNumberField.value ;
    const phoneNumber = parseInt(phoneNumberString) ;
    let newPhoneNumber ;
    if(isIncrease === true){
        newPhoneNumber = phoneNumber + 1 ;
    }
    else{
        newPhoneNumber = phoneNumber - 1 ;
        if(newPhoneNumber<0){
            newPhoneNumber = 0 ;
        }
    }
    phoneNumberField.value = newPhoneNumber ;
    return newPhoneNumber ;
}

function updateTotalPhonePrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219 ;
    const phoneTotalField = document.getElementById('phone-total') ;
    phoneTotalField.innerText = phoneTotalPrice ;
}
document.getElementById('phone-plus-btn').addEventListener('click', function(){
    const newPhoneNumber = phoneNumberUpdate(true) ;
    updateTotalPhonePrice(newPhoneNumber);
    calculateSubTotal()
    

})

document.getElementById('phone-minus-btn').addEventListener('click', function(){
    const newPhoneNumber = phoneNumberUpdate(false) ;
    updateTotalPhonePrice(newPhoneNumber) ;
    calculateSubTotal()
})