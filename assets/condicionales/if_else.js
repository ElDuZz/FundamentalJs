    // let saldo = 0;
    // let cuenta = 150;
    // let dinero = parseInt(prompt('Cuanto dinero deseas retirar? '))
    // console.log(dinero) // '',null

    // var rev = dinero > cuenta ? "Movimiento cancelado" : "Movimiento realizado"
    // console.log(rev)

    // if (dinero <= cuenta){
    //     saldo = (cuenta - dinero)
    //     alert('Movimiento realizado')
    //     document.writeln("Tu saldo es de: " + saldo)
    // }else{
        
    //     alert('Movimiento cancelado')
    //     document.writeln("Sin saldo disponible")
    // }

    
        // Calificaciones
    // let calificacion = parseInt(prompt('Ingresa la calificación'))
    // var rev = calificacion > 6 ? "Calificacion aprobatoria" : "Calificacion reprobatoria"
    // console.log(rev)
    
    
    let calif = parseInt(prompt('Ingrese una calificaciòn? '))
    // if(isNumber(calif)){
    
    console.log(Number(calif))
if(Number(calif) == calif){
    
    if (calif >=0 && calif <=10){
    
    if(calif >= 0 && calif <= 6){
        document.writeln("Reprobado")
    }else if(calif >=7  && calif <= 8){
        document.writeln("Aprobado con condicional") 
    }else if(calif >=9 && calif <=10){
        document.writeln("Aprobado")
    }}else{
        
        document.writeln("Calificacion no valida")
    }
}else{
        document.writeln("Digito no valido")
    }