var num = [5,2,3,1,4]
num[5] = 6
num.push(7)

console.log(`O vetor é: ${num}. E o seu tamanho é: ${num.length}.`)

console.log(`O vetor organizado é assim: ${num.sort()}.`)
console.log(`O primeiro elemento do vetor: ${num[0]}.`)
console.log(`O ultimo elemento do vetor: ${num[num.length-1]}.`)

console.log(`O valor 1 está na posição: ${num.indexOf(1)}.`)

for(var pos=0;pos<num.length;pos++){
    console.log(`Elemento da posição ${pos} é: ${num[pos]}`)
}

for(var i in num){
    console.log(`Usando for in:${num[i]}`)
}
