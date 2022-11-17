function valorMaca(){
    const qtdmaca = document.getElementById('valor').value;
    const resultado = document.getElementById('resultado');
    const valor1 = 1.30
    const valor2 = 1
    console.log(qtdmaca)
    if(qtdmaca < "12"){
        resultado.value = 'R$ ' + (valor1 * qtdmaca);
        console.log(resultado)
        document.getElementById('resultado').innerText = resultado;
    }
    else if(qtdmaca >= "12"){
        resultado.value = 'R$ ' + (valor2 * qtdmaca);
        document.getElementById('resultado').innerText = resultado;
    }
}