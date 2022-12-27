let num = document.getElementById('idnum')
let sel = document.getElementById('flista')
var res = document.getElementById('res')
let nums = []
 
function isnum(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inlista(n,lis){
    if(lis.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isnum(num.value) && !inlista(num.value, nums)){
        nums.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        sel.appendChild(item)
        res.innerHTML=''
    }else{
        alert('Valor inválido ou já encrontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(nums.length==0){
        alert('Adicione calores antes de finalizar!')
    }else{
        let tot = nums.length
        let maior = nums[0]
        let menor = nums[0]
        let soma = 0
        for(pos in nums){
            soma+=nums[pos]
            if(nums[pos]>maior){
                maior = nums[pos]
            }
            if(nums[pos]<menor){
                menor = nums[pos]
            }
        }
        media=soma/tot    

        res.innerHTML=''
        res.innerHTML+=`<p>Ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML+=`<p>O maior valor inserido foi ${maior}.</p>`
        res.innerHTML+=`<p>O maior valor inserido foi ${menor}.</p>`
        res.innerHTML+=`<p>A soma dos valores é ${soma}.</p>`
        res.innerHTML+=`<p>A media dos valores é ${media}.</p>`
    }
}