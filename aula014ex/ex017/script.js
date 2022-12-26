function gerarTabuada(){
    var num = Number(document.getElementById('inum').value)
    var res = document.getElementById('res')

    for(var i=0;i<=10;i++){
        var n = num*i
        res.innerHTML+=(`${num} x ${i} = ${n}`)
        res.innerHTML+=('<br>')
    }

    res.innerHTML+=('<br>')
    res.innerHTML+=('<br>')
    res.innerHTML+=('<br>')
    res.innerHTML+=('<br>')
}