const allMovies = movies.map(function(movie) {
	return movie;
});

const getMovieList = document.getElementById('displayedmovies');

const showMovies = (movie) => {
	let x = document.createElement('li');
	let y = document.createElement('a');
	let z = document.createElement('img');
	getMovieList.appendChild(x);
	y.href = [ 'https://www.imdb.com/title/' + movie.imdbID + '/' ];
	y.setAttribute('target', 'blank');
	x.appendChild(y);
	z.src = movie.Poster;
	y.appendChild(z);
};

const clearMovies = (movie) => {
	const getParent = document.getElementById('displayedmovies');
	const getChildrenName = Array.from(document.getElementsByTagName('li'));
	getChildrenName.forEach((item) => {
		getParent.removeChild(item);
	});
};

allMovies.forEach(showMovies);

const getRadioButtons = Array.from(document.getElementsByName('radiobutton'));

getRadioButtons.forEach((button) => {
	button.addEventListener('change', function() {
		clearMovies();

		let filter;
		switch (button.id) {
			case 'nieuwste':
				filter = 'Nieuwste';
				const newestMovies = movies
					.filter((movie) => {
						return parseInt(movie.Year) >= 2014;
					})
					.map((movie) => {
						return movie;
					});
				newestMovies.forEach(showMovies);
				break;
			case 'avengers':
				filter = 'Avengers';
				break;
			case 'xmen':
				filter = 'X-Men';
				break;
			case 'princess':
				filter = 'Princess';
				break;
			case 'batman':
				filter = 'Batman';
		}

		const filteredMovies = movies
			.filter((movie) => {
				return movie.Title.includes(filter);
			})
			.map((movie) => {
				return movie;
			});

		filteredMovies.forEach(showMovies);
	});
});
