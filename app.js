let dollars = [1, 5, 10, 3]
// let dollars = [0, 10, 20]

let cents = []

for (i = 0; i < dollars.length; ++i) {
    cents.push(dollars[i] * 100)
}

console.log(cents)