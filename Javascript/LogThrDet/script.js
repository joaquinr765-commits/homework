// LOGIN THREAT DETECTOR
// Goal: Decide if a login attempt is safe, suspicious, or should be locked.
// Decision rules must use ONLY: variables, data types, operators, conditionals.
// DOM + event listeners are allowed for UI interaction.


const failedAttemptsInput = document.getElementById("failedAttempts");
const unusualLocationSelect = document.getElementById("unusualLocation");
const recognizedDeviceSelect = document.getElementById("recognizedDevice");
const scanBtn = document.getElementById("scanBtn");
const message = document.getElementById("message");

scanBtn.addEventListener("click", function () {

    if (failedAttemptsInput.value === "") {
        message.textContent = "Please enter a number";
        message.className = "message warn";
        return;
    }
    const failedAttempts = Number(failedAttemptsInput.value);
    // console.log(failedAttempts); TEST NUMBER IN CONSOLE
    const unusualLocation = unusualLocationSelect.value === "true";
    // console.log(unusualLocation);  TEST BOOLEAN IN CONSOLE
    const recognizedDevice = recognizedDeviceSelect.value === "true";
    // console.log(recognizedDevice); TEST BOOLEAN IN CONSOLE

    if (failedAttempts >= 5) {
        message.textContent = "ACCOUNT LOCKED";
        message.className = "message danger";
    } else if (unusualLocation === true && recognizedDevice === false) {
        message.textContent = "SUSPICIOUS";
        message.className = "message warn";
    } else if (failedAttempts >= 3 && unusualLocation === true) {
        message.textContent = "SUSPICIOUS";
        message.className = "message warn";
    } else {
        message.textContent = "LOGIN APPROVED";
        message.className = "message safe";
    }
});


