/*Task 1
Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius. */
convertFahrToCelsius = (a) => {
    var checkType= (typeof a); 
    let stringToNumber = Number(a); console.log(a)
    if ((checkType != "number" && stringToNumber == NaN) || checkType == "object" || checkType =="boolean") {
        let arrayCheck= Array.isArray(a); 
        if (arrayCheck){
            return console.log(`[${a}] is not a valid number but an array.`);
        }else {
            return console.log(`${a} is not a valid number but a/an ${checkType}.`);
        }
    }else {
        let convertedValue = (a-32) * (5/9);
        convertedValue = convertedValue.toFixed(4);
        console.log(convertedValue);
        return convertedValue;
    }
}


/* Task 2
Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of numbers from 1 to n and
    replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh", then returns the resulting array. Note:
    - for numbers that have multiple factors, use hyphens as separators e.g 10 === "yu-oh", 30 === "yu-gi-oh" */
    
checkYuGiOh = (n) => {
    let stringToNumber = Number(n); console.log(stringToNumber)
    if ((typeof stringToNumber)== "number") {

        if (n>1){ 
            let array = new Array;
            for (let i=1; i<=n; i++){
                array.push(i);
            }
            
            for (let i in array) {
                let multipleTwo = array[i]% 2;
                let multipleThree= array[i]% 3;
                let multipleFive = array[i]% 5;
                if (multipleTwo == 0 && multipleThree==0 && multipleFive == 0) {
                    array[i] = "yu-gi-oh";
                } else if (multipleTwo == 0 && multipleFive == 0) {
                    array[i] = "yu-oh";
                } else if (multipleTwo == 0 && multipleThree == 0){
                    array[i] = "yu-gi";
                } else if(multipleThree == 0 && multipleFive == 0){
                    array[i] = "gi-oh";
                } else if (multipleTwo == 0){
                    array[i] = "yu";
                } else if (multipleThree ==0){
                    array[i] = "gi";
                } else if (multipleFive == 0){
                    array[i] = "oh";
                } 
            } 
            console.log(array);
            return array;
        }

    }
    console.log(`invalid parameter: "${n}"`);
    return `invalid parameter: "${n}"`;
}