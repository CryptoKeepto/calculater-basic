exports.basicPlus = function (a, b) {
    return a + b;
}

exports.basicPlusUnlimit = function (...numbers) {
    let number = [...numbers];
    let init = number.join(" + ");
    let sum = 0;

    for (let n of number) {
        sum = sum + n;
    }
    return `${init} = ${sum}`;
}


