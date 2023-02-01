// const type_paymemnt  = 'cash'

// switch(type_paymemnt) {
//     case 'cash':
//         document.writeln('Tipo de pago con efectivo')
//         break;
//     case 'cc': 
//         document.writeln('Tipo de pago con efectivo' )
//         break;
//     default:
//         document.writeln('Sin tipo de pago' )
//         break;
// }

let edad = parseInt(prompt('Introduce tu edad'))

    switch(edad){
        case 0:
            document.writeln("Acabas de nacer")
            break;
        case 18:
            document.writeln("Ya eres mayor de edad")
            break;
        case 65: 
            document.writeln("Edad de jubilacion")
            break;
        default:
            document.writeln("Edad no es correcta") 
    }