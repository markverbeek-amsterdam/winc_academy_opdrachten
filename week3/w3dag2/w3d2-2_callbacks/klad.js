const testNum = (x) => {
	return new Promise((resolve, reject) => {
		console.log(x);
		setTimeout(() => {
			const error = true;
			if (!error) {
				resolve();
				console.log('no error, resolved');
			} else {
				reject('Error: NOT resolved');
			}
		}, 2500);
	});
};

testNum('test1').then(console.log('Hurray!'));

////////////////////////////////////

testFunc = () => {
	console.log('Testfunc uitgevoerd');
};

const posts = [ { title: 'Post One', body: 'This is post one' }, { title: 'Post Two', body: 'This is post two' } ];

function getPosts() {
	setTimeout(() => {
		let output = '';
		posts.forEach((post, index) => {
			output += `<li>${post.title}</li>`;
		});
		document.body.innerHTML = output;
	}, 10);
}

function createPost(post) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			posts.push(post);

			const error = false;

			if (!error) {
				resolve();
			} else {
				reject('Error: Er is iets vreselijks gebeurd');
			}
		}, 3000);
	});
}

// createPost({ title: 'Post Three', body: 'This is post three' }).then(getPosts);

createPost({ title: 'Post Three', body: 'This is post three' }).then(testFunc);

// createPost({ title: 'Post Three', body: 'This is post three' }).then(console.log('Waaaaaah!'));

// const testNum = (numberToTest) =>
// 	new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			if (numberToTest > 10) {
// 				resolve('Hurray');
// 				console.log('bigger than 10');
// 			} else {
// 				reject('Error: NOT bigger than 10');
// 			}
// 		}, 2500);
// 	});
// testNum(9).then((resolve) => console.log(resolve)).catch((err) => console.log(err));
