function caseConvert(str, conversionType){
    let convertedStr = ``;
    if (conversionType === 'camelCase'){
        convertedStr = str.replace(/ [a-z]/g, (whatwasfound)=>(whatwasfound.toUpperCase()));
        convertedStr = convertedStr.replace(/./ (firstLetter)=>(firstLetter.toLowerCase()))
        convertedStr = convertedStr.replace(/\s/g, ``);
        return convertedStr;
 
    }
    if (conversionType ==='snake_case'){
        convertedStr = str.replace(/ /g, `_`);
        return convertedStr;
    }
 }
 
 let camelCase = caseConvert("The Rain in SPAIN stays mainly in the plain", 'camelCase');
 console.log(camelCase);
 let snake_case = caseConvert("The Rain in SPAIN stays mainly in the plain", 'snake_case');
 console.log(snake_case);

// Write a JavaScript program to validate that a credit card number:

// It must have 16 digits, unless it starts with 37 or 34. Then, and only then, it MUST have 15 digits
// It must start with one of the folliowing. Print off "valid" and the type of card
// 6011 = Discover Card
// 37 or 34 = American Express
// 4 = Visa
// 50-55 = MasterCard

function cardValidator(cardNumber){
    let cardNumberTest = '';
    let cardType = '';
    if (cardNumberTest.length = 16 && (/^4/g)){
       return cardType = "Visa";
    }else if (cardNumberTest.length = 16 && (/^6011/g)){
        return cardType = "Discover";
    }else if (cardNumberTest.length = 16 && (/^50-55/g)){
        return cardType = "MasterCard";
    }else if (cardNumberTest.length = 15 && (/^34/g) || (/^37/g)){
        return cardType = "American Express";
    }else if (cardNumberTest.length <15 || cardNumber.length >16){
        return "invalid input"
    }
};



