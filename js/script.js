let inputAdultos = document.getElementById('adultos')
let inputCrianças = document.getElementById('crianças')
let inputcerveja = document.getElementById('cerveja')

let resultado = document.getElementById('resultado')

function calcular(){
let adultos = inputAdultos.value
let crianças = inputCrianças.value
let cerveja = inputcerveja.value

let qtdTotalCarne = adultos * 400 + (200 * crianças)
let bebedeira = cerveja * 5
let refri = (adultos * 500) + (crianças * 200)

resultado.innerHTML = '<p> <img src="css/images/CHURRAS.png" alt="EspetoDeChurrasco" width="30px">' + (qtdTotalCarne) + 'g de carne </p>'
resultado.innerHTML +=  '<p> <img src="css/images/cerveja.png" alt="Cerveja" width="30px">' + (bebedeira) + ' garrafas de cerveja </p>'
resultado.innerHTML += '<p> <img src="css/images/REFRI.png" alt="Refrigerante" width="30px">' + (refri) + 'ml de refrigerante </p>'
}
