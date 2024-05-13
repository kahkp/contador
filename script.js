
function contar() {
   
    var inicio = parseInt(document.getElementById("Inicio").value);
    var fim = parseInt(document.getElementById("Fim").value);
    var passo = parseInt(document.getElementById("Passo").value);
    var res = document.getElementById("res");
    var emoji = "💀"

    if (isNaN(inicio) || isNaN(fim) || isNaN(passo)) {
        window.alert('[ERRO] Faltam dados!');
        return; 
    }
    if (passo <= 0){
        window.alert('Passo invalido! Considerando PASSO 1')
        passo = 1
    }
    
    var contador = '';

    for (var i = inicio; i <= fim; i += passo) {
        contador += i + ' ' + emoji;
        //contagem crescente

    } for (var i = inicio; i >= fim; i -= passo) {
        contador += i + ' ' + emoji;
        //contagem decrescente
    }

    res.innerHTML = `Contagem: ${contador} \u{1F608}`;
}
