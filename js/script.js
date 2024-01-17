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
    } else {
        resultDisplay(`${thousandsDigits(number) + hundredsDigits(number % 1000) + tensDigits((number % 1000) % 100) + singleDigits(((number % 1000) % 100) % 10)}`)
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

// get the number of thousands. Since the number inputed is not greater than 3999, so , we don't need to consider about the "4" case.
const thousandsDigits = (number) => {
    let thousandValue = "";
    for (let i = 0; i < Math.floor(number / 1000); i++) {
        thousandValue += "M"
    }
    console.log("Thousand Value is", thousandValue);
    return thousandValue;
    
}

// get the number of hundreds. input the reminder of the original number decided by 1000.
const hundredsDigits = (reminderOfThousand) => {
    const hundredNum = Math.floor(reminderOfThousand / 100);
    let hundredValue = "";
    switch (hundredNum) {
        case 9:
            hundredValue = "CM";
            break;
        case 8:
            hundredValue ="DCCC";
            break;
        case 7:
            hundredValue ="DCC";
            break;
        case 6:
            hundredValue ="DC";
            break;
        case 5:
            hundredValue ="D";
            break;
        case 4:
            hundredValue ="CD";
            break;
        case 3:
            hundredValue ="CCC";
            break;
        case 2:
            hundredValue ="CC";
            break;
        case 1:
            hundredValue ="C";
            break;
        default:
            hundredValue ="";
    }
    // if (hundredNum === 9) {
    //     hundredValue = "CM"
    // } else if (5 < hundredNum < 9) {
    //     for (let i = 0; i < hundredNum - 5; i++) {
    //         hundredValue += "C";
    //     }
    //     hundredValue = "D" + hundredValue;
    // } else if (hundredNum === 5) {
    //     hundredValue = "D";
    // } else if (hundredNum === 4) {
    //     hundredValue = "CD";
    // } else {
    //     for (let i = 0; i < hundredNum; i++) {
    //         hundredValue += "C";
    //     }
    // }
    console.log("Hundred numember is", hundredNum);
    console.log("Hundred Value is", hundredValue);
    return hundredValue;
    
}

// get the number of tens. input the reminder of the original number decided by 100.
const tensDigits = (reminderOfHundred) => {
    const tensNum = Math.floor(reminderOfHundred / 10);
    let tensValue = "";
    switch (tensNum) {
        case 9:
            tensValue = "XC";
            break;
        case 8:
            tensValue ="LXXX";
            break;
        case 7:
            tensValue ="LXX";
            break;
        case 6:
            tensValue ="LX";
            break;
        case 5:
            tensValue ="L";
            break;
        case 4:
            tensValue ="XL";
            break;
        case 3:
            tensValue ="XXX";
            break;
        case 2:
            tensValue ="XX";
            break;
        case 1:
            tensValue ="X";
            break;
        default:
            tensValue ="";
    }
    // if (tensNum === 9) {
    //     tensValue = "XC"
    // } else if (5 < tensNum < 9) {
    //     for (let i = 0; i < tensNum - 5; i++) {
    //         tensValue += "X";
    //     }
    //     tensValue = "L" + tensValue;
    // } else if (tensNum === 5) {
    //     tensValue = "L";
    // } else if (tensNum === 4) {
    //     tensValue = "XL";
    // } else {
    //     for (let i = 0; i < tensNum; i++) {
    //         tensValue += "X";
    //     }
    // }
    console.log("Tens Value is", tensValue);
    return tensValue;
    
}

// get the number of singles. input the reminder of the original number decided by 10.
const singleDigits = (reminderOfTens) => {
    const singleNum = Math.floor(reminderOfTens / 1);
    let singleValue = "";
    switch (singleNum) {
        case 9:
            singleValue = "IX";
            break;
        case 8:
            singleValue ="VIII";
            break;
        case 7:
            singleValue ="VII";
            break;
        case 6:
            singleValue ="VI";
            break;
        case 5:
            singleValue ="V";
            break;
        case 4:
            singleValue ="IV";
            break;
        case 3:
            singleValue ="III";
            break;
        case 2:
            singleValue ="II";
            break;
        case 1:
            singleValue ="I";
            break;
        default:
            singleValue ="";
    }
    // if (singleNum === 9) {
    //     singleValue = "IX"
    // } else if (5 < singleNum < 9) {
    //     for (let i = 0; i < singleNum - 5; i++) {
    //         singleValue += "I";
    //     }
    //     singleValue = "V" + singleValue;
    // } else if (singleNum === 5) {
    //     singleValue = "V";
    // } else if (singleNum === 4) {
    //     singleValue = "IV";
    // } else {
    //     for (let i = 0; i < singleNum; i++) {
    //         singleValue += "I";
    //     }
    // }
    console.log("Single Value is", singleValue);
    return singleValue;
    
}

convertBtn.addEventListener("click", romanNumeralConverter);