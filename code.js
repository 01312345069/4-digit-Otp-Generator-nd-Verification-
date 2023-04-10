function getOtp() {
    const Otp = generateOtp();
    const OtpString = Otp + '';
    if (OtpString.length === 4) {
        return Otp;
    }
    else {
        // console.log('3 digit otp not found, Otp');
        return getOtp();
    }
}
function generateOtp() {
    const random = Math.round(Math.random() * 10000);
    return random;
}
document.getElementById('generate-Otp').addEventListener('click', function () {
    const Otp = getOtp();
    // display Otp 
    const displayOtpField = document.getElementById('display-Otp');
    displayOtpField.value = Otp;

})

document.getElementById('calculator').addEventListener('click', function () {
    const number = event.target.innerText;
    if (isNaN(number)) {
        console.log(number);
    } else {
        const typedNumberField = document.getElementById('typed-numbers');
        const previousTypedNumber = typedNumberField.value;
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
})