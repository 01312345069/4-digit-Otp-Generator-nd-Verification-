function getOtp() {
    const pin = generateOtp();
    const OtpString = Otp + '';
    if (OtpString.length === 4) {
        return pin;
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

})