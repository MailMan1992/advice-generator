const url = "https://api.adviceslip.com/advice";
let diceButton = document.querySelector(".dice-button");

diceButton.addEventListener("click",async (e) => {
	e.target.classList.add("active");
	if(e.target.classList.contains("active")) {
		await setAdvice(e)
	}

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


async function setAdvice(e) {
	try {
		let item = await getAdvice();
		console.log(item)
		let {id, advice} = item.slip
		let pAdvice = document.getElementById("advice");
		let adviceNumber = document.getElementById("advice-number")
		pAdvice.innerText = advice;
		adviceNumber.innerText = `#${id}`;
		setTimeout(() => {
			e.target.classList.remove("active");
		}, 2000)

	} catch (e) {
		console.log(e);
	}


}

