var multiply = function(num1, num2) {
    const m = num1.length;
    const n = num2.length;
    const result = Array(m + n).fill(0);

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const product = (num1[i] - '0') * (num2[j] - '0');
            const sum = result[i + j + 1] + product;

            result[i + j + 1] = sum % 10;
            result[i + j] += Math.floor(sum / 10);
        }
    }

    let productString = result.join('').replace(/^0+/, '');

    return productString === '' ? '0' : productString;
}

// Example usage:
console.log(multiply("2", "3"));
console.log(multiply("123", "456"));