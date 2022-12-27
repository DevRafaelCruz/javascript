function contar(){
    var inicio = document.getElementById('idinicio')
    var fim = document.getElementById('idfim')
    var passo = document.getElementById('idpasso')
    var res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[Erro] Faltam dados!')
        res.innerHTML = 'Impossível contar'
    }else{
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if(p<=0){
            alert('Passo inválido! Considerando PASSO 1')
        }
        if(i<f){
            for(i;i<=f;i+=p){
                res.innerHTML+= `${i} \u{1F449}`
            }
        }else{
            for(i;i>=f;i-=p){
                res.innerHTML+= `${i} \u{1F449}`
            }
        }
        res.innerHTML+=`🏁`

        
    }
} 