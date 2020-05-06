movie = {
	title: 'Back to the Future',
	duration: 116,
	stars: [ 'Michael J. Fox', 'Christopher LLoyd', 'Lea Thompson' ]
};

showInfo = (movie) => {
	console.log(movie.title + ' lasts for ' + movie.duration + ' minutes.');
	let starsString = 'Stars: ';
	for (let i = 0; i < movie.stars.length; i++) {
		starsString += movie.stars[i];
		if (i != movie.stars.length - 1) {
			starsString += ', ';
		}
	}
	console.log(starsString + '.');
};

showInfo(movie);
