const { Input } = require("@headlessui/react");

console.log("\n######################################### Function SOMA #########################################\n")
function soma(x,y){
    return x + y;
}
x=2
y=3
soma=soma(x,y)
console.log("Soma de "+x+" e "+y+" é: "+soma)

console.log("\n##################################### Function Temperature #########################################\n")

function ConvertTemperature(value,{from='celsius', to = "farenheit", round=false}={}){

    if (typeof value !== "number")
    {
    throw new Error("Valor precisa ser um número")
    }
    to=to.toLowerCase()
    from=from.toLowerCase()
    switch(`${from}_${to}`) {
        case 'celsius_farenheit':
            return round ? Math.round(value * 9/5 + 32) : value * 9/5 + 32;
        case 'farenheit_celsius':
            return round ? Math.round((value - 32) * 5/9) : value - 32 * 5/9;
        case 'celsius_kelvin':
            return round ? Math.round(value + 273.15) : value + 273.15;
        case 'farenheit_kelvin':
            return round ? Math.round((value - 32) * 5/9 + 273.15) : value - 32 * 5/9 + 273.15;
        case 'kelvin_celsius':
            return round? Math.round(value - 273.15) : value - 273.15;
        case 'kelvin_farenheit':
            return round? Math.round((value - 273.15) * 9/5 + 32) : value - 273.15 * 9/5 + 32;
        default:
            throw new Error("Conversão não suportada")
    }
}
Converted = ConvertTemperature(30,{from: 'celsius', to: 'kelvin', round:true})
console.log("Valor da temperatura em Kelvin: "+ Converted)