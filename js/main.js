const priceInput = document.querySelector('.price')
const peopleInput = document.querySelector('.people')
const tipList = document.querySelector('.tip')
const button = document.querySelector('.count')
const errorInfo = document.querySelector('.error')
const costInfo = document.querySelector('.cost-info')
const costNumber = document.querySelector('.cost')

const fieldCheck = () => {
    if(priceInput.value == '' || peopleInput.value == '' || tipList.value == 0) {
        errorInfo.textContent = 'Uzupełnij wszystkie pola!'
        costInfo.style.display = ''
    } else {
        errorInfo.textContent = ''
        calculator()
    }
}

const calculator = () => {
    const newPrice = parseFloat(priceInput.value) // Tutaj też potrzebujemy parseFloat, ponieważ rachunki mogą mieć wartości po przecinku, więc nie powinniśmy otrzymywać wyłącznie liczby całkowitej
    const newPeople = parseInt(peopleInput.value)
    // const newTip = parseInt(tipList.value)
    const newTip = parseFloat(tipList.value) // w wypadku tipList operujemy na value, czyli w HTML option i value -> 0.1, 0.15 itd. ParseInt zawsze zwraca nam liczbę całkowitą przez co np. 0.2 jest po prostu przybliżane do "0". Dlatego w tym wypadku musi być parseFloat, który

    const sum =  (newPrice + (newPrice* newTip)) / newPeople

    costInfo.style.display = 'block'
    costNumber.textContent = sum.toFixed(2)
}

button.addEventListener('click', fieldCheck)