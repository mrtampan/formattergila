const number = 100000;
const number2 = 150000;

console.log(new Intl.NumberFormat().format(number - number2));
// expected output: "123.456,79 €"

let calc = new Intl.NumberFormat().format(number - number2)

console.log(typeof(new Intl.NumberFormat().format(number)));


// the Japanese yen doesn't use a minor unit
console.log(new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(number));
// expected output: "￥123,457"

// limit to three significant digits
console.log(new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number));
// expected output: "1,23,000"

function parseLocaleNumber(stringNumber) {
    var thousandSeparator = Intl.NumberFormat().format(11111).replace(/\p{Number}/gu, '');
    var decimalSeparator = Intl.NumberFormat().format(1.1).replace(/\p{Number}/gu, '');

    return parseFloat(stringNumber
        .replace(new RegExp('\\' + thousandSeparator, 'g'), '')
        .replace(new RegExp('\\' + decimalSeparator), '.')
    );
}

console.log(parseLocaleNumber(calc))