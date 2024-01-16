const convertBtn = document.getElementById("convert-btn");
const inputNum = document.getElementById("input-number");
const result = document.getElementById("output");

const romanNumeralConverter = (number) => {
    number = parseInt(inputNum.value);
    if (isNaN(number)) {
        alert("Please enter a valid number");
    } else if ( !number || number <= 0) {
        alert("Please enter a number greater than or equal to 1");
    }
}
convertBtn.addEventListener("click", romanNumeralConverter);