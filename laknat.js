function convertToDesimal(angka)
{
	let currency = '';		
	let angkarev = angka.toString().split('').reverse().join('');
	for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) currency += angkarev.substr(i,3)+'.';
	return currency.split('',currency.length-1).reverse().join('');
}
/**
 * Usage example:
 * alert(convertToRupiah(10000000)); -> "Rp. 10.000.000"
 */
 
function convertToAngka(rupiah)
{   
    console.log(rupiah.replace(/,.*|[^0-9]/g, ''))
	return parseInt(rupiah.replace(/,.*|[^0-9]/g, ''), 10);
}

let angka1 = 10000
let angka2 = 50000
let calculate = angka1 - angka2
console.log(convertToDesimal(calculate))

calculate = convertToDesimal(calculate)

console.log(convertToAngka(calculate))
