function sumNumber() {
    let count = 0;
    for (const number of arguments) {
        count += number;
    }

    return count;
}

const result = sumNumber(100, 50, 30, 70);
console.log(result);
