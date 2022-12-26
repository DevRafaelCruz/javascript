function gerarTabuada(){
    var num = Number(document.getElementById('inum').value)
    var res = document.getElementById('res')
    res.innerHTML = ('')

    for(var i=0;i<=10;i++){
        var n = num*i
        res.innerHTML+=(`${num} x ${i} = ${n}`)
        res.innerHTML+=('<br>')
    }
    res.style.borderStyle = 'solid'
    res.style.borderWidth = '1px'
    // res.style.width = 'auto' 
}