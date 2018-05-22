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
