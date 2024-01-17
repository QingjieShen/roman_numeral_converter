const convertBtn = document.getElementById("convert-btn");
const inputNum = document.getElementById("input-number");
const result = document.getElementById("output");

// define an array to store convert table
const convertTable = [
    {
        digitsPlace: "thousands",
        base: 1000,
        one: "M",
        two: "MM",
        three: "MMM",
        four: "Error",
        five: "Error",
        six: "Error",
        seven: "Error",
        eight: "Error",
        nine: "Error"
    },
    {
        digitsPlace: "hundreds",
        base: 100,
        one: "C",
        two: "CC",
        three: "CCC",
        four: "CD",
        five: "D",
        six: "DC",
        seven: "DCC",
        eight: "DCCC",
        nine: "CM"
    },
    {
        digitsPlace: "tens",
        base: 10,
        one: "X",
        two: "XX",
        three: "XXX",
        four: "XL",
        five: "L",
        six: "LX",
        seven: "LXX",
        eight: "LXXX",
        nine: "XC"
    },
    {
        digitsPlace: "singles",
        base: 1,
        one: "I",
        two: "II",
        three: "III",
        four: "IV",
        five: "V",
        six: "VI",
        seven: "VII",
        eight: "VIII",
        nine: "IX"
    },
]

let romanNumberResult = "";

const romanNumeralConverter = () => {
    resultClean();
    number = parseInt(inputNum.value);
    if (isNaN(number)) {
        resultDisplay("Please enter a valid number");
    } else if ( !number || number <= 0) {
        resultDisplay("Please enter a number greater than or equal to 1");
    } else if (number > 3999) {
        resultDisplay("Please enter a number less than or equal to 3999");
    } else {
        resultDisplay(`${convert(number)}`)
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

const convert = (number) => {
    const n = counting(number);
    let convertValue = "";
    let num;
    for (let i = 4-n; i <= 3; i++)  {
        if ( i > 0 && number / convertTable[i-1].base) {
            num = Math.floor((number % convertTable[i-1].base) / convertTable[i].base);
        } else {
            num = Math.floor(number / convertTable[i].base);
        }
        switch (num) {
            case 9:
                convertValue += convertTable[i].nine;
                break;
            case 8:
                convertValue += convertTable[i].eight;
                break;
            case 7:
                convertValue += convertTable[i].seven;
                break;
            case 6:
                convertValue += convertTable[i].six;
                break;
            case 5:
                convertValue += convertTable[i].five;
                break;
            case 4:
                convertValue += convertTable[i].four;
                break;
            case 3:
                convertValue += convertTable[i].three;
                break;
            case 2:
                convertValue += convertTable[i].two;
                break;
            case 1:
                convertValue += convertTable[i].one;
                break;
            default:
                convertValue +="";
        }
    }
    return convertValue;
}

const counting = (number) => { 
    let count = 0; 
    for (let n = number; n > 0; n = Math.floor(n / 10)) { 
        count++; 
    } 
    return count; 
} 

convertBtn.addEventListener("click", romanNumeralConverter);
