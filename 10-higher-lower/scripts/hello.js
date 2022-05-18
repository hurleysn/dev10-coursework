let num = Math.floor(Math.random()* 20) + 1;



function guess(num){
	let guess = Number(document.getElementById('guess').value);

	let guessresult = document.getElementById("guessres");

	if(num == guess){
		guessresult.innerHTML = `You got it! Your guess was ${guess}, the number was ${num}`;
	}
	else if (num > guess){
		guessresult.innerHTML = `No, try a higher number. Your guess was ${guess}.<br>`;
	}
	else if (num < guess){
		guessresult.innerHTML = `No, try a lower number. Your guess was ${guess}.<br>`;
	}
}

