// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"


// First solution
// function phoneNumber (arr) {
//     let endNumber = []
//     for (let i = 0; i < 3; i++) {
//         endNumber.push(arr[i])
//     }

//     endNumber.unshift('(')
//     endNumber.push(') ')

//     for (let j = 3; j < 6; j++) {
//         endNumber.push(arr[j])
//     }

//     endNumber.push('-')

//     for (let k = 6; k < arr.length; k++) {
//         endNumber.push(arr[k])
//     }

//    return endNumber.join('')
// }


// Second solution

let secondPhoneNumber = (arr) => {
    let format = '(xxx) xxx-xxx'

    arr.forEach(item => format = format.replace('x', item))
    return format
}


console.log(secondPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
console.log(secondPhoneNumber([8, 0, 1, 5, 5, 5, 1, 2, 2, 9]))