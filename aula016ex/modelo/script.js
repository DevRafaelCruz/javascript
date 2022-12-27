function adicionar(){
    var sel = document.getElementById('idsel')
    var num = Number(document.getElementById('idnum').value)
    var nums = []
    var inp = document.getElementById('idnum')

    if(num<= 0 || num > 100){
        alert('Número inválido! O valor inserido deve estar entre 1 e 100')
    }else{
        nums.push(num)
        var item = document.createElement('option')
        item.text = `Valor ${num} adicionado`
        sel.appendChild(item)
        inp.innerHTML = ''
    }
}

function finalizar(){
    
}

