const convertBtn = document.getElementById("convert-btn");
const inputNum = document.getElementById("input-number");
const result = document.getElementById("output");

const romanNumeralConverter = (number) => {
    resultClean();
    number = parseInt(inputNum.value);
    if (isNaN(number)) {
        resultDisplay("Please enter a valid number");
    } else if ( !number || number <= 0) {
        resultDisplay("Please enter a number greater than or equal to 1");
    } else if (number > 3999) {
        resultDisplay("Please enter a number less than or equal to 3999");
    }
}

const resultDisplay = (text) => {
    result.classList.remove("hidden");
    result.innerHTML = `<p>${text}</p>`
}

const resultClean = () => {
    result.classList.add("hidden");
    result.innerHTML = "";
}

convertBtn.addEventListener("click", romanNumeralConverter);