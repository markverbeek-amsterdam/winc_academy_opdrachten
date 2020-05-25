// Taken ophalen uit API

const getData = async () => {
	const apiUrl = 'https://wincacademydatabase.firebaseio.com/mark/tasks.json';
	try {
		const res = await fetch(apiUrl, { method: 'GET' });
		const data = await res.json();
		return data;
	} catch (error) {
		console.log(error);
		alert('Something terrible has happened 😱\n\n' + error);
	}
};

// Taak posten naar API

const postData = async (newtaskbody) => {
	const apiUrl = 'https://wincacademydatabase.firebaseio.com/mark/tasks.json';
	try {
		const res = await fetch(apiUrl, {
			method: 'POST',
			body: newtaskbody
		});
		const data = await res.json();
		return data;
	} catch (error) {
		console.log(error);
		alert('Something terrible has happened 😱\n\n' + error);
	}
};

// Taak verwijderen uit API

const deleteData = async (idtodelete) => {
	const apiUrl = `https://wincacademydatabase.firebaseio.com/mark/tasks/${idtodelete}.json`;
	try {
		const res = await fetch(apiUrl, {
			method: 'DELETE'
		});
		return res;
	} catch (error) {
		console.log(error);
		alert('Something terrible has happened 😱\n\n' + error);
	}
};

// Taak aanpassen met modifyTask

const putData = async (idtomodify, modifytaskbody) => {
	const apiUrl = `https://wincacademydatabase.firebaseio.com/mark/tasks/${idtomodify}.json`;
	try {
		const res = await fetch(apiUrl, {
			method: 'PUT',
			body: modifytaskbody
		});
		return res;
	} catch (error) {
		console.log(error);
		alert('Something terrible has happened 😱\n\n' + error);
	}
};
