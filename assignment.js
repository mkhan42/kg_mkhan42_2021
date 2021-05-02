const prompt = require('prompt-sync')();
const response = prompt('Enter in a set of numbers: ');

const numToString = (userInput) => {

    let inputArray = userInput.split(" ")
    let numBase = {
        "0": "Zero",
        "1": "One",
        "2": "Two",
        "3": "Three",
        "4": "Four",
        "5": "Five",
        "6": "Six",
        "7": "Seven",
        "8": "Eight",
        "9": "Nine"
    }
    
    let stringArr = []
    
    inputArray.forEach((element, i) => {
        let stringNum = element.split('')
        let numWord = ''
    
        stringNum.forEach((num) => {
            for(let digit in numBase) {
                if(digit == num) {
                    numWord = numWord + numBase[digit]
                }
            }
        })
        stringArr.push(numWord)
    })

    let finalString = stringArr.join(", ")
    return finalString
}


console.log(numToString(response))
