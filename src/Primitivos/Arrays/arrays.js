
let produtos = ['Arroz', 'Feijão', 'Leite'] //Padrão
var codigos = Array(10, 20, 30) //Não é muito utilizada.
var Meses =  Array(10)

test[0] = "Oi"
test[9] = "Tudo bem?"
test[10] = "Opa!"
let meses = ['Jan', 'Fev', 'Mar', 'Abr']
meses[0] = 'Janeiro'


// ADICIONAR no final da lista (push = empurre)
produtos.push('Açúcar', 'Trigo') 
codigos.push(40, 50, 60, 70)
meses.push('Mai', 'Jun', 'Ago', '07')

// REMOVER do final (pop = estourar)
produtos.pop() //tira o ultimo elemento do array


// ADICIONAR no inicio (unshift)
produtos.unshift('Uva', 'Maçã')

// REMOVER do inicio (shift)
produtos.shift()


// REMOVER de uma posicao especifica (splice = emendar)
codigos.splice(1, 3) // posicao inicial, quantos remover



// COPIAR array slice = fatiar porção
// posicao inicial, quantos copiar
let meses1 = meses.slice()
let meses2 = meses.slice(0,3)

// VER TAMANHO DO ARRAY length comprimento
// meses.length
// meses1.length
// meses2.lenght

// spreed operator ... copiar
let teste = [...produtos, 'Ovo', 'Pera']

// ver indice de um valor no array
// let pos = nome_array.indexOf('Valor')
let pos = produtos.indexOf('Uva')