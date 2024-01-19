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
	try {
		let data = await fetch(url);
		return await data.json();

	} catch (e) {
		console.log(e);
		return e.message;
	}
}


async function setAdvice() {
	try {
		let item = await getAdvice();
		let {id, advice} = item.slip
		let pAdvice = document.getElementById("advice");
		let adviceNumber = document.getElementById("advice-number")
		pAdvice.innerText = advice;
		adviceNumber.innerText = `#${id}`;
	} catch (e) {
		console.log(e);
	}


}

