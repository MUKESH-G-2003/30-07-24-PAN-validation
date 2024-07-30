

function Validate() {
    const panNo = document.getElementById("panNo").value;
    //regex.test(panCardNo) == true
    const isValid = /^[A-Z]{5}[0-9]{4}[A-Z]{1}/;
    const Valid = isValid.test(panNo);
    if (Valid) {
        alert("Input is Submitted Successfully");
        return true;
    }
    else {
        alert("invalid PAN ID please try again!!!");
        return false;
    }
}