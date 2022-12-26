function contar(){
    var inicio = Number(document.getElementById('idinicio').value)
    var fim = Number(document.getElementById('idfim').value)
    var passo = Number(document.getElementById('idpasso').value)
    var res = document.getElementById('res')
    var restxt = document.getElementById('restxt')
    restxt.innerHTML = ('Contando...')

    

    for(inicio;inicio<=fim;inicio+=passo){
        res.innerHTML+=(inicio + `👉`)
    }
    res.innerHTML+=(`🏁`)
    res.innerHTML+=('<br>')
    res.innerHTML+=('<br>')
    res.innerHTML+=('<br>')
    res.innerHTML+=('<br>')
} 