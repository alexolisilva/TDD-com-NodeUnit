// | b - c | < a < b + c
//| a - c | < b < a + c
//| a - b | < c < a + b 

//modulo = Math.sqrt(pow(numero,2));

var VerificaTriangulo = require("./VerificaTriangulo");

// Triangulo de qualquer tipo
exports.FormaTriangulo = function(lado1, lado2, lado3){
    if (Math.sqrt(Math.pow((lado2 - lado3),2)) < lado1 && lado1 < (lado2 + lado3)){
        return "TRUE";  
    } else if (Math.sqrt(Math.pow((lado3 - lado1),2)) < lado2 && lado2 < (lado1 + lado3)){
        return "TRUE";
    } else if(Math.sqrt(Math.pow((lado1 - lado2),2)) < lado3 && lado3 < (lado1 + lado2)){
        return "TRUE";        
    } else {
        return "FALSE";    
    }
}

// Triangulo com todos os lados iguais
exports.FormaEquilatero = function(lado1, lado2, lado3){
    if (lado1 == lado2 && lado1 == lado3){
        return "TRUE";
    } else {
        return "FALSE";
    }
}

// Triangulo com lados diferentes
exports.FormaEscaleno = function(lado1, lado2, lado3){
    if ( VerificaTriangulo.FormaTriangulo(lado1, lado2, lado3) == "TRUE"){
        if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3){
            return "TRUE";
        }
        } else {
        return "FALSE";
    }
}

// Triangulo com dois lados iguais
exports.FormaIsosceles = function(lado1, lado2, lado3){
    if ( VerificaTriangulo.FormaTriangulo(lado1, lado2, lado3) == "TRUE"){
        if ( VerificaTriangulo.FormaEquilatero(lado1,lado2,lado3) != "TRUE" 
             && VerificaTriangulo.FormaEscaleno(lado1,lado2,lado3) != "TRUE"){
            return "TRUE";        
        }
        } else {
        return "FALSE";
    }    
}