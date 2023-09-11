function calcularIMC() {
    var peso = document.getElementById('peso')
    var altura = document.getElementById('altura')
    var imc = peso.value / (altura.value*2)
    var mostrarIMC = document.getElementById('mostrarIMC')

    if (imc >=16 && imc <=16.9) {
        mostrarIMC.innerHTML = imc.toFixed(2) + ' Muito abaixo do peso'
    }
    if (imc >=17 && imc <=18.4) {
        mostrarIMC.innerHTML = imc.toFixed(2) + ' Abaixo do peso'
    }
    if (imc >=18.5 && imc <=24.9) {
        mostrarIMC.innerHTML = imc.toFixed(2) + ' peso normal'
    }
    if (imc >=25 && imc <=29.9) {
        mostrarIMC.innerHTML = imc.toFixed(2) + ' Acima do peso'
    }
    if (imc >=30) {
        mostrarIMC.innerHTML = imc.toFixed(2) + ' Obesidade'
    }

    
}
