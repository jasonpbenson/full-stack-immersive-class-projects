const checkFizzBuzz = (input) => {
    // if(input === 1) {
    //     return "1";
    // }else
    // return "2";
    if(input%3===0 && input%5===0){
        return"fizzbuzz";
    }else if(input%3===0){
        return "fizz";
    }else if(input%5===0){
        return "buzz";
    }else
    return input.toString;
};