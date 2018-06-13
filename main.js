let clock = setInterval(function () {
	let weekNames = ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"];

	let d = new Date();
	let first = document.querySelector('#first');
	let second = document.querySelector('#second');

	let weekDay = weekNames[d.getDay()];
	let day = d.getDate();
	let month = ("0" + (d.getMonth() + 1)).substr(-2);
	let year = d.getFullYear();
	let hour = d.getHours();
	let min = ("0" + d.getMinutes()).substr(-2);
	let sec = ("0" + d.getSeconds()).substr(-2);

	let dateNow = 'Dzisiaj jest ' + weekDay + ', ' + day + '.' + month + '.' + year + ' r.';
	let timeNow = 'Aktualna godzina to ' + hour + ':' + min + ':' + sec + '.'

	first.textContent = dateNow;
	second.textContent = timeNow;
}, 1000);


const secHand = document.querySelector(".sec-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
	const now = new Date();

	const secs = now.getSeconds();
	const secDegrees = (secs * 6) + 90;
	secHand.style.transform = `translateY(-50%) rotate(${secDegrees}deg)`;

	const mins = now.getMinutes();
	const minDegrees = (mins * 6) + 90;
	minHand.style.transform = `translateY(-50%) rotate(${minDegrees}deg)`;

	const hour = now.getHours();
	const hourDegrees = (hour * 30 + ((minDegrees - 90) / 12) + 90);
	hourHand.style.transform = `translate(25%, -50%) rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
