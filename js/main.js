const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')
const historyBtn = document.querySelector('.history')
const closeModalBtn = document.querySelector('.close')
const infoBtn = document.querySelector('.fa-question')
const stopwatch = document.querySelector('.stopwatch')
const pTime = document.querySelector('.time')
const ulList = document.querySelector('.time-list')
const modalShadow = document.querySelector('.modal-shadow')

const paletteIcon = document.querySelector('.fa-palette')
const colors = document.querySelector('.colors')
const red = document.querySelector('.red')
const blue = document.querySelector('.blue')
const green = document.querySelector('.green')
let root = document.documentElement;



let countTime;
let minutes = 0;
let seconds = 0;

let timesArr = [];

const handleStart = () => {
	clearInterval(countTime)
	ulList.textContent = ''
	
	countTime = setInterval(() => {
		if(seconds < 9){
			seconds++
			stopwatch.textContent = `${minutes}:0${seconds}`
		} else if (seconds >= 9 && seconds <59) {
			seconds++
			stopwatch.textContent = `${minutes}:${seconds}`
		} else {
			minutes++
			seconds = 0
			stopwatch.textContent = `${minutes}:00`
		}
		
	}, 1000);
}

const handlePause = () => {
	clearInterval(countTime)
}

const handleStop = () => {
	
	if(stopwatch.textContent !== '0:00') {
		pTime.style.visibility = 'visible'
		pTime.innerHTML = `Ostatni czas: ${stopwatch.textContent}`

		timesArr.push(stopwatch.textContent)
	}

	clearAll()
}

const handleReset = () => {
	clearAll()
	pTime.style.visibility = ''
	timesArr = [];
}

const clearAll = () => { // funkcja stworzona, aby nie powtarzać kodu dla handleStop i handleReset
	clearInterval(countTime)
	stopwatch.textContent = '0:00'
	ulList.textContent = ''
	seconds = 0
	minutes = 0
}

const showHistory = () => {
	ulList.textContent = ''
	let num = 1

	timesArr.forEach(time => {
		const newTime = document.createElement('li')
		newTime.innerHTML = `Pomiar nr ${num}: <span>${time}</span>`
		ulList.appendChild(newTime)
		num++
	})
}

// const showModal = () => {
// 	modalShadow.classList.add('modal-animation')
// 	modalShadow.style.display = 'block'
// }
// const hideModal = () => {
// 	modalShadow.classList.remove('modal-animation')
// 	modalShadow.style.display = ''
// } to jest mój sposób, a poniżej Majka

const showModal = () => {
	if (modalShadow.style.display !== 'block') {
		modalShadow.style.display = 'block'
	} else {
		modalShadow.style.display = ''
	}

	modalShadow.classList.toggle('modal-animation')
} // mozemy taką funkcje zrobic, tylko dlatego, ze cień przykrywa nam nasz infoBtn, gdy modal jest aktywny, dzieki czemu jedynym wciskalnym elementem modala jest przycisk Zamknij

startBtn.addEventListener('click', handleStart)
pauseBtn.addEventListener('click', handlePause)
stopBtn.addEventListener('click', handleStop)
resetBtn.addEventListener('click', handleReset)
historyBtn.addEventListener('click', showHistory)
infoBtn.addEventListener('click', showModal)
// closeModalBtn.addEventListener('click', hideModal) - to jest to mojej funkcji
closeModalBtn.addEventListener('click', showModal)
window.addEventListener('click', e => e.target === modalShadow ? showModal() : false)




const showColors = () => {
	colors.classList.toggle('show-colors')
}

paletteIcon.addEventListener('click', showColors)


red.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'rgb(250, 67, 6)')
	root.style.setProperty('--hover-color', 'rgb(168, 48, 9)')
})

blue.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'rgb(29, 106, 205)')
	root.style.setProperty('--hover-color', 'rgb(12, 63, 130)')
})

green.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'rgb(59, 200, 44)')
	root.style.setProperty('--hover-color', 'rgb(17, 116, 6)')
})