 


let firstValue = prompt("Entrer votre numero"); 
console.log(firstValue); 

let operator="+"; 
operator = prompt ("manipulation"); 
console.log(operator); 

let secondeValue= 4; 
secondeValue = prompt("Entrer votre seconde number"); 
console.log(secondeValue); 

let result= 0; 
console.log(result); 


switch (operator) {
    case "+": 
        result = parseInt(firstValue)+ parseInt(secondeValue);
        console.log("je suis dans le plus");
        console.log("le resultat est");
        console.log(result); 
    break; 

    case "-":
        result = parseInt(firstValue)- parseInt(secondeValue); 
        console.log("je suis dans le moins");
        console.log("le resultat est"); 
        console.log(result); 
    break; 

    case "*": 
        result = parseInt(firstValue) * parseInt(secondeValue); 
        console.log("je suis dans le mult"); 
        console.log("le resultat est")
        console.log(result); 
    break;

    case "/": 
        result = parseInt(firstValue)/ parseInt(secondeValue);
        console.log("je suis dans le divis");
        console.log("le resultat est");
        console.log(result); 


    break; 

    default: 
        console.log("Invalid"); 
    break; 
}





