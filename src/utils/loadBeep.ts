import gravitationalBeep from '../assets/audios/src_assets_audios_gravitational_beep.mp3'

export function loadBeep() {
	const audio = new Audio(gravitationalBeep);
	audio.load();

	return () => {
		audio.currentTime = 0; // Neste caso nao eh necessario
		audio.play().catch(error => console.log('error: audio', error));
	}
}

// precisa fazer o carregamento do audio para ser compativel com o Safari 