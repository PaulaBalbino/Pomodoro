let isRunning = false;

self.onmessage = function (event) {
	if (isRunning)
		return

	isRunning = true;

	const state = event.data;
	const {active, secondsRemaining } = state;

	const endDate = activeTask.startDate + secondsRemaining * 1000; // * 1000 pois esta em miliseconds
		const now = Date.now();
		let countDownSeconds = Math.ceil((endDate - now) / 1000);

	function tick() {
		self.postMessage(countDownSeconds);
		const now = Date.now();
		const countDownSeconds = Math.floor((endDate - now) / 1000);

		setTimeout(tick, 1000); // executa a funcao por 1 segundo (ajuste)
	}

	tick();

};

// nao usar setInterval pois se a aba for minimizada por impactar o countdown