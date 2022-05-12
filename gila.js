function decimalToNumber(param){
    let decimalStr = param + ""
    if(decimalStr.includes(".")){
        let decimal = param.split('.')
        let number = ''
        
        for(let i = 0; i < decimal.length; i++){
            number += decimal[i]
        }
        
        return parseInt(number)                
    }else{
        return parseInt(param)
    }
}

function numberToDecimal(param){
    if(typeof(param) == 'number'){
        param = param.toString()
        return param.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".")                
    }else{
        return param
    }
}

let jancuuk = 10000
let jancook = 30000
let anjeng = numberToDecimal(jancuuk - jancook)
console.log(anjeng)