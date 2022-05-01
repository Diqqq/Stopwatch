const ball = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answersArr = ['Tak', 'Nie wiadomo...', 'Nie']

const checkInput = () => {
	if (input.value === '') {
		error.textContent = 'Musisz zadać jakieś pytanie!'
		answer.textContent = ''
	} else if (input.value.slice(-1) !== '?') {
		error.textContent = 'Pytanie musi być zakończone znakiem "?".'
		answer.textContent = ''
	} else {
		error.textContent = ''
		randomAnswerGenerator()
	}
    ball.classList.remove('shake-animation')
}

const randomAnswerGenerator = () => {
	const randomAnswer = Math.floor(Math.random() * answersArr.length)
	answer.innerHTML = `<span>Odpowiedź:</span> ${answersArr[randomAnswer]}`
}

const ballShake = () => {
	ball.classList.add('shake-animation')
    setTimeout(checkInput, 1000) 
}

ball.addEventListener('click', ballShake)
