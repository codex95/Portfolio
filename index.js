// to simulate raining characters like in Matrix

const canvas = document.getElementById('matrix');
const context = canvas.getContext('2d');

// to cover whole viewport
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// characters set
const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

// combine characters to a bigger string
const alphabet = katakana + latin + nums;

// define font size and calculate how many characters can fit on the screen horizontally
const fontSize = 16;
const columns = canvas.width/fontSize;

// create raindrops array
const rainDrops = [];

// initialize effects 
// for every column set the value to 1
for( let x = 0; x < columns; x++ ) {
	rainDrops[x] = 1;
}

// draw function to draw raindrops
const draw = () => {
    // draw a semi transparent black rectangle on top of the scene to slowly fade older characters
	context.fillStyle = 'rgba(0, 0, 0, 0.05)';
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	context.fillStyle = '#0F0';
	context.font = fontSize + 'px monospace';

	for(let i = 0; i < rainDrops.length; i++)
	{
		const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        // x and y coordinates times the font size to get perfect spacing
		context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
		
        // to check if raindrops crossed the bottom border of viewport
		if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
			rainDrops[i] = 0;
        }
		rainDrops[i]++;
	}
};

// draw function to make rain effect continuosly
setInterval(draw, 30);