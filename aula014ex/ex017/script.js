function gerarTabuada(){
    var num = document.getElementById('inum')
    var tab = document.getElementById('seltab')

    if(num.value.length == 0){
        alert('Por favor, digite um número!')
    }else{
        var n = Number(num.value)
        tab.innerHTML = ''
        for(var i=0;i<=10;i++){
            var item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            item.value = `tab ${i}`
            tab.appendChild(item)
        }
    }
}