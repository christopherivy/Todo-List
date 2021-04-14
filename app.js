const input = document.querySelector("#taskAdd");
const ul = document.querySelector("#todo-list");
const removeButtons = document.querySelectorAll("li buttons");
const previousItems = [];

addItem.addEventListener("click", function (e) {
	e.preventDefault();
	let newTask = input.value;

	if (newTask.length > 0) {
		const newLi = document.createElement("li");
		newLi.innerText = newTask;

		//↓↓↓ resets input value ↓↓↓
		input.value = "";
		ul.appendChild(newLi);

		//↓↓↓ creates button for new li ↓↓↓
		const deleteButton = document.createElement("button");
		deleteButton.innerText = "Delete";

		//this deletes the selected button
		deleteButton.addEventListener("click", function (e) {
			e.preventDefault();
			e.target.parentElement.remove();
		});

		//Linethrough item
		newLi.addEventListener("click", function (e) {
			e.preventDefault();
			let textDecoration = e.target.style.textDecoration;

			if (e.target.tagName === "LI" && textDecoration === "") {
				e.target.style.textDecoration = "line-through";
			} else {
				e.target.style.textDecoration = "";
			}
		});

		newLi.appendChild(deleteButton);
	} else {
		alert("Please enter a task");
	}

	//this area is setting for localStorage
	previousItems.push(localStorage.setItem(newTask, newTask));

	console.log(localStorage);
});
