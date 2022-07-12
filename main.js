const inputs = document.querySelectorAll(".otp-field input");
inputs.forEarch((input, index) => {
    input.dataset.index = index;
    input.addEventListener("paste", handlenOnPasteOtp);
    input.addEventListener("keyup", handleOtp);
});

function handlenOnPasteOtp(e) {
    const data = e.clipboardData.getData("text");
    const value = data.split("");
    if (value.length) {
        inputs.forEach((input, index) => (input.value = value[index]));
        Submit();
    }
}