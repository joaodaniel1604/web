function mostrarFaixaEtaria() {
    var idade = document.getElementById('idade')
    
    if (idade.value >= 3 && idade.value<=10) {
        alert('Faixa etária 3 a 10 anos')
    } if (idade.value >=11 && idade.value<=25) {
        alert('Faixa etária 11 a 25 anos')
        
    } if (idade.value >=36 && idade.value<=55) {
        alert('Faixa etária 36 a 55 anos')
        
    } else{
        alert('faixa etaria acima de 56')
    }
}

