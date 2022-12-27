var amg = {
    nome: 'Afonso',
    sexo: 'M',
    peso: 70,
    engordar(p){
        console.log('Engordou!')
        this.peso += p
    }
}

var depois = amg.engordar(5)

console.log(`Peso: ${amg.peso}`)