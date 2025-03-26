/* Learning from the bottom

_____ Data Types _____
- Numbers
	-Negative and Positive Floats
	- Integers
	-NAN (Not a Number) is a special kind that when aritmetic operations CANNOT express as a number
	- Infinity
- Boolean
	-True
	-False
- String
	-Could be assigned with one, two or three quotes and with crasis sign
- Null 
	- Idicates the inhabitation of a variable that is  manually assigned of a variable 
- Undefined
	-Represents the inhabitation that is automatically setted to a variable that is declared and  has not be assigned a value
- Function
- Object
- Array
_____ Constantes and Variables _____

- const:  Defined INSIDE the block and that CANNOT be reassigned after intialization

- let :   Accesible ONLY inside the block and could be reassigned. Was constructed to be an alternative to var they 
are not accessed before the declaration (Temporal Dead Zone)

- var :   Defined in Function-Level and CAN be reassigned, The var is hoisted, i.e are acessible throughout the 
entire scope of the function even if its not declared yet (NOT SO USED and OLD) 

*/

//TYPE NULL
console.log("##### NULL TYPE #####\n")


n_null=null
console.log(" NULL =",n_null, "Tipo:", typeof(n_null))
// Typeof NULL IS AN OBJECT
console.log("_______________________________")

//TYPE UNDEFINED
console.log("\n##### UNDEFINED TYPE #####\n")

function test(t){
	if (t===undefined){
	return "Undefined Value"	
	}
return t
}

let und_x
console.log(" \n und_x =",und_x,"Tipo:", typeof(und_x))
console.log("_______________________________")

//BOOLEAN TYPE
console.log("\n##### BOOLEAN TYPE #####\n")

c_truth=true
c_false=false

console.log(" \n c_truth =",c_truth,"Tipo:", typeof(c_truth))
console.log(" \n c_truth =",c_false,"Tipo:", typeof(c_false))

console.log("_______________________________")


//NUMBER TYPE

console.log("\n##### NUMBER TYPE #####\n")
integer_number=5
float_number = 50.2
soma = integer_number + float_number
//Operations
divided_inf=42/0

var percent  //Declaration of var without any value
var test_nan = percent*100

console.log(" integer number = ", integer_number, "Tipo:", typeof(integer_number))
console.log(" float number = ", float_number, "Tipo:", typeof(float_number))
console.log(" divided inf = ", divided_inf, "Tipo:", typeof(divided_inf))
console.log(" test_nan = ", test_nan, "Tipo:", typeof(test_nan))

//SOMA
console.log("A soma de integer_number e float_number é",soma)

console.log("_______________________________")

// BIGINT TYPE
console.log("\n##### BIGINT TYPE #####\n")

integer_bnumber = 1000000003445n
console.log(" integer big  number = ", integer_bnumber,"Tipo:", typeof(integer_bnumber))
console.log("_______________________________")



//TYPE STRING
console.log("\n##### STRING TYPE #####\n")
string_stype = 'Hello World declarated with single quote'
string_dtype = "Hello World declarated with double quotes"
string_btype = `Hello World declarated with backsticks`

console.log(" string = ", string_stype, "Tipo:", typeof(string_stype))
console.log(" string = ", string_dtype, "Tipo:", typeof(string_dtype))
console.log(" string = ", string_btype, "Tipo:", typeof(string_btype))
console.log("_______________________________")


//SYMBOL TYPE
console.log("\n##### SYMBOL TYPE #####\n")

let person = {
    name: "Jack"
};

// creating Symbol
let id = Symbol("id")

// adding symbol as a key
person[id] = 12

console.log("person = ", person, "Tipo:", typeof(person))
console.log("id", id, "Tipo:", typeof(id))

//SYMBOL TYPE
console.log("\n##### LET ISOLATED DECLARATION AND FUNCTION #####\n")

function lettest () {
	let isolated_in = 1.0 
    console.log(" isolated inside function= ", isolated_in, "Tipo:", typeof(isolated_in))
    return isolated_in
}

let isolated

isolated  = 2.0 
console.log("isolated = ", isolated, "Tipo:", typeof(isolated))
// console.log(" Trying to read isolated inside function outside the function = ", isolated_in, "Tipo:", typeof(isolated_in)) 
// console.log("There is an error in the comment command above since let cannot be read outside the function")

console.log("\n##### FUNCTION TYPE #####\n")
function FarenheitToCelsius (FarenheitT) {
	let Celsius = (5/9)*FarenheitT -32
	console.log("Inside the function FarenheitToCelsius (" + FarenheitT + ")= " + Celsius + "C")
    return Celsius
}
x= FarenheitToCelsius(90)

console.log("Calling the conversion functions outside FarenheitToCelsius(90) " + "= " + x, typeof(x))
console.log("Typeof the conversion function =  ", typeof(FarenheitToCelsius))

console.log("############ Type Object ###############")
object_brackets=[2,3]
object_curlybraces={name:"diego"}
console.log("Value of object brackets = " + object_brackets + " Tipo =", typeof (object_brackets))
console.log("Value of object curlybraces = " + object_curlybraces + "Tipo =", typeof (object_curlybraces))


console.log("\n##### ARRAYTYPE #####\n")

let primes =[1,3,5,7]
let empty_array=[]
let points=[{x:1,y:0},{x:2,y:1}]

console.log("Value of primes = " + primes + " Tipo =", typeof (primes))

console.log("Valor vazio"+empty_array+ " Tipo =", typeof (empty_array))

console.log(points)
console.log(`Valor dos pontos x:`, points[0])
console.log(`Valor de x para os pontos:`, points[0].x, points[1].x)

console.log()


