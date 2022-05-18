function message(choice){

	let flipresult = document.getElementById("results");
	let flip = Math.floor(Math.random() * 2);
	if (flip == 0 && choice == 0){
		flipresult.innerHTML = `<p>You guessed Heads</p><p>The coin landed on Heads</p><p>You guessed correct!</p>`;
	}
	else if (flip == 0 && choice == 1){
		flipresult.innerHTML = `<p>You guessed Tails</p><p>The coin landed on Heads</p><p>You guessed incorrect!</p>`;
	}
	else if (flip == 1 && choice == 1){
		flipresult.innerHTML = `<p>You guessed Tails</p><p>The coin landed on Tails</p><p>You guessed correct!</p>`;
	}
	else if (flip == 1 && choice == 0){
		flipresult.innerHTML = `<p>You guessed Heads</p><p>The coin landed on Tails</p><p>You guessed incorrect!</p>`;
	}
}
