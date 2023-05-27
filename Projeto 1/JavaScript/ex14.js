let a = []

for(var i = 0; i < 10; i++) {
    a[i] = i
    //console.log(`${a[i]}`)
}

for (let i in a) {
    console.log(`A posição ${i} tem o valor ${a[i]}`)
}

//a.push(x) - coloca o número 'x' dentro do vetor a..

//a.indexOf(x) - buscar o número 'x' dentro do vetor a.., se tem retorna a posição se nao tem retorna -1.

a.sort() //coloca o vetor em ordem crescente..

console.log(`\nO vetor tem ${a.length} posições!`)

console.log(`\nO vetor em ordem crescente é ${a} `) 

