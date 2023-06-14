const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
  // return parseInt(Math.random() * 100)
  return Math.floor(Math.random() * maiorValor + 1)  // Math.floor() - retorna o menor número inteiro
}

console.log('Número Secreto: ', numeroSecreto)

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerText = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerText = maiorValor