function convertToRoman(num) {
let romanObj = {
    1: "I", 
    4: "IV",
    5: "V", 
    9: "IX",
    10: "X", 
    40: "XL",
    50: "L", 
    90: "XC",
    100: "C",
    400: "CD", 
    500: "D", 
    900: "CM",
    1000: "M"
    };
let resultArr = []; 
let finalArr = [];

let thous = num / 1000;
thous >= 1 ? resultArr.push(1000 * (Math.floor(thous))) : num;

let hundrsRemainder = num % 1000;
let hundrs = hundrsRemainder / 100;
hundrs > 1 ? resultArr.push(100 * (Math.floor(hundrs))) : num;


let tensRemainder = num % 100;
let tens = tensRemainder / 10;
tens > 1 ? resultArr.push(10 * Math.floor(tens)) : num;

let units = tensRemainder % 10;
resultArr.push(units);

resultArr.map(function(item) {
    if (item >= 1000) {
        finalArr.push(romanObj[1000].repeat(Math.floor(thous)));
        };
        if (item === 900) {
            finalArr.push(romanObj[900]);
        };
        if (item === 800) {
            finalArr.push(romanObj[500] + romanObj[100].repeat(3));
        };
        if  (item === 700) {
            finalArr.push(romanObj[500] + romanObj[100].repeat(2));
        };
        if (item === 600) {
            finalArr.push(romanObj[500] + romanObj[100]);
        };
        if (item === 500) {
            finalArr.push(romanObj[500]);
        };
        if (item === 400) {
            finalArr.push(romanObj[400]);
        };
         if (item === 300) {
            finalArr.push(romanObj[100].repeat(3));
        };
         if (item === 200) {
            finalArr.push(romanObj[100].repeat(2));
        };
         if (item === 100) {
            finalArr.push(romanObj[100]);
        }; 
        if (item === 90) {
            finalArr.push(romanObj[90]);
        }; 
        if (item === 80) {
            finalArr.push(romanObj[50] + romanObj[10].repeat(3));
        }; 
        if (item === 70) {
            finalArr.push(romanObj[50] + romanObj[10].repeat(2));
        }; 
        if (item === 60) {
            finalArr.push(romanObj[50] + romanObj[10]);
        };
        if (item === 50) {
            finalArr.push(romanObj[50]);
        };
        if (item === 40) {
            finalArr.push(romanObj[40]);
        };
        if (item === 30) {
            finalArr.push(romanObj[10].repeat(3));
        };
        if (item === 20) {
            finalArr.push(romanObj[10].repeat(2));
        };
        if (item === 10) {
            finalArr.push(romanObj[10]);
        };
        if (item === 9) {
            finalArr.push(romanObj[9]);
        };
        if (item === 8) {
            finalArr.push(romanObj[5] + romanObj[1].repeat(3));
        };
        if (item === 7) {
            finalArr.push(romanObj[5] + romanObj[1].repeat(2));
        };
        if (item === 6) {
            finalArr.push(romanObj[5] + romanObj[1]);
        };
        if (item === 5) {
            finalArr.push(romanObj[5]);
        };
        if (item === 4) {
            finalArr.push(romanObj[4]);
        };
        if (item === 3) {
            finalArr.push(romanObj[1].repeat(3));
        };
          if (item === 2) {
            finalArr.push(romanObj[1].repeat(2));
        };
          if (item === 1) {
            finalArr.push(romanObj[1]);
        };
});

return finalArr.join("");
}

convertToRoman(1000);
