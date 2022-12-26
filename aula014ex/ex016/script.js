function contar(){
    var inicio = document.getElementById('idinicio')
    var fim = document.getElementById('idfim')
    var passo = document.getElementById('idpasso')
    var res = document.getElementById('res')
    var restxt = document.getElementById('restxt')
    restxt.innerHTML = 'Contando: '

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[Erro] Faltam dados!')
    }else{
        restxt.innerHTML = 'Contando: '

        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

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