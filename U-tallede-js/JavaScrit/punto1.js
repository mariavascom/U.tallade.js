var fin = parseInt(prompt ("ingresa hasta que número irá la secuencia "));
var ante = 1
var presente = 0
var resultado = 1
 //console.log (resultado)

for (i=1; resultado<=fin; i++){
    console.log (resultado);
    resultado = ante+presente;
  
    ante = presente;
    presente = resultado;

    }