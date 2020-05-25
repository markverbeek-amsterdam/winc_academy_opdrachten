// Get tasks

const getTasks = async () => {
	const taskList = document.getElementById('tasklist');
	taskList.innerHTML = '';

	const result = await getData();
	let tasks = Object.keys(result).map((key) => ({
		id: key,
		description: result[key].description,
		done: result[key].done
	}));

	// Display tasks delete buttons and checkboxes

	tasks.forEach((task) => {
		taskList.innerHTML += `<div class="taskdiv" id ="${task.id}" >
        <li class="description">${task.description} </li>
        <button class ="deletebutton" type="button"><img src="trash-delete-icon.jpg " width="10" height="10" border="none"></button>
		</div>`;
		const getTask = document.getElementById(task.id);
		const getDescription = getTask.querySelector('.description');
		if (task.done == 'true') {
			getDescription.classList.add('taskdone');
			getTask.innerHTML =
				`<input type="checkbox" class="checkbox" name="taskcheckbox" checked> </input>` + getTask.innerHTML;
		} else if (task.done == 'false') {
			getTask.innerHTML =
				`<input type="checkbox" class="checkbox" name="taskcheckbox"> </input>` + getTask.innerHTML;
		}
		const getCheckbox = getTask.querySelector('.checkbox');
	});

	// eventlistener aan  de checkbox bij verandering

	const checkboxes = Array.from(document.getElementsByClassName('checkbox'));

	checkboxes.forEach((checkbox) => {
		checkbox.addEventListener('change', () => {
			const checkboxParent = checkbox.parentElement;
			const currentDescription = checkboxParent.querySelector('.description').innerHTML;
			const currentDescriptionField = checkboxParent.querySelector('.description');
			if (checkbox.checked) {
				modifyTask(checkboxParent.id, currentDescription, 'true');
				currentDescriptionField.classList.add('taskdone');
			} else {
				modifyTask(checkboxParent.id, currentDescription, 'false');
				currentDescriptionField.classList.remove('taskdone');
			}
		});
	});

	// Delete tasks

	const deleteButtons = Array.from(document.getElementsByClassName('deletebutton'));

	deleteButtons.forEach((button) => {
		button.addEventListener('click', () => {
			deleteTask(button.parentNode.id);
			const itemtoremove = button.parentNode;
			taskList.removeChild(itemtoremove);
		});
	});
};

getTasks();

//Submit new tasks

const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const newtaskdescription = document.getElementById('taskdescription');
	postTask(newtaskdescription.value, 'false');

	// loskoppelen van reload/gettasks en hier een nieuw li aanmaken en toevoegen
});

const postTask = async function(newtaskdescription, state) {
	const newtaskbody = JSON.stringify({ description: `${newtaskdescription}`, done: `${state}` });
	await postData(newtaskbody);
	getTasks();
};

//Delete tasks

const deleteTask = async (idtodelete) => {
	await deleteData(idtodelete);
};

// Modify tasks

const modifyTask = async (idtomodify, modifydescription, state) => {
	const modifytaskbody = JSON.stringify({ description: `${modifydescription}`, done: `${state}` });
	await putData(idtomodify, modifytaskbody);
};
