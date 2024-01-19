const url = "https://api.adviceslip.com/advice";
let diceButton = document.querySelector(".dice-button");

diceButton.addEventListener("click", (e) => {
	e.target.classList.add("active");
	setAdvice();
	e.target.addEventListener("animationend", () => {
		e.target.classList.remove("active");

	})
})
async function getAdvice() {
	let data = await fetch(url);
	return data.json();
}


function setAdvice() {
		let data = getAdvice();
		data.then(item => {
			let {id, advice} = item.slip
			let pAdvice = document.getElementById("advice");
			let adviceNumber = document.getElementById("advice-number")
			pAdvice.innerText = advice;
			adviceNumber.innerText = `#${id}`;
		}).catch(error => {
			console.log(error)
		})
}

