
/*
*this function will take a string and return a revers of it
*like hello = olleh
 */
function ReverseString(stringInput) {
    const splitedString = stringInput.split("")

    let ReversedString = "";

    for (let i = (splitedString.length - 1); i >= 0; i--) {
        console.log(splitedString[i])
        ReversedString += splitedString[i]
    }

    return ReversedString;
}

