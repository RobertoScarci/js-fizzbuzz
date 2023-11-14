
// individuo le variabili da inserire nell'html
const listElement = document.querySelector('div.list')

// faccio l'elenco dei 100 numeri nella pagina
for( let i = 1; i <= 100; i++){
    const cardElement = document.createElement('h3')
    cardElement.innerHTML = i
    listElement.appendChild(cardElement)

    if( i % 3 == 0){
        cardElement.innerHTML = 'Fizz'
    } if( i % 5 == 0){
        cardElement.innerHTML = 'Buzz'
    }if( i % 3 == 0 && i % 5 == 0){
        cardElement.innerHTML = 'FizzBuzz'
    }
}