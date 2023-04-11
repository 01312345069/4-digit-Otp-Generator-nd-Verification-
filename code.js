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

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typedNumberField.value = '';
        }
        else if (number === '<') {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else {
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
})
document.getElementById('verify-otp').addEventListener('click', function () {
    const displayOtpField = document.getElementById('display-Otp');
    const currentOtp = displayOtpField.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;

    const otpSuccessMessage = document.getElementById('otp-success');
    const otpUnSuccessMessage = document.getElementById('otp-unsuccess');

    if (typedNumber === currentOtp) {

        otpSuccessMessage.style.display = 'block';
        otpUnSuccessMessage.style.display = 'none';
    }
    else {

        otpUnSuccessMessage.style.display = 'block';
        otpSuccessMessage.style.display = 'none';

    }
})