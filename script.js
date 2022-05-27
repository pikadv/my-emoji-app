let myEmojis = ["🎮", "🍔", "🍹"]

const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")

// buttons //
const pushBtn = document.getElementById("push-btn") // add to end
const unShiftBtn = document.getElementById("unshift-btn") // add to beginning
const popBtn = document.getElementById("pop-btn") // remove from end
const shiftBtn = document.getElementById("shift-btn") // remove from beginning

function render() {
	let emojiRender = ""

	emojiInput.value = ""
	emojiContainer.innerHTML = ""

	for (let i = 0; i < myEmojis.length; i++) {
		emojiRender += myEmojis[i]
	}

	const emoji = document.createElement("span")

	emoji.textContent = emojiRender
	emojiContainer.appendChild(emoji)
}

render()

pushBtn.addEventListener("click", function () {
	if (emojiInput.value) {
		myEmojis.push(emojiInput.value)
		render()
	}
})

unShiftBtn.addEventListener("click", function () {
	if (emojiInput.value) {
		myEmojis.unshift(emojiInput.value)
		render()
	}
})

popBtn.addEventListener("click", function () {
	myEmojis.pop()
	render()
})

shiftBtn.addEventListener("click", function () {
	myEmojis.shift()
	render()
})
