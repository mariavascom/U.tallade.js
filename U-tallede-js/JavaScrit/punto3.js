var num1 = parseFloat(prompt("Incorporar el valor inicial: "))
var num2 = parseFloat(prompt("Incorporar el valor final: "))
suma = 0

console.log ("los números comprendidos entre"+num1+"y "+num2+"es: ")

for (i=num1; i<=num2; i++){
    console.log (i)
}

for (i=num1; i<=num2; i++){
    suma = suma+i
}
console.log ("el total de la suma es: "+suma)