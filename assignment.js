const prompt = require('prompt-sync')();
const response = prompt('Enter in n');
console.log(response)
// let numbers = [10,34,85]

const numToString = (response) => {
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
    
    array.forEach((element, i) => {
        let stringNum = element.toString().split('')
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
