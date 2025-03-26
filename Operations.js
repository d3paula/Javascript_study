//SUMS AND SUBTRACTIONS

console.log("\n###################### SUMS AND SUBTRACTIONS #########################################\n")


let x = 10
let y = 4

let soma = x + y
let subtraction = x - y

console.log("\nOs números são:", x, "e ", y, " Soma é igual a : ",soma, "Subtração é igual a :",subtraction,"\n")

console.log("\n###################### INCREMENTALS AND DECREMENTALS #########################################\n")

x++
y--
soma_inc= x + y
console.log("\nIncremental x ++:", x, "e ", "Decremental in y--:", y, " Soma é igual a : ",soma_inc, "Subtração é igual a :",subtraction,"\n")

x+=2
y-=3
soma_inc_gt1 = x + y
subtraction_inc_gt1=x-y
console.log("\nIncremental x +=2:", x, "e ", "Decremental in y=-:", y, " Soma é igual a : ",soma_inc_gt1, "Subtração é igual a :",subtraction_inc_gt1,"\n")


//MULTIPLICATION, DIVISION AND EXPONENTIALS
console.log("\n###################### MULTIPLICATION, DIVISION AND EXPONENTIALS #########################################\n")

_n1=10.2
_n2=3.5

let multiplication = _n1 * _n2
let division = _n1 / _n2
let exponentiation = Math.pow(_n1, _n2)

console.log("\nMultiplicação de números é igual a : ", multiplication.toPrecision(3), "Divisão é igual a :", division.toPrecision(3), "Potência é igual a :", exponentiation.toPrecision(3), "\n")

console.log("\n######################################### LOGICAL OPERATION #########################################\n")

let Right = true
let Left = false

let logical_and = Right && Left
let logical_or = Right || Left
let logical_not = !Left
x===y

console.log("\nOperador True AND False é igual a : ", logical_and, " Operador True OR False é igual a : ", logical_or, " Operador NOT False é igual a : ", logical_not, "\nX===Y",x===y,  "\n")